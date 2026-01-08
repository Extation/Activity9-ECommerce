import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './cart-item.entity';
import { ProductService } from '../products/product.service';
import { AddToCartDto } from '../dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private cartItemRepository: Repository<CartItem>,
    private productService: ProductService,
  ) {}

  async addToCart(sessionId: string, productId: string, addToCartDto: AddToCartDto): Promise<CartItem> {
    const product = await this.productService.findOne(productId);
    if (!product) throw new BadRequestException('Product not found');
    if (product.stock < addToCartDto.quantity) {
      throw new BadRequestException('Insufficient stock');
    }

    const existingItem = await this.cartItemRepository.findOne({
      where: { sessionId, productId },
    });

    if (existingItem) {
      existingItem.quantity += addToCartDto.quantity;
      return this.cartItemRepository.save(existingItem);
    }

    const cartItem = this.cartItemRepository.create({
      sessionId,
      productId,
      quantity: addToCartDto.quantity,
    });
    return this.cartItemRepository.save(cartItem);
  }

  async getCart(sessionId: string): Promise<CartItem[]> {
    return this.cartItemRepository.find({
      where: { sessionId },
      relations: ['product'],
    });
  }

  async removeFromCart(cartItemId: string): Promise<void> {
    await this.cartItemRepository.delete(cartItemId);
  }

  async clearCart(sessionId: string): Promise<void> {
    await this.cartItemRepository.delete({ sessionId });
  }

  async updateQuantity(cartItemId: string, quantity: number): Promise<CartItem> {
    await this.cartItemRepository.update(cartItemId, { quantity });
    return this.cartItemRepository.findOne({ where: { id: cartItemId } });
  }
}
