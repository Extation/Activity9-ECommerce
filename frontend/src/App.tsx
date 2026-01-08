import React, { useState, useEffect } from 'react';
import { productAPI, cartAPI, orderAPI } from './api';
import './App.css';
import { FaShoppingCart, FaTrash, FaCheckCircle, FaBox } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
}

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: Product;
}

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  totalPrice: number;
  status: string;
  items: any[];
  createdAt: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [view, setView] = useState<'shop' | 'cart' | 'orders'>('shop');
  const [checkoutData, setCheckoutData] = useState({ name: '', email: '' });
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    loadCart();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await productAPI.getAll();
      setProducts(res.data);
      const cats = [...new Set(res.data.map((p: Product) => p.category))];
      setCategories(cats as string[]);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const loadCart = async () => {
    try {
      const res = await cartAPI.getCart();
      setCart(res.data);
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const loadOrders = async () => {
    try {
      const res = await orderAPI.getOrders(checkoutData.email || undefined);
      setOrders(res.data);
    } catch (error) {
      console.error('Error loading orders:', error);
    }
  };

  const handleFilterByCategory = async (category: string) => {
    setSelectedCategory(category);
    if (category) {
      try {
        const res = await productAPI.getByCategory(category);
        setProducts(res.data);
      } catch (error) {
        console.error('Error filtering products:', error);
      }
    } else {
      loadProducts();
    }
  };

  const handleAddToCart = async (productId: string) => {
    try {
      await cartAPI.addToCart(productId, 1);
      loadCart();
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Could not add to cart. Check stock availability.');
    }
  };

  const handleRemoveFromCart = async (cartItemId: string) => {
    try {
      await cartAPI.removeFromCart(cartItemId);
      loadCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const handleUpdateQuantity = async (cartItemId: string, quantity: number) => {
    if (quantity < 1) return;
    try {
      await cartAPI.updateQuantity(cartItemId, quantity);
      loadCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleCheckout = async () => {
    if (!checkoutData.name || !checkoutData.email) {
      alert('Please enter your name and email');
      return;
    }
    try {
      await orderAPI.checkout(checkoutData.name, checkoutData.email);
      await cartAPI.clearCart();
      setCart([]);
      setCheckoutData({ name: '', email: '' });
      setView('orders');
      loadOrders();
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error checking out:', error);
      alert('Checkout failed');
    }
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.product.price.toString()) * item.quantity,
    0,
  );

  return (
    <div className="ecommerce-app">
      <header className="header">
        <h1>🛒 E-Commerce Store</h1>
        <nav className="nav">
          <button className={`nav-btn ${view === 'shop' ? 'active' : ''}`} onClick={() => setView('shop')}>
            <FaBox /> Shop
          </button>
          <button className={`nav-btn ${view === 'cart' ? 'active' : ''}`} onClick={() => setView('cart')}>
            <FaShoppingCart /> Cart ({cart.length})
          </button>
          <button
            className={`nav-btn ${view === 'orders' ? 'active' : ''}`}
            onClick={() => {
              setView('orders');
              loadOrders();
            }}
          >
            <FaCheckCircle /> Orders
          </button>
        </nav>
      </header>

      {view === 'shop' && (
        <main className="shop-section">
          <aside className="filters">
            <h3>Categories</h3>
            <button
              className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
              onClick={() => handleFilterByCategory('')}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => handleFilterByCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </aside>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <FaBox className="box-icon" />
                </div>
                <h3>{product.name}</h3>
                <p className="description">{product.description}</p>
                <p className="category">{product.category}</p>
                <div className="product-footer">
                  <span className="price">${parseFloat(product.price.toString()).toFixed(2)}</span>
                  <span className={`stock ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
                <button
                  className="btn-add-to-cart"
                  onClick={() => handleAddToCart(product.id)}
                  disabled={product.stock === 0}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      )}

      {view === 'cart' && (
        <main className="cart-section">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart className="empty-icon" />
              <h2>Your cart is empty</h2>
              <p>Start shopping to add items to your cart</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h4>{item.product.name}</h4>
                      <p className="item-price">
                        ${parseFloat(item.product.price.toString()).toFixed(2)} each
                      </p>
                    </div>
                    <div className="item-quantity">
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="item-total">
                      ${(
                        parseFloat(item.product.price.toString()) * item.quantity
                      ).toFixed(2)}
                    </div>
                    <button
                      className="btn-remove"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <div className="checkout-form">
                  <h4>Checkout</h4>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={checkoutData.name}
                    onChange={(e) => setCheckoutData({ ...checkoutData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={checkoutData.email}
                    onChange={(e) => setCheckoutData({ ...checkoutData, email: e.target.value })}
                  />
                  <button className="btn-checkout" onClick={handleCheckout}>
                    <FaCheckCircle /> Place Order
                  </button>
                </div>
              </div>
            </>
          )}
        </main>
      )}

      {view === 'orders' && (
        <main className="orders-section">
          {orders.length === 0 ? (
            <div className="empty-orders">
              <h2>No orders yet</h2>
              <p>You haven't placed any orders yet</p>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <h3>Order {order.id.substring(0, 8)}</h3>
                    <span className="order-status">{order.status}</span>
                  </div>
                  <div className="order-info">
                    <p>
                      <strong>Customer:</strong> {order.customerName}
                    </p>
                    <p>
                      <strong>Email:</strong> {order.customerEmail}
                    </p>
                    <p>
                      <strong>Total:</strong> ${parseFloat(order.totalPrice.toString()).toFixed(2)}
                    </p>
                    <p>
                      <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="order-items">
                    <strong>Items:</strong>
                    {order.items.map((item: any, idx: number) => (
                      <div key={idx} className="order-item-row">
                        <span>{item.product?.name || 'Product'}</span>
                        <span>x{item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;
