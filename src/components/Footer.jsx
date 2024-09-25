import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-green-600 text-white py-8 -ml-5 mt-10 mb-0">
        <div className="container  px-0">
          <div className="flex flex-col md:flex-row justify-between ml-6 ">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0">
              <h1 className="text-2xl font-bold">Veggie Delight</h1>
              <p className="text-md mt-2">
                Serving fresh and healthy vegetarian fast food since 2020.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:underline">
                Home
              </a>
              <a href="#" className="text-white hover:underline">
                Menu
              </a>
              <a href="#" className="text-white hover:underline">
                About Us
              </a>
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 md:mt-0">
              <p className="text-sm mb-2">Follow Us</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-green-300">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white hover:text-green-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-green-300">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-md text-white opacity-75">
            &copy; 2024 Jawale Foods. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
