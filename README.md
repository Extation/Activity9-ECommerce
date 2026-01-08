# Activity 9: Mini E-Commerce API + UI

## Description
A complete e-commerce platform with product catalog, shopping cart, order management, and stock validation. Features product browsing by category, cart management, and checkout functionality.

## Features
- ✅ Product catalog with categories
- ✅ Shopping cart functionality
- ✅ Stock validation
- ✅ Order checkout and history
- ✅ Price calculations
- ✅ Session-based cart management
- ✅ Product filtering by category

## Tech Stack
- **Backend**: NestJS + TypeScript
- **Frontend**: ReactJS
- **Database**: SQLite
- **API Documentation**: Swagger/OpenAPI

## API Endpoints

### Products
- `GET /products` - Get all products
- `GET /products?category=category` - Filter by category
- `POST /products` - Create product
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Cart
- `POST /cart/:sessionId/add/:productId` - Add to cart
- `GET /cart/:sessionId` - Get cart items
- `DELETE /cart/:itemId` - Remove from cart
- `PUT /cart/:itemId/quantity` - Update quantity
- `DELETE /cart/:sessionId/clear` - Clear cart

### Orders
- `POST /orders/checkout` - Create order from cart
- `GET /orders` - Get all orders
- `GET /orders?email=email` - Get orders by email
- `GET /orders/:id` - Get order by ID
- `PUT /orders/:id/status` - Update order status

## Installation & Setup

### Backend
```bash
cd backend
npm install
npm run dev
```
API: `http://localhost:3004`
Swagger: `http://localhost:3004/api/docs`

### Frontend
```bash
cd frontend
npm install
npm start
```
App: `http://localhost:3000`

## Usage
1. Browse products by category
2. Add products to cart
3. Adjust quantities
4. Proceed to checkout
5. Enter customer information
6. Place order
7. View order history
