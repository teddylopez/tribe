import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

import { signout } from "./actions/userActions";
import AdminEditUserPage from "./pages/AdminEditUserPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminRoute from "./components/AdminRoute";
import AdminUsersPage from "./pages/AdminUsersPage";
import CartPage from "./pages/CartPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import SellerRoute from "./components/SellerRoute";
import ShippingPage from "./pages/ShippingPage";
import SigninPage from "./pages/SigninPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              tribe
            </Link>
          </div>
          <div>
            <div className="row">
              <Link to="/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile">User Profile</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory">Order History</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
              {userInfo && userInfo.isSeller && (
                <div className="dropdown">
                  <Link to="#admin">
                    Seller <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/productlist/seller">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist/seller">Orders</Link>
                    </li>
                  </ul>
                </div>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link to="#admin">
                    Admin <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/productlist">Products</Link>
                    </li>
                    <li>
                      <Link to="/orderlist">Orders</Link>
                    </li>
                    <li>
                      <Link to="/userlist">Users</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage} exact />
          <Route path="/product/:id/edit" component={EditProductPage} exact />
          <Route path="/signin" component={SigninPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingPage}></Route>
          <Route path="/payment" component={PaymentPage}></Route>
          <Route path="/placeorder" component={OrderPage}></Route>
          <Route path="/order/:id" component={ConfirmationPage}></Route>
          <Route path="/orderhistory" component={OrderHistoryPage}></Route>
          <PrivateRoute
            path="/profile"
            component={UserProfilePage}
          ></PrivateRoute>
          <AdminRoute path="/productlist" component={ProductListPage} exact />
          <AdminRoute
            path="/orderlist"
            component={AdminOrdersPage}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={AdminEditUserPage}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListPage}
            exact
          ></SellerRoute>
          <SellerRoute
            path="/orderlist/seller"
            component={AdminOrdersPage}
          ></SellerRoute>
          <AdminRoute path="/userlist" component={AdminUsersPage}></AdminRoute>
          <Route path="/" component={HomePage} exact />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
