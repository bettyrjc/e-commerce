import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts, pushInShoppingCar } from "Src/store/actions/products";

import Main from "Components/Main";
import Card from "Components/utils/card";

const Home = ({ products, getProducts, pushInShoppingCar }) => {
  const productsInLocal =
    process.browser && JSON.parse(localStorage.getItem("productsInCar"));
  const [productsInCar, setProductsInCar] = useState(productsInLocal || []);

  const productsList = products?.products?.length > 0 && products.products;

  useEffect(() => {
    getProducts();
  }, []);

  const setProductsInShoppingCar = (e, product) => {
    const validateIfExist = productsInCar.some(
      (productInCar) => productInCar.id === product.id
    );
    if (!validateIfExist) {
      setProductsInCar([...productsInCar, product]);
      localStorage.setItem(
        "productsInCar",
        JSON.stringify([...productsInCar, product])
      );

      // pushInShoppingCar();
    }
  };

  console.log("productsInCar", productsInCar);

  return (
    <Main shoppingCarInHeader={productsInCar}>
      <div className="h-full sm:block md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4 m-4 mx-8 ">
        {products?.products?.length > 0
          ? productsList.map((product, index) => (
              <Card
                data={product}
                key={index}
                setProductsInShoppingCar={setProductsInShoppingCar}
              />
            ))
          : "cargando..."}
      </div>
    </Main>
  );
};

const mapStateToProperties = (state) => {
  return { products: state.products, shoppingCar: state.products.shoppingCar };
};

const mapDispatchToProperties = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  pushInShoppingCar: (data) => dispatch(pushInShoppingCar(data)),
});

export default connect(mapStateToProperties, mapDispatchToProperties)(Home);
