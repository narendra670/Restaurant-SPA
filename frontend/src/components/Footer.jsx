import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">
            <img src="/logo.svg" alt="Flavora" style={{width: "35px", marginRight: "8px", verticalAlign: "middle"}} />
            FLAVORA
          </div>
          <div className="right">
            <p>Z6 Gulshan-e-Maymar, Karachi</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By FLAVORA</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By FLAVORA.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;