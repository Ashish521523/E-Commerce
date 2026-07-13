import "./Home.css";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <hr />
      <section className="hero">
        <div className="category">
          <ul>
            <li>
              Woman's Fashion
              <FaChevronRight className="arrowicon" />
            </li>

            <li>
              Men's Fashion
              <FaChevronRight className="arrowicon1" />
            </li>

            <li>Electronics</li>

            <li>Home & Lifestyle</li>

            <li>Medicine</li>

            <li>Sports & Outdoor</li>

            <li>Baby's & Toys</li>

            <li>Groceries & Pets</li>

            <li>Health & Beauty</li>
          </ul>
        </div>

        <div className="banner">
          <div className="banner-content">
            <div className="brand">
              <img src="/image2.png" className="apple" />

              <span>iPhone 14 Series</span>
            </div>

            <h1>
              Up to 10%
              <br />
              off Voucher
            </h1>

            <button>
              Shop Now
              <FaArrowRight />
            </button>
          </div>
          <div className="banner-image">
            <img src="/image1.jpg" alt="iphone" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
