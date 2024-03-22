import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { CryptoApp, Ecommerce, expenseManager, weatherApp } from "../../assets/Images";
import weatherApp from "../assets/Images/Weather-App.jpg";
import CryptoApp from '../assets/Images/auth-app.jpg';
import expenseManager from '../assets/Images/expense-manager.png'
import Ecommerce from '../assets/Images/ecommerce.jpg';

const ProjectsCards = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container">
        <div className="Projects-card" data-aos="zoom-in-up">
          <div className="Project-card-img">
            <img src={weatherApp} />
          </div>

          <div className="Project-card-content">
            <h4>Weather-App</h4>
            <p>
              Create components for displaying the weather information, such as
              the current temperature, weather conditions, forecast, and
              location input field. Implement functionality to allow users to
              enter a location and trigger weather data retrieval.
            </p>
          </div>

          <a href="https://weather-sable-eta.vercel.app/">
            <button>View More</button>
          </a>
        </div>

        <div className="Projects-card" data-aos="zoom-in-down">
          <div className="Project-card-img">
            <img src={Ecommerce} />
          </div>

          <div className="Project-card-content">
            <h4>Ecommerce-Store</h4>
            <p>
              I create a fully responsive Ecommerce-Store Application with having full functonality by using ReactJs and CSS.
            </p>
          </div>
          <a href="">
            <button>View More</button>
          </a>
        </div>

        <div className="Projects-card" data-aos="zoom-in-down">
          <div className="Project-card-img">
            <img src={CryptoApp} />
          </div>

          <div className="Project-card-content">
            <h4>Auth-App</h4>
            <p>
             
"Auth-App integrates Redux for state management, Material UI for design, ensuring a responsive interface. It offers secure authentication and authorization functionalities within a sleek, user-friendly design."
            </p>
          </div>

          <a href="https://login-app-hazel.vercel.app/">
            <button>View More</button>
          </a>
        </div>

        <div className="Projects-card" data-aos="zoom-in-up">
          <div className="Project-card-img">
            <img src={expenseManager} />
          </div>

          <div className="Project-card-content">
            <h4>Expense Manager</h4>
            <p>
              Create an Expense manager using React where the user can add
              income and expenses and the app will show how much the user spent
              and how much is lef
            </p>
          </div>
          <a href="https://khatabook-iota.vercel.app/">
            <button>View More</button>
          </a>
        </div>


        
      </div>


      
    </>
  );
};

export default ProjectsCards;
