import React from "react";
import Card from "../Card/Card";

import useFetch from "../../hooks/useFetch";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`,
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Introducing our latest product: the sleek and stylish 'RapidFit' athleisure collection,
           designed to elevate your workout wardrobe with its cutting-edge technology and fashionable aesthetics.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item)=> <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;