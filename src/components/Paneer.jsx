import React, { useState } from "react";
import paneer from "../data/two";

function Paneer() {
  let data = paneer;
  const [Data, setData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  let Plus = (id) => {
    setData(
      Data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const Minus = (id) => {
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
      <h1>this is paneer page (second)</h1>

      {Data &&
        Data.map((props) => {
          return (
            <div
              key={props.id}
              onClick={() => handleSelectItem(props)}
              className="w-12/12 bg-orange-200 text-black p-2 my-5 rounded flex gap-5"
            >
              <span className="font-medium">{props.id}.</span>
              <h2 className="w-10/12 text-lg">{props.name}</h2>
              <span className="font-bold">{props.price}</span>
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
      {selectedItem && (
        <>
          <div className="w-full bg-orange-300 text-black p-2 my-5 rounded flex gap-5">
            <strong>Name</strong>
            <span>{selectedItem.name}</span>
            <strong>Price</strong>
            <span>{selectedItem.price}</span>
            <strong>Count</strong>
            <span>{selectedItem.count+1}</span>
            <strong>{selectedItem.price*(selectedItem.count+1)}</strong>
          </div>
        </>
      )}
    </>
  );
}

export default Paneer;
