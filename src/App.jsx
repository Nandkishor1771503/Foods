import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import Display from "./components/Display";
import Menu from "./components/Menu";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  let ulStyle = "hover:underline cursor-pointer lg:ml-4";

  const [Ham, setHam] = useState(true);

  const hamClick = () => {
    setHam(true);
    // console.log(Ham);
    Ham ? setHam(false) : setHam(true)
    
  };

  return (
    <>
      <div className=" ">
        <header className="md:flex gap-[12%] lg:gap-[15%]  text-xl lg:text-2xl p-3 px-5 m-2 ml-[30%] w-[50%] lg:w-[45%] bg-orange-400 rounded-full hidden shadow-lg z-30">
          <ul className={ulStyle} id="home">Home</ul>
          <ul className={ulStyle}>Menu</ul>
          <ul className={ulStyle}>About</ul>
          <ul className={ulStyle}>Contact</ul>
        </header>
        <div className="flex justify-between w-screen">
          <h1 className="ml-4">Jawale Foods</h1>
          <FaHamburger
            className="text-4xl mr-10 cursor-pointer md:hidden"
            onClick={hamClick}
          />
        </div>

        <div className={Ham?"hidden":"block text-xl mt-8 space-y-6 text-center"}>
          <ul id="home">Home</ul>
          <hr />
          <ul>Menu</ul>
          <hr />
          <ul>About</ul>
          <hr />
          <ul>Contact us</ul>
          <hr />
        </div>

        <section id="home">
          <Display />
        </section>
        <Menu />
        <Highlights />

        <Footer />

        

      </div>
    </>
  );
}

export default App;
