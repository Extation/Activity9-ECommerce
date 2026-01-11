# Activity 9: Mini E-Commerce API + UI

## Description
A complete e-commerce platform with product catalog, shopping cart, order management, and stock validation. Features a professional landing page, product browsing by category, cart management, and checkout functionality.

## Features
- ✅ **Professional Landing Page** with hero section and features showcase
- ✅ Product catalog with categories
- ✅ Shopping cart functionality
- ✅ Stock validation
- ✅ Order checkout and history
- ✅ Price calculations
- ✅ Session-based cart management
- ✅ Product filtering by category
- ✅ Modern, responsive UI with smooth animations
- ✅ Professional footer with contact information

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
1. **Landing Page**: Start at the professional landing page with hero section
2. **Browse Products**: Click "Start Shopping" or navigate to Shop
3. **Filter by Category**: Use category filters to find specific products
4. **Add to Cart**: Click "Add to Cart" on any product
5. **Manage Cart**: Adjust quantities or remove items
6. **Checkout**: Enter customer information and place order
7. **Order History**: View your past orders in the Orders section

## Screenshots

### Landing Page
- Hero section with call-to-action buttons
- Features showcase highlighting platform benefits
- Category preview cards
- Statistics section
- Professional footer

### Shop Page
- Product grid with category filters
- Product cards with images, descriptions, and pricing
- Stock availability indicators
- Smooth hover animations

### Cart & Checkout
- Interactive cart management
- Real-time price calculations
- Simple checkout process
- Order confirmation
