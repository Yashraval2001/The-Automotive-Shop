import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer-distributed">

    <div class="footer-left">

      <h3>The Automotive<span>Shop</span></h3>

      <p class="footer-links">
           

        <a href="/products">Products</a>
      
        <a href="/about">About</a>     
     
        <a href="/contact">Contact</a>
      </p>

      <p class="footer-company-name">All Rights Reserved by Yash and Rohan © 2022</p>
    </div>

    <div class="footer-center">

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Ganpat Vidyanagar </span> Mehsana-Gozaria, Highway,Kherva,Gujarat 384012</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+91 8320286674</p>
        <p>+91 9662106901</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">rohanprajapati403@gmail.com</a></p>        

      </div>
      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">yashraval2952200@gmail.com</a></p>     
      </div>
    </div>

    <div class="footer-right">

      <p class="footer-company-about">
        <span>About the company</span>
        The Automotive shop website is a E-commerece wesite for providing E services to user
      </p>

      <div class>

        <a href="C:\Users\HP\Desktop\new\frontend\src\images\logo3.jpg"><i></i></a>       

      </div>

    </div>

  </footer>
  );
};

export default Footer;
