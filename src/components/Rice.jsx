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
    <div>
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
            <strong>Total</strong>
            <span>{selecedItems.price * (selecedItems.count + 1)}</span>
          </div>

          <div className="w-full bg-orange-300 text-black p-2 my-5 rounded flex gap-5">
            <strong>Name</strong>
            <span>{selecedItems.name}</span>
            <strong>Price</strong>
            <span>{selecedItems.price}</span>
            <strong>Count</strong>
            <span>{selecedItems.count + 1}</span>
            <strong>Total</strong>
            <span>{selecedItems.price * (selecedItems.count + 1)}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Rice;
