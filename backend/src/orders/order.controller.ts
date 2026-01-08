import { Controller, Get, Post, Body, Param, Put, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CheckoutDto } from '../dto';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('checkout')
  @ApiOperation({ summary: 'Checkout and create order' })
  checkout(@Body() checkoutDto: CheckoutDto) {
    return this.orderService.checkout(checkoutDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  getOrders(@Query('email') email?: string) {
    if (email) {
      return this.orderService.getOrderByEmail(email);
    }
    return this.orderService.getOrders();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order by ID' })
  getOrder(@Param('id') id: string) {
    return this.orderService.getOrder(id);
  }

  @Put(':id/status')
  @ApiOperation({ summary: 'Update order status' })
  updateStatus(
    @Param('id') id: string,
    @Body() body: { status: string },
  ) {
    return this.orderService.updateOrderStatus(id, body.status);
  }
}
