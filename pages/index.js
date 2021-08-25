import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts } from "Src/store/actions/products";

import Main from "Components/Main";
import Card from "Components/utils/card";

const Home = ({ products, getProducts }) => {
  const productsList = products.products.length > 0 && products.products;
  console.log("Products", productsList);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Main>
      <div className="h-full sm:block md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 m-4 mx-8 ">
        {products.products.length > 0
          ? productsList.map((product, index) => (
              <Card data={product} key={index} />
            ))
          : "cargando..."}
      </div>
    </Main>
  );
};

const mapStateToProperties = (state) => {
  return { products: state.products };
};

const mapDispatchToProperties = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProperties, mapDispatchToProperties)(Home);
