import React from "react";
import "./footer.css";
import footerLogo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div>
            <img src={footerLogo} alt="" style={{ width: "150px" }} />
          </div>
          <div className="links-container">
            <div className="footer-links">
              <span>About Online Food</span>
              <span>Read Our Blog</span>
              <span>Sign Up To Deliver</span>
              <span>Add Your Resturent</span>
            </div>
            <div className="footer-links">
              <span>Read Faqs</span>
              <span>View All Cities</span>
              <span>Resturent Near Me</span>
              <span>Get Help</span>
            </div>
          </div>
        </div>
        <p style={{ textAlign: "center", color: "gray" ,marginTop:"2rem"}}>
          Copyright &copy 2021 Online Food
        </p>
      </div>
    </div>
  );
};

export default Footer;
