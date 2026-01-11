import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ProductModule } from './products/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './orders/order.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { Product } from './products/product.entity';
import { CartItem } from './cart/cart-item.entity';
import { Order } from './orders/order.entity';
import { OrderItem } from './orders/order-item.entity';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'ecommerce.db',
      entities: [Product, CartItem, Order, OrderItem, User],
      synchronize: true,
      logging: true,
    }),
    ProductModule,
    CartModule,
    OrderModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
