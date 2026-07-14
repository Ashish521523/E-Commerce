import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}

        <div className="footer-box">
          <h2>Eco-Mart</h2>

          <h3>Subscribe</h3>

          <p>Get 10% off your first order</p>

          <div className="email-box">
            <input type="email" placeholder="Enter your email" />

            <FaTelegramPlane className="send-icon" />
          </div>
        </div>

        {/* Support */}

        <div className="footer-box">
          <h3>Support</h3>

          <p>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>

          <p>exclusive@gmail.com</p>

          <p>+88015-88888-9999</p>
        </div>

        {/* Account */}

        <div className="footer-box">
          <h3>Account</h3>

          <a href="/">My Account</a>

          <a href="/">Login / Register</a>

          <a href="/">Cart</a>

          <a href="/">Wishlist</a>

          <a href="/">Shop</a>
        </div>

        {/* Quick Link */}

        <div className="footer-box">
          <h3>Quick Link</h3>

          <a href="/">Privacy Policy</a>

          <a href="/">Terms Of Use</a>

          <a href="/">FAQ</a>

          <a href="/">Contact</a>
        </div>

        {/* Download */}

        <div className="footer-box">
          <h3>Download App</h3>

          <small>Save $3 with App New User Only</small>

          <div className="download">
            <img src="image23.jpg" alt="" className="qr" />

            <div>
              <img src="image24.png" alt="" className="store" />

              <img src="image25.png" alt="" className="store" />
            </div>
          </div>

          <div className="social">
            <FaFacebookF />

            <FaTwitter />

            <FaInstagram />

            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">
        © Copyright Eco-Mart 2026. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
