import axios from 'axios';

const API_BASE = 'http://localhost:3004';

const SESSION_ID = localStorage.getItem('sessionId') || Math.random().toString(36).substr(2, 9);
if (!localStorage.getItem('sessionId')) localStorage.setItem('sessionId', SESSION_ID);

export const productAPI = {
  getAll: () => axios.get(`${API_BASE}/products`),
  getByCategory: (category: string) => axios.get(`${API_BASE}/products?category=${category}`),
  getOne: (id: string) => axios.get(`${API_BASE}/products/${id}`),
  create: (data: any) => axios.post(`${API_BASE}/products`, data),
};

export const cartAPI = {
  addToCart: (productId: string, quantity: number) =>
    axios.post(`${API_BASE}/cart/${SESSION_ID}/add/${productId}`, { quantity }),
  getCart: () => axios.get(`${API_BASE}/cart/${SESSION_ID}`),
  removeFromCart: (itemId: string) => axios.delete(`${API_BASE}/cart/${itemId}`),
  updateQuantity: (itemId: string, quantity: number) =>
    axios.put(`${API_BASE}/cart/${itemId}/quantity`, { quantity }),
  clearCart: () => axios.delete(`${API_BASE}/cart/${SESSION_ID}/clear`),
};

export const orderAPI = {
  checkout: (customerName: string, customerEmail: string) =>
    axios.post(`${API_BASE}/orders/checkout`, {
      customerName,
      customerEmail,
      sessionId: SESSION_ID,
    }),
  getOrders: (email?: string) =>
    axios.get(`${API_BASE}/orders${email ? `?email=${email}` : ''}`),
};

export { SESSION_ID };
