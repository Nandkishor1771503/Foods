import React, { useState } from "react";
import rice_dishes from "../data/four";
import { FaWhatsapp } from "react-icons/fa";

function Rice() {
  let data = rice_dishes;
  const [Data, setData] = useState(data);
  const [selecedItems, setSelectedItem] = useState(null);
  let Plus = (id) => {
    setData(
      Data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  let Minus = (id) => {
    setData(
      Data.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <h1>this is veg fried rice page (fourth)</h1>
      {Data &&
        Data.map((props) => {
          return (
            <div
              onClick={() => handleSelectItem(props)}
              key={props.id}
              className="w-12/12 bg-orange-200 text-black p-2 my-5 rounded flex gap-5"
            >
              <span className="font-medium">{props.id}.</span>
              <h2 className="w-10/12 text-lg">{props.name}</h2>
              <span className="font-bold">{`₹${props.price}`}</span>
              <button
                className="text-white h-10"
                onClick={() => Minus(props.id)}
              >
                -
              </button>
              <span>{props.count}</span>
              <button
                className="text-white h-10"
                onClick={() => Plus(props.id)}
              >
                +
              </button>
            </div>
          );
        })}
      {selecedItems && (
        <>
          <div className="w-full bg-orange-300 text-black p-2 my-5 rounded flex gap-5">
            <strong>Name</strong>
            <span>{selecedItems.name}</span>
            <strong>Price</strong>
            <span>{selecedItems.price}</span>
            <strong>Count</strong>
            <span>{selecedItems.count + 1}</span>
            <strong>{selecedItems.price * (selecedItems.count + 1)}</strong>
          </div>
          <button className="bg-green-600 text-2xl  w-[50%] ml-5 mb-4 p-1 rounded-full">
            {" "}
            <a
              href={`https://wa.me/918143366416?text=${encodeURIComponent(
                `Iam intrested to order this dish ${
                  selecedItems.name
                } i need ${selecedItems.count+1}  which is nearly ${
                  selecedItems.price * (selecedItems.count + 1)
                }`
              )}`}
              className="flex items-center justify-center text-white"
            >
              <FaWhatsapp /> Order now
            </a>{" "}
          </button>
        </>
      )}
    </>
  );
}

export default Rice;
