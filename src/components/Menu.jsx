import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 mx-3 gap-2 w-full md:ml-4 lg:ml-8">
      <Link to="one">
        <div className="roti w-[75%] ">
          <img
            src="https://www.danishfoodlovers.com/wp-content/uploads/2022/03/Garlic-naan-bread-5.jpg"
            alt=""
            className="h-60 rounded-xl cursor-pointer"
          />
          <h3 className="text-2xl">Roti</h3>
        </div>
      </Link>
      <Link to="second">
        <div className="roti w-[75%] ">
          <img
            src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-4.jpg"
            alt=""
            className="h-60 rounded-xl cursor-pointer lg:w-[100%]"
          />
          <h3 className="text-2xl">Paneer</h3>
        </div>
      </Link>
      <Link to="third">
        <div className="roti w-[75%] mt-5 lg:mt-0">
          <img
            src="https://c.ndtvimg.com/2020-12/3eq2hi3_manchurian_625x300_21_December_20.jpg"
            alt=""
            className="h-60 rounded-xl cursor-pointer"
          />
          <h3 className="text-2xl">Manchuria</h3>
        </div>
      </Link>
      <Link to="fourth">
      <div className="roti w-[75%] mt-5 lg:mt-0">
        <img
          src="https://www.whiskaffair.com/wp-content/uploads/2018/11/Vegetable-Fried-Rice-2-3.jpg"
          alt=""
          className="h-60 rounded-xl cursor-pointer"
        />
        <h3 className="text-2xl">Veg fried rice</h3>
      </div>
      </Link>
    </div>
  );
}

export default Menu;
