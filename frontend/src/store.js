import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import {
  adminDeleteOrdersReducer,
  adminDeliverOrderReducer,
  adminOrdersReducer,
  orderCreateReducer,
  orderDetailsReducer,
  orderHistoryReducer,
  orderPayReducer,
} from "./reducers/orderReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  productCategoryListReducer,
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import {
  topSellersReducer,
  updateUserProfileReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "PayPal",
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderHistory: orderHistoryReducer,
  userDetails: userDetailsReducer,
  updateUserProfile: updateUserProfileReducer,
  userUpdate: userUpdateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  adminOrdersList: adminOrdersReducer,
  adminDeleteOrder: adminDeleteOrdersReducer,
  adminDeliverOrder: adminDeliverOrderReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  topSellers: topSellersReducer,
  productCategoryList: productCategoryListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
