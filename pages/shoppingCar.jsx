import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import Main from "Components/Main";
import Card from "Components/utils/shoppinCard";
import { pushInShoppingCar } from "Src/store/actions/products";


const ShoppingCar = ({ pushInShoppingCar }) => {

  let productInCar =
  process.browser && JSON.parse(localStorage.getItem("productsInCar"));

  const [items, setItems] = useState(productInCar);
  // const addAProduct = (index, p) => {
  //   setProduct([
  //     ...products,
  //     { name: p.name, id: p.id, price: p.price, count: "1" },
  //   ]);
  // };
  console.log(items)

  const addAProduct = (e, item) => {
    setItems([...items, {amount: 1}])
    // setItems((prev) => {
    //   // Search the item in the array
    //   { ...i, amount: i.amount + 1 }
    //   // const isItemInTheCart = prev.find((i) => i.id === item.id);
    //   if (isItemInTheCart) {
    //     return prev.map((i) =>
    //       i.id === item.id ? { ...i, amount: i.amount + 1 } : i
    //     );
    //   }
    //   return [...prev, { ...item, amount: 1 }];
    // });
  };

  const lessAProduct = (index, p) => {
    console.log("bye", index);

  };

  const deleteProduct = async (index) => {
    productInCar.splice(index, 1);
    localStorage.setItem("productsInCar", JSON.stringify(productInCar));
    pushInShoppingCar(productInCar);
    toast.info(" 😩 Eliminando producto del  carrito");
    window.location.reload();
  };

  return (
    <Main>
      <div className="flex items-start justify-between">
        <div className="w-3/5 bg-gray-200 h-36 shadow-lg p-4 rounded-md overflow-auto">
          <h1 className="text-blue-700 text-2xl font-bold p-6  border-blue-500 border-b-2">
            En el carrito:
          </h1>
          {productInCar.length > 0
            ? productInCar.map((product, index) => (
                <Card
                  data={product}
                  key={index}
                  lessAProduct={lessAProduct}
                  addAProduct={addAProduct}
                  index={index}
                  deleteProduct={deleteProduct}
                />
              ))
            : "cargando..."}
        </div>
        <div className="w-1/3 h-34 bg-gray-200 shadow-lg rounded-md pt-0 p-4">
          <h1 className="text-blue-700 text-2xl font-bold p-6  border-blue-500 border-b-2">
            Resumen del pedido
          </h1>
          <div className="m-2 flex">
            <p className="text-blue-500 font-bold mr-4">Cant. de productos</p>
            <p className="font-bold">{productInCar.length}</p>
          </div>
          <div className="m-2">
            <p className="text-blue-500 font-bold">Total</p>
          </div>
          <button>Pagar</button>
        </div>
      </div>
    </Main>
  );
};

const mapDispatchToProperties = (dispatch) => ({
  pushInShoppingCar: (data) => dispatch(pushInShoppingCar(data)),
});
export default connect("", mapDispatchToProperties)(ShoppingCar);
