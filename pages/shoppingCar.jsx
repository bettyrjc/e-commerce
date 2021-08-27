import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import Main from "Components/Main";
import Card from "Components/utils/shoppinCard";
import { pushInShoppingCar } from "Src/store/actions/products";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const ShoppingCar = ({ pushInShoppingCar }) => {
  const MySwal = withReactContent(Swal);

  let productInCar =
    process.browser && JSON.parse(localStorage.getItem("productsInCar"));

  const [items, setItems] = useState(productInCar);

  const addAProduct = (e, item) => {
    setItems((prev) => {
      const isItemInTheCart = prev.find((i) => i.id === item.id);
      if (isItemInTheCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }
      return [...prev, { ...item, amount: 1 }];
    });
  };

  const lessAProduct = (item) => {
    const id = item.id;
    setItems((prev) => {
      const foundItem = prev.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.amount === 1) {
          toast.warning("😅 Tienes un solo producto");
          return prev;
        } else {
          return prev.map((i) =>
            i.id === id ? { ...i, amount: i.amount - 1 } : i
          );
        }
      }
    });
  };

  const calculeTotal =
    items?.length > 0
      ? items.reduce((sum, i) => sum + i.amount * i.price, 0)
      : "000";

  const getTotalItems =
    items?.length > 0 ? items.reduce((acum, i) => acum + i.amount, 0) : "0";

  const deleteProduct = async (index) => {
    productInCar.splice(index, 1);
    localStorage.setItem("productsInCar", JSON.stringify(productInCar));
    pushInShoppingCar(productInCar);
    toast.info(" 😩 Eliminando producto del  carrito");
    window.location.reload();
  };
  const clearShoppingCart = () => {
    MySwal.fire({
      title: `Seguro quieres vaciar el carrito de compras?`,
      text: "Esta acción es permanente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      console.log(result)
      if (result.isConfirmed) localStorage.clear();
      window.location.reload()
    });
  };

  return (
    <Main>
      <button
        className="ml-4 bg-blue-200 p-2 rounded-lg text-white cursor-pointer mb-4 hover:bg-blue-700"
        onClick={clearShoppingCart}
      >
        Limpiar carrito
      </button>
      <div className="flex m-4 items-start justify-between flex-col-reverse md:flex-row m-0">
        <div className="md:w-3/5 bg-gray-200 h-36 shadow-lg p-4 rounded-md overflow-auto w-full">
          <div className="flex justify-between item-center border-blue-500 border-b-2 p-6 ">
            <h1 className="text-blue-700 text-2xl font-bold">En el carrito:</h1>
          </div>
          {items?.length > 0
            ? items?.map((product, index) => (
                <Card
                  data={product}
                  key={index}
                  lessAProduct={lessAProduct}
                  addAProduct={addAProduct}
                  index={index}
                  deleteProduct={deleteProduct}
                />
              ))
            : "No tienes nada en tu carrito de compras..."}
        </div>
        <div className="w-full mb-2 bg-gray-200 shadow-lg rounded-md pt-0 p-4 md:w-1/3 h-34 md:mb-0 ">
          <h1 className="text-blue-700 text-2xl font-bold p-6 pl-0 border-blue-500 border-b-2 md:text-xl lg:text-2xl">
            Resumen
          </h1>
          <div className="m-2 flex">
            <p className="text-blue-500 font-bold mr-4">Cant. de productos</p>
            <p className="font-bold">{getTotalItems}</p>
          </div>
          <div className="m-2 flex">
            <p className="text-blue-500 font-bold mr-4">Total</p>
            <p className="font-bold">{calculeTotal}</p>
          </div>
          <button className="primary-button-full btnTransitionHover">
            Pagar
          </button>
        </div>
      </div>
    </Main>
  );
};

const mapDispatchToProperties = (dispatch) => ({
  pushInShoppingCar: (data) => dispatch(pushInShoppingCar(data)),
});
export default connect("", mapDispatchToProperties)(ShoppingCar);
