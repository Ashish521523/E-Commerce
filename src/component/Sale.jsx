import "./sale.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Sale() {
  return (
    <section className="flash-header">

      <div className="left">

        <div className="today">
          <span className="box"></span>
          <p>Today's</p>
        </div>

        <div className="flash-content">
          <h1>Flash Sales</h1>

          <div className="timer">

            <div className="time-box">
              <span>Days</span>
              <h2>03</h2>
            </div>

            <div className="colon">:</div>

            <div className="time-box">
              <span>Hours</span>
              <h2>23</h2>
            </div>

            <div className="colon">:</div>

            <div className="time-box">
              <span>Minutes</span>
              <h2>19</h2>
            </div>

            <div className="colon">:</div>

            <div className="time-box">
              <span>Seconds</span>
              <h2>56</h2>
            </div>

          </div>
        </div>

      </div>

      <div className="arrows">
        <button>
          <FaArrowLeft />
        </button>

        <button>
          <FaArrowRight />
        </button>
      </div>

    </section>
  );
}

export default Sale;