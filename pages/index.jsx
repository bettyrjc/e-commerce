import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getProducts, pushInShoppingCar } from "Src/store/actions/products";
import { toast } from "react-toastify";
import Main from "Components/Main";
import Card from "Components/utils/card";

const Home = ({ products, getProducts }) => {
  const productsInLocal =
    process.browser && JSON.parse(localStorage.getItem("productsInCar"));

  const productsList =
    products?.products?.length > 0 &&
    products.products.map((i) => ({ ...i, amount: 1 }));

  const [productsInCar, setProductsInCar] = useState(productsInLocal || []);

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
      toast.success("🥰 Añadiendo al carrito");
    } else {
      toast.info("🤓 Ya tienes este producto en tu carrito");
    }
  };

  return (
    <Main shoppingCarInHeader={productsInCar}>
      <div className="h-full grid sm:grid-cols-1  md:grid-cols-2 lg:grid lg:mb-0 lg:grid-cols-3 gap-4 m-4 mx-8 ">
        {productsList?.length > 0
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
