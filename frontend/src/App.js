import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import OrderPage from "./pages/OrderPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { signout } from "./actions/userActions";

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
                Cart
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
            </div>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/signin" component={SigninPage}></Route>
          <Route path="/register" component={RegisterPage}></Route>
          <Route path="/shipping" component={ShippingPage}></Route>
          <Route path="/payment" component={PaymentPage}></Route>
          <Route path="/placeorder" component={OrderPage}></Route>
          <Route path="/order/:id" component={ConfirmationPage}></Route>
          <Route path="/orderhistory" component={OrderHistoryPage}></Route>
          <Route path="/" component={HomePage} exact />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
