import React from "react";

const shoppinCard = ({
  data,
  addAProduct,
  lessAProduct,
  index,
  deleteProduct,
}) => {
  return (
    <div className="w-full h-auto mt-4 bg-white shadow-md p-4 rounded-lg flex  item-center justify-between border-b-2 border-gray-500">
      <div className="grid grid-cols-2 items-center">
        <div className="p-4 w-full h-30 mr-2">
          <img
            src={`${data.cover}`}
            alt={data.name}
            className="w-full h-full bg-cover"
          />
        </div>
        <div className="w-full pb-4">
          <h2 className="text-base h-20 overflow-y-auto  mb-2">{data.name}</h2>
          <div className="">
            <div>
              <div className="flex">
                <p className="mr-2">Precio unidad:</p>
                <p className="text-lg text-black">{data.price}</p>
              </div>
              <div className="flex">
                <p className="mr-2 font-bold">Total:</p>
                <p className="font-bold text-lg text-blue-200">{data.price}</p>
              </div>
            </div>
            <div className="flex justify-end item-center">
              <div className="flex w-24">
                <button
                  className="bg-blue-200 px-2 text-white rounded-3xl text-center"
                  onClick={() => addAProduct(index, data)}
                >
                  +
                </button>
                <p className="mx-2 font-bold border-2 border-gray-200 px-2">
                  {data.amount}
                </p>
                {data.amount === 1 ? (
                  <button
                    className="bg-gray-200 px-2 text-white rounded-3xl text-center"
                  >
                    -
                  </button>
                ) : (
                  <button
                    className="bg-blue-200 px-2 text-white rounded-3xl text-center"
                    onClick={() => lessAProduct(data)}
                  >
                    -
                  </button>
                )}
              </div>

              <button
                className="text-red-500 ml-2"
                onClick={() => deleteProduct(data)}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shoppinCard;
