import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="credits">This site is powered by:</div>
      <div className="logo">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt="The movie database logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
