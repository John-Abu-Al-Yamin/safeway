import {configureStore} from '@reduxjs/toolkit';
 import productReducer from './productSlice';
 import productsReducer from './productReducer';
 import categoriesReducer from './categoriesSlice';
 
 import authReducer from './auth/authSlice';
 
const store = configureStore({
reducer:{
  product:productReducer,
   products:productsReducer,
  category:categoriesReducer,
   auth:authReducer,

 }
}); 

export default store;