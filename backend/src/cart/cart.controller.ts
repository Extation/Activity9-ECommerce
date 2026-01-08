import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { AddToCartDto } from '../dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':sessionId/add/:productId')
  @ApiOperation({ summary: 'Add product to cart' })
  addToCart(
    @Param('sessionId') sessionId: string,
    @Param('productId') productId: string,
    @Body() addToCartDto: AddToCartDto,
  ) {
    return this.cartService.addToCart(sessionId, productId, addToCartDto);
  }

  @Get(':sessionId')
  @ApiOperation({ summary: 'Get cart items for session' })
  getCart(@Param('sessionId') sessionId: string) {
    return this.cartService.getCart(sessionId);
  }

  @Delete(':itemId')
  @ApiOperation({ summary: 'Remove item from cart' })
  removeFromCart(@Param('itemId') itemId: string) {
    return this.cartService.removeFromCart(itemId);
  }

  @Delete(':sessionId/clear')
  @ApiOperation({ summary: 'Clear entire cart' })
  clearCart(@Param('sessionId') sessionId: string) {
    return this.cartService.clearCart(sessionId);
  }

  @Put(':itemId/quantity')
  @ApiOperation({ summary: 'Update item quantity' })
  updateQuantity(
    @Param('itemId') itemId: string,
    @Body() body: { quantity: number },
  ) {
    return this.cartService.updateQuantity(itemId, body.quantity);
  }
}
