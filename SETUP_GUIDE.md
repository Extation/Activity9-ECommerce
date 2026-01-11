# 🚀 E-Commerce Application Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

## 📦 Installation

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
```

## 🌱 Seed Database (Optional)

To populate the database with sample products:

```bash
cd backend
npm run seed
```

This will add 12 sample products across different categories (Electronics, Accessories, Home).

## 🏃 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```

The backend API will be available at: `http://localhost:3004`

Swagger API Documentation: `http://localhost:3004/api/docs`

### Start Frontend Application
```bash
cd frontend
npm run dev
```

The frontend will be available at: `http://localhost:3000`

## 📚 API Documentation

Once the backend is running, visit `http://localhost:3004/api/docs` to see the interactive Swagger API documentation.

### Available Endpoints

#### Products
- `GET /products` - Get all products
- `GET /products?category={category}` - Filter products by category
- `POST /products` - Create a new product
- `GET /products/:id` - Get product by ID
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

#### Cart
- `POST /cart/:sessionId/add/:productId` - Add product to cart
- `GET /cart/:sessionId` - Get cart items
- `DELETE /cart/:itemId` - Remove item from cart
- `PUT /cart/:itemId/quantity` - Update item quantity
- `DELETE /cart/:sessionId/clear` - Clear cart

#### Orders
- `POST /orders/checkout` - Create order from cart
- `GET /orders` - Get all orders
- `GET /orders?email={email}` - Get orders by email
- `GET /orders/:id` - Get order by ID
- `PUT /orders/:id/status` - Update order status

## 🧪 Testing the Application

1. **Browse Products**: Navigate to the shop page and view available products
2. **Filter by Category**: Use the category filters to narrow down products
3. **Add to Cart**: Click "Add to Cart" on any product
4. **Manage Cart**: View cart, update quantities, or remove items
5. **Checkout**: Enter customer information and place an order
6. **View Orders**: Check order history in the Orders section

## 🗄️ Database

The application uses SQLite database (`ecommerce.db`) which will be automatically created in the backend directory when you first run the application.

## 🛠️ Tech Stack

### Backend
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: SQLite
- **ORM**: TypeORM
- **Validation**: class-validator
- **API Docs**: Swagger/OpenAPI

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Styling**: CSS3

## 📝 Features

✅ Product catalog with categories
✅ Shopping cart functionality
✅ Stock validation
✅ Order checkout and history
✅ Price calculations
✅ Session-based cart management
✅ Product filtering by category
✅ Responsive design
✅ Real-time stock updates
✅ Order tracking

## 🔧 Troubleshooting

### Backend won't start
- Ensure port 3004 is not in use
- Check if all dependencies are installed
- Verify Node.js version is compatible

### Frontend won't start
- Ensure port 3000 is not in use
- Check if backend is running
- Verify API_BASE URL in `frontend/src/api.ts`

### Database issues
- Delete `ecommerce.db` file and restart the backend
- Run seed script again if needed

## 📄 Project Structure

```
Activity9-ECommerce/
├── backend/
│   ├── src/
│   │   ├── products/      # Product module
│   │   ├── cart/          # Cart module
│   │   ├── orders/        # Orders module
│   │   ├── app.module.ts  # Main app module
│   │   ├── main.ts        # Entry point
│   │   ├── dto.ts         # Data transfer objects
│   │   └── seed.ts        # Database seeding
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.tsx        # Main component
│   │   ├── App.css        # Styles
│   │   ├── api.ts         # API client
│   │   └── index.tsx      # Entry point
│   └── package.json
└── README.md
```

## 🎯 Next Steps

1. Customize product categories
2. Add product images
3. Implement user authentication
4. Add payment gateway integration
5. Implement order status tracking
6. Add email notifications
7. Create admin dashboard

## 📞 Support

For issues or questions, please refer to the project documentation or create an issue in the repository.

---

**Happy Shopping! 🛍️**
