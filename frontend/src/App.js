import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { listProductCategories } from "./actions/productActions";
import { signout } from "./actions/userActions";
import AdminEditUserPage from "./pages/AdminEditUserPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminRoute from "./components/AdminRoute";
import AdminUsersPage from "./pages/AdminUsersPage";
import CartPage from "./pages/CartPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import OrderPage from "./pages/OrderPage";
import PaymentPage from "./pages/PaymentPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import SearchBox from "./components/SearchBox";
import SearchPage from "./pages/SearchPage";
import SellerPage from "./pages/SellerPage";
import SellerRoute from "./components/SellerRoute";
import ShippingPage from "./pages/ShippingPage";
import SigninPage from "./pages/SigninPage";
import UserProfilePage from "./pages/UserProfilePage";

function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <button
              type="button"
              className="open-sidebar"
              onClick={() => setSidebarIsOpen(true)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="brand" to="/">
              tribe
            </Link>
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
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
        <aside className={sidebarIsOpen ? "open" : ""}>
          <ul className="categories">
            <li>
              <strong>Categories</strong>
              <button
                onClick={() => setSidebarIsOpen(false)}
                className="close-sidebar"
                type="button"
              >
                <i className="fa fa-close"></i>
              </button>
            </li>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map((c) => (
                <li key={c}>
                  <Link
                    to={`/search/category/${c}`}
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    {c}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>
        <main>
          <Route path="/seller/:id" component={SellerPage}></Route>
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
          <Route
            path="/search/name/:name?"
            component={SearchPage}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchPage}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchPage}
            exact
          ></Route>
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
