import "./ContactUs.css";

function ContactUs() {
  return (
    <section className="contact">
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <span className="contact-subtitle">INFORMATION</span>

          <h1>Contact Us</h1>

          <p>
            As you might expect of a company that began as a high-end interiors
            contractor, we pay strict attention.
          </p>

          <div className="address-box">
            <h2>USA</h2>
            <p>195 E Parker Square Dr, Parker, CO 801</p>
            <p>+43 982-314-0958</p>
          </div>

          <div className="address-box">
            <h2>India</h2>
            <p>HW95+C9C, Lorem ipsum dolor sit.</p>
            <p>411014</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <form>
            <div className="input-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>

            <textarea rows="8" placeholder="Message"></textarea>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
