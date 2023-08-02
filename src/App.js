import React from "react";
import "./styles.css";
import Search from "./Search.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Weather />
          </div>
          <Footer />
        </div>
      </div>
      <script src="src/app.js"></script>
    </div>
  );
}
