import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import Banner from "./components/HomePage/Banner";
import HomePageSection from "./components/HomePage/HomePageSection";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";

function HomePage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const topSellers = useSelector((state) => state.topSellers);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = topSellers;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);

  return (
    <div>
      <Banner />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
      <HomePageSection />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
      <HomePageSection />
    </div>
  );
}

export default HomePage;
