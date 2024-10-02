import React, { useState } from "react";
import firstData from "../data/one";
import Whatsapp_icon from "./Whatsapp";
import { FaWhatsapp } from "react-icons/fa";

function Roti() {
  // Initial state with count for each item in the array
  const initialData = firstData;
  const [data, setFirstData] = useState(initialData);

  // State to store the selected item data
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle increment for specific item by id
  const counterPlus = (id) => {
    setFirstData(
      data.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Function to handle decrement for specific item by id
  const counterMinus = (id) => {
    setFirstData(
      data.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  // Function to handle selecting an item to display in another div
  const handleSelectItem = (item) => {
    setSelectedItem(item); // Set the selected item's data
    console.log(count);
  };

  return (
    <>
      <h1>This is the roti page (one)</h1>

      {/* Display all items */}
      {data &&
        data.map((props) => {
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
      {selectedItem && (
        <>
          <div className="w-full bg-orange-300 text-black p-2 my-5 rounded flex gap-5">
            <p>
              <strong>Name:</strong> {selectedItem.name}
            </p>
            <p>
              <strong>Price:</strong> {selectedItem.price}
            </p>
            <p>
              <strong>Count:</strong> {selectedItem.count + 1}
            </p>
            <h2>Total</h2>
            <span>{selectedItem.price * (selectedItem.count + 1)}</span>
          </div>
          <button className="bg-green-600 text-2xl  w-[50%] ml-5 mb-4 p-1 rounded-full">
                  {" "}
                  <a
                    href={`https://wa.me/918143366416?text=${encodeURIComponent(
                      `Iam intrested to order this dish ${selectedItem.name} i need ${selectedItem.count+1} which is nearly ${selectedItem.price * (selectedItem.count + 1)}`
                    )}`} className="flex items-center justify-center text-white"
                  >
                    <FaWhatsapp /> Order now 
                  </a>{" "}
                </button>
          <div>
            <strong>Grand total</strong>{" "}
            <span>{selectedItem.price * (selectedItem.count + 1)}</span>
          </div>
        </>
      )}
    </>
  );
}

export default Roti;
