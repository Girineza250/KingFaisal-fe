import React from "react";
import "./home.css";
import { image7 } from "../images"; // Use appropriate imports
import Navbar from "../navigationBar/navbar";

function Home() {
  return (
    <div className="home-content">
      <div className="landing-container">
        <Navbar />
        <div className="hero-section">
          <div className="hero-background">
            <img src={image7} alt="Background" className="hero-image" />
            <div className="hero-overlay">
              <div className="hero-text">
                <h1>King Faisal Operation Rooms</h1>
                <p>
                  Effortlessly discover your perfect room with our advanced
                  search tools. Customize your search by location, dates, and
                  preferences to ensure an ideal Operation.
                </p>
                <button className="cta-button">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Easy Booking</h3>
              <p>Book rooms seamlessly with our intuitive platform.</p>
            </div>
            <div className="feature-card">
              <h3>Flexible Options</h3>
              <p>Choose from a variety of room types to suit your needs.</p>
            </div>
            <div className="feature-card">
              <h3>Top Locations</h3>
              <p>Stay in prime locations across the globe.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>&copy; 2024 Room Booking System. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
