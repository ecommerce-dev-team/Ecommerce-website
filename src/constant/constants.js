// constants.ts

export const BASE_URL = "https://ecommerce.routemisr.com";

// Products
export const PRODUCTS = {
  GET_ALL: `${BASE_URL}/api/v1/products`,
  GET_BY_ID: (id) => `${BASE_URL}/api/v1/products/${id}`,
};

// Categories
export const CATEGORIES = {
  GET_ALL: `${BASE_URL}/api/v1/categories`,
  GET_BY_ID: (id) => `${BASE_URL}/api/v1/categories/${id}`,
  GET_SUBCATEGORIES: (categoryId) =>
    `${BASE_URL}/api/v1/categories/${categoryId}/subcategories`,
};

// Subcategories
export const SUBCATEGORIES = {
  GET_ALL: `${BASE_URL}/api/v1/subcategories`,
  GET_BY_ID: (id) => `${BASE_URL}/api/v1/subcategories/${id}`,
};

// Brands
export const BRANDS = {
  GET_ALL: `${BASE_URL}/api/v1/brands`,
  GET_BY_ID: (id) => `${BASE_URL}/api/v1/brands/${id}`,
};

// Authentication
export const AUTH = {
  SIGNUP: `${BASE_URL}/api/v1/auth/signup`,
  SIGNIN: `${BASE_URL}/api/v1/auth/signin`,
  FORGOT_PASSWORD: `${BASE_URL}/api/v1/auth/forgotPasswords`,
  VERIFY_RESET_CODE: `${BASE_URL}/api/v1/auth/verifyResetCode`,
  RESET_PASSWORD: `${BASE_URL}/api/v1/auth/resetPassword`,
  VERIFY_TOKEN: `${BASE_URL}/api/v1/auth/verifyToken`,
};

// User
export const USER = {
  GET_ALL: `${BASE_URL}/api/v1/users`,
  UPDATE_ME: `${BASE_URL}/api/v1/users/updateMe`,
  CHANGE_PASSWORD: `${BASE_URL}/api/v1/users/changeMyPassword`,
};

// Wishlist
export const WISHLIST = {
  ADD: `${BASE_URL}/api/v1/wishlist`,
  REMOVE: (productId) => `${BASE_URL}/api/v1/wishlist/${productId}`,
  GET_LOGGED_USER: `${BASE_URL}/api/v1/wishlist`,
};

// Addresses
export const ADDRESSES = {
  ADD: `${BASE_URL}/api/v1/addresses`,
  GET_ALL: `${BASE_URL}/api/v1/addresses`,
  GET_BY_ID: (id) => `${BASE_URL}/api/v1/addresses/${id}`,
  DELETE: (id) => `${BASE_URL}/api/v1/addresses/${id}`,
};

// Cart
export const CART = {
  ADD_PRODUCT: `${BASE_URL}/api/v1/cart`,
  GET_USER_CART: `${BASE_URL}/api/v1/cart`,
  UPDATE_QUANTITY: (productId) => `${BASE_URL}/api/v1/cart/${productId}`,
  REMOVE_ITEM: (productId) => `${BASE_URL}/api/v1/cart/${productId}`,
  CLEAR_CART: `${BASE_URL}/api/v1/cart`,
};

// Orders
export const ORDERS = {
  CREATE_CASH_ORDER: (cartId) => `${BASE_URL}/api/v1/orders/${cartId}`,
  GET_ALL: `${BASE_URL}/api/v1/orders/`,
  GET_USER_ORDERS: (userId) => `${BASE_URL}/api/v1/orders/user/${userId}`,
  CHECKOUT_SESSION: (cartId, returnUrl) =>
    `${BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=${returnUrl}`,
};
