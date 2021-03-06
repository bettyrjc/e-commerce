import React from "react";
import Image from "next/image";

const card = ({ data, setProductsInShoppingCar }) => {
  return (
    <div className="sm:mt-2 md:mt-0 w-full h-auto bg-white shadow-md p-4 rounded-sm flex flex-col justify-between">
      <div>
        <div className="p-4 h-34 w-ful">
          <img
            src={`${data.cover}`}
            alt={data.name}
            className="w-full h-full"
          />
        </div>
        <h2 className="text-base mt-4 h-12 overflow-y-auto ">{data.name}</h2>
        <div className="flex my-4">
          <p className="mr-2 font-bold">Precio:</p>
          <p className="font-bold text-lg text-blue-200">{data.price}</p>
        </div>
      </div>

      <button
        className="primary-button-full btnTransitionHover"
        onClick={(e) => setProductsInShoppingCar(e, data)}
      >
        Agregar
      </button>
    </div>
  );
};

export default card;
