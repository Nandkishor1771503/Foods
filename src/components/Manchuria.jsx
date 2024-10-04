import React, { useState } from "react";
import Manchuria from "../data/three";
import { FaWhatsapp } from "react-icons/fa";

function Manchuriafn() {
  const initialData = Manchuria;
  const [Data, setFirstData] = useState(initialData);

  // State to store the selected item data
  const [selectedItem, setSelectedItem] = useState(initialData);

  // Function to handle increment for specific item by id
  const counterPlus = (id) => {
    setFirstData(
      Data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Function to handle decrement for specific item by id
  const counterMinus = (id) => {
    setFirstData(
      Data.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  // Function to handle selecting an item to display in another div
  const handleSelectItem = (item) => {
    setSelectedItem({ ...item }); // Set the selected item's data
    console.log(count);
    selectedItem.total = selectedItem.price * (selectedItem.count + 1);
  };

  return (
    <>
      <h1>This is the Mancuria page (one)</h1>

      {/* Display all items */}
      {Data &&
        Data.map((props) => {
          return (
            <div
              key={props.id}
              className="w-12/12 bg-orange-200 text-black p-2 my-5 rounded flex gap-5"
              onClick={() => handleSelectItem(props, props.count)} // Select item when clicked
            >
              <span className="font-medium">{props.id}.</span>
              <h2 className="w-10/12 text-lg">{props.name}</h2>
              <span className="font-bold">{props.price}</span>
              <button
                className="text-white h-10"
                onClick={() => counterMinus(props.id)}
              >
                -
              </button>
              <span>{props.count}</span>
              <button
                className="text-white h-10"
                onClick={() => counterPlus(props.id)}
              >
                +
              </button>
            </div>
          );
        })}
      {/* Display selected item details */}
      <div>
        {selectedItem &&
          Data.map((i) => {
            return (
              <div className={`${i.count > 0 ? "block" : "hidden"}`}>
                <div
                  className="w-full bg-orange-300 text-black p-2 my-5 rounded flex gap-5 "
                  key={i.id}
                >
                  <p>
                    <strong>Name:</strong> {i.name}
                  </p>
                  <p>
                    <strong>Price:</strong> {i.price}
                  </p>
                  <p>
                    <strong>Count:</strong> {i.count}
                  </p>
                  <h2>Total</h2>
                  <span>{i.price * i.count}</span>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <strong className=" text-black text-xl">Grand Total : </strong>
        <span className="text-black  text-lg">
          ₹{Data.reduce((acc, i) => acc + i.price * i.count, 0)}
        </span>
      </div>

      <button className="bg-green-600 text-2xl  w-[50%] ml-5 mb-4 p-1 rounded-full mt-6">
        {" "}
        <a
          href={`https://wa.me/918143366416?text=${encodeURIComponent(
            `Iam intrested to order this dish ${Data.map((item) => {
              if (item.count > 0) {
                return `\n${item.name}\ncount: ${item.count}\nprice: ${
                  item.price * item.count
                }\n`;
              }
            })}\n Grand total : ${Data.reduce((acc, i) => acc + i.price * i.count, 0)} `
          )}`}
          className="flex items-center justify-center text-white"
        >
          <FaWhatsapp /> Order now
        </a>{" "}
      </button>
    </>
  );
}

export default Manchuriafn;
