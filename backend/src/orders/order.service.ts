import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { CartService } from '../cart/cart.service';
import { ProductService } from '../products/product.service';
import { CheckoutDto } from '../dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
    private cartService: CartService,
    private productService: ProductService,
  ) {}

  async checkout(checkoutDto: CheckoutDto): Promise<Order> {
    const cartItems = await this.cartService.getCart(checkoutDto.sessionId);
    if (cartItems.length === 0) {
      throw new BadRequestException('Cart is empty');
    }

    let totalPrice = 0;
    const orderItems: OrderItem[] = [];

    for (const cartItem of cartItems) {
      const product = await this.productService.findOne(cartItem.productId);
      if (product.stock < cartItem.quantity) {
        throw new BadRequestException(`Insufficient stock for ${product.name}`);
      }

      const itemTotal = parseFloat(product.price.toString()) * cartItem.quantity;
      totalPrice += itemTotal;

      const orderItem = this.orderItemRepository.create({
        productId: product.id,
        quantity: cartItem.quantity,
        price: product.price,
      });
      orderItems.push(orderItem);

      await this.productService.decreaseStock(product.id, cartItem.quantity);
    }

    const order = this.orderRepository.create({
      customerEmail: checkoutDto.customerEmail,
      customerName: checkoutDto.customerName,
      totalPrice,
      status: 'completed',
      items: orderItems,
    });

    const savedOrder = await this.orderRepository.save(order);
    await this.cartService.clearCart(checkoutDto.sessionId);
    return savedOrder;
  }

  async getOrders(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['items', 'items.product'],
      order: { createdAt: 'DESC' },
    });
  }

  async getOrder(id: string): Promise<Order> {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['items', 'items.product'],
    });
  }

  async getOrderByEmail(email: string): Promise<Order[]> {
    return this.orderRepository.find({
      where: { customerEmail: email },
      relations: ['items', 'items.product'],
    });
  }

  async updateOrderStatus(id: string, status: string): Promise<Order> {
    await this.orderRepository.update(id, { status });
    return this.getOrder(id);
  }
}
