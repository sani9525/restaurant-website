import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { mockData } from "./MenuPage";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiArrowRight } from "react-icons/fi";

const Home = ({ cart, setCart }) => {
  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    toast.success(`${item.title} has been added to the cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const trendingItems = mockData.slice(0, 4); // First 4 items

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding,
            chopping, & marinating, so you can cook a fresh food.
          </p>
          <a href="/Menu">
            <button className="secondary-button">
              Order Now <FiArrowRight />
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

      {/* Trending Items Section */}
      <div className="trending-items-container">
        <h2 className="trending-heading">Trending Food Items</h2>
        <div className="trending-items-grid">
          {trendingItems.map((item) => (
            <div key={item.id} className="trending-item-card">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
                <p className="price">${item.price.toFixed(2)}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <Link to="/Menu">
            <button className="btn btn-secondary">View More Items</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
