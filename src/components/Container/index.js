import React from 'react';
import './index.css'; // Assuming this contains the required styles for the container
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { SiReactquery } from "react-icons/si";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Container = () => {
  return (
    <div className="container-style">
      {/* Lorem Ipsum Section */}
      <div className="dolor">
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor</p>
      </div>
      
      {/* Navbar */}
      <div className="navbar">
        {/* Left side - Logo symbol */}
        <div className="left-side">
          <SiReactquery />
        </div>

        {/* Center - LOGO Text */}
        <div className="center">
          <h1>LOGO</h1>
        </div>

        {/* Right side - Icons and language dropdown */}
        <div className="right-side">
            <CiSearch />
            <FaRegHeart />
            <HiOutlineShoppingBag />
            <CiUser />
            {/* Language Dropdown */}
            <select className="language-dropdown">
              <option value="en">ENG</option>
              {/* Add more language options */}
            </select>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bottom-links">
        <ul className="links">
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>

      {/* "Discover our product" Section (Below Bottom Links) */}
      <div className="discover-product-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Dolor integer scelerisque nibh amet mie ut elementum dolor</p>
      </div>

      {/* "3425 ITEMS" and Dropdown section */}
      <div className="items-and-filters">
        <span className="items">3425 ITEMS</span>
        <select className="hide-filter">
          <option>HIDE FILTER</option>
        </select>
        <select className="recommended">
          <option>RECOMMENDED</option>
        </select>
      </div>

      {/* Sidebar Section */}
      <div className="sidebar">
      <div className="checkboxes">
          <label>
            <input type="checkbox" /> Customize
          </label>
        </div>
        {/* Ideal Dropdown */}
        <div className="dropdown">
          <label>Ideal</label>
          <select>
            <option>All</option>
          </select>
        </div>

        {/* Occasion Dropdown */}
        <div className="dropdown">
          <label>Occasion</label>
          <select>
            <option>All</option>
          </select>
        </div>

        {/* Work Dropdown */}
        <div className="dropdown">
          <label>Work</label>
          <select>
            <option>All</option>
          </select>
        </div>

        {/* Fabric Dropdown */}
        <div className="dropdown">
          <label>Fabric</label>
          <select>
            <option>All</option>
          </select>
        </div>

        {/* Segment Dropdown */}
        <div className="dropdown">
          <label>Segment</label>
          <select>
            <option>All</option>
          </select>
        </div>

        {/* Suitable Dropdown */}
        <div className="dropdown">
          <label>Suitable</label>
          <select>
            <option>All</option>
          </select>
        </div>

        {/* Raw Materials Dropdown */}
        <div className="dropdown">
          <label>Raw Materials</label>
          <select>
            <option>All</option>
          </select>
        </div>

        {/* Pattern Dropdown */}
        <div className="dropdown">
          <label>Pattern</label>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img src="https://i.postimg.cc/d36QGQcY/Bag.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/2SwDTQTN/Doll-Type.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/130TsyNG/Belt.jpg" alt="bag" className="image" />
        </div>
        <div className="image-container">
          <img src="https://i.postimg.cc/259fNCPH/Cap-type.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/Z5jG6TKT/College-Bag.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/kXmzZV2J/Cap.jpg" alt="bag" className="image" />
        </div>
        <div className="image-container">
          <img src="https://i.postimg.cc/6QymRnm0/Hand-Bag-Type.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/xT5x46r5/Carry-Bag-Type.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/3NFT627G/Carry-Bag.jpg" alt="bag" className="image" />
        </div>
        <div className="image-container">
          <img src="https://i.postimg.cc/Dz4Kh9nn/Zip-Bag.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/nrp8vM7h/Bag-Type.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/nVGfnYbj/Hand-Bag.jpg" alt="bag" className="image" />
        </div>
        <div className="image-container">
          <img src="https://i.postimg.cc/130TsyNG/Belt.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/kXmzZV2J/Cap.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/259fNCPH/Cap-type.jpg" alt="bag" className="image" />
        </div>
        <div className="image-container">
          <img src="https://i.postimg.cc/3NFT627G/Carry-Bag.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/Z5jG6TKT/College-Bag.jpg" alt="bag" className="image" />
          <img src="https://i.postimg.cc/nVGfnYbj/Hand-Bag.jpg" alt="bag" className="image" />
        </div>
      </div>

      <div className="black-container">
  {/* Top Section (Left and Right) */}
  <div className="top-content">
    {/* Left side content */}
    <div className="top-left-content">
      <h1>BE THE FIRST TO KNOW</h1>
      <p>Sign up for updates from Metta Muse</p>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" className="email-input" />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>

    {/* Right side content */}
    <div className="top-right-content">
      <h1>Contact Us</h1>
      <p>Phone: +123 456 789</p>
      <p>Email: info@mettamuse.com</p>
      <p>Currency: USD</p>
      <p>Country: <LiaFlagUsaSolid /></p>
    </div>
  </div>

  {/* Horizontal Line */}
  <div className="separator-line"></div>

  {/* Bottom Section (Left, Middle, Right) */}
  <div className="bottom-content">
    {/* Bottom left content */}
    <div className="bottom-left-content">
      <h1>Metta Muse</h1>
      <p>About Us</p>
      <p>Stories</p>
      <p>Artisans</p>
      <p>Boutiques</p>
      <p>Contact Us</p>
      <p>EU Compliances Docs</p>
    </div>

    {/* Bottom middle content */}
    <div className="bottom-middle-content">
      <h1>Quick Links</h1>
      <p>Orders & Shipping</p>
      <p>Join/Login as a Seller</p>
      <p>Payment & pricing</p>
      <p>Return & Refunds</p>
      <p>FAQs</p>
      <p>Privacy Policy</p>
      <p>Terms & Conditions</p>
    </div>

    {/* Bottom right content */}
    <div className="bottom-right-content">
      <p>Follow Us</p>
      <img src="path/to/linkedin-image.png" alt="LinkedIn" className="social-icon" />
      <img src="path/to/instagram-image.png" alt="Instagram" className="social-icon" />
      <h1>metta muse ACCEPTS</h1>
    </div>
  </div>
</div>
    <div>
        <p>Copyright @ 2023 mettamuse All rights reserved</p>
    </div>

    </div>
  );
};

export default Container;
