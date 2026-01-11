import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductService } from './products/product.service';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productService = app.get(ProductService);

  const products = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 99.99,
      stock: 50,
      category: 'Electronics',
    },
    {
      name: 'Smart Watch',
      description: 'Fitness tracker with heart rate monitor and GPS',
      price: 199.99,
      stock: 30,
      category: 'Electronics',
    },
    {
      name: 'Laptop Stand',
      description: 'Ergonomic aluminum laptop stand',
      price: 49.99,
      stock: 100,
      category: 'Accessories',
    },
    {
      name: 'USB-C Cable',
      description: 'Fast charging USB-C cable 6ft',
      price: 12.99,
      stock: 200,
      category: 'Accessories',
    },
    {
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical gaming keyboard with blue switches',
      price: 129.99,
      stock: 45,
      category: 'Electronics',
    },
    {
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      price: 39.99,
      stock: 75,
      category: 'Electronics',
    },
    {
      name: 'Phone Case',
      description: 'Protective silicone phone case',
      price: 19.99,
      stock: 150,
      category: 'Accessories',
    },
    {
      name: 'Portable Charger',
      description: '20000mAh portable power bank',
      price: 34.99,
      stock: 60,
      category: 'Electronics',
    },
    {
      name: 'Desk Lamp',
      description: 'LED desk lamp with adjustable brightness',
      price: 29.99,
      stock: 80,
      category: 'Home',
    },
    {
      name: 'Water Bottle',
      description: 'Insulated stainless steel water bottle 32oz',
      price: 24.99,
      stock: 120,
      category: 'Home',
    },
    {
      name: 'Backpack',
      description: 'Laptop backpack with USB charging port',
      price: 59.99,
      stock: 40,
      category: 'Accessories',
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Portable waterproof Bluetooth speaker',
      price: 79.99,
      stock: 55,
      category: 'Electronics',
    },
  ];

  console.log('🌱 Seeding database...');

  for (const product of products) {
    try {
      await productService.create(product);
      console.log(`✅ Created: ${product.name}`);
    } catch (error) {
      console.log(`⚠️  Skipped: ${product.name} (may already exist)`);
    }
  }

  console.log('✨ Seeding completed!');
  await app.close();
}

seed().catch((error) => {
  console.error('❌ Seeding failed:', error);
  process.exit(1);
});
