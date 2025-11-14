import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">S</div>
        <h1 className="brand">Stackly</h1>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#solutions">Software Solutions</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <button className="btn-start">Get Started</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Stackly</h1>

          <p className="subtitle">
            "Stackly is a forward-thinking technology company dedicated to driving
            digital transformation."
          </p>

          <p className="description">
            We design intelligent, scalable solutions powered by AI and cloud
            innovation. Our mission is to empower businesses with cutting-edge tools
            for smarter growth. With a passion for innovation and precision, we turn
            complex ideas into seamless experiences.
          </p>

          <p className="highlight">
            💡 “Innovating today to define tomorrow’s digital world.”
          </p>
        </div>

        {/* AI Hero Image */}
        <img
          className="hero-img"
          src="https://cdn.pixabay.com/photo/2023/07/23/07/43/ai-8146164_1280.jpg"
          alt="AI Hero"
        />
      </section>

      {/* SOFTWARE SOLUTIONS */}
      <section id="solutions" className="blue-section">
        <h2 className="section-heading">Our Software Solutions</h2>

        <div className="card-row">
          <div className="card">
            <h3>Custom Enterprise Software</h3>
            <p>
              Tailored solutions to optimize enterprise processes with scalability
              and security.
            </p>
          </div>

          <div className="card">
            <h3>Cloud Migration</h3>
            <p>
              Seamlessly move your infrastructure to the cloud with minimal
              downtime.
            </p>
          </div>

          <div className="card">
            <h3>AI-Powered Analytics</h3>
            <p>
              Unlock insights with advanced AI analytics for data-driven decision
              making.
            </p>
          </div>
        </div>
      </section>

      {/* WE ARE PROVIDING */}
      <h2 className="center-heading">We Are Providing =</h2>

      <section id="services" className="grid-section">
        <div className="card">
          <h3>Digital Marketing 🌐</h3>
          <p>
            "Stackly’s digital marketing solutions combine strategy and innovation
            to elevate brands."
          </p>
        </div>

        <div className="card">
          <h3>AI & Automation 🤖</h3>
          <p>
            "We leverage artificial intelligence to streamline operations and boost
            efficiency."
          </p>
        </div>

        <div className="card">
          <h3>Web Development 💡</h3>
          <p>
            "Fast, scalable, responsive websites for your business."
          </p>
        </div>

        <div className="card">
          <h3>Mobile App Development 📱</h3>
          <p>
            "High-performance apps for iOS and Android."
          </p>
        </div>
      </section>

      {/* EXTRA SERVICES GRID */}
      <section className="grid-section">
        <div className="card">
          <h3>Web Development 🌐</h3>
          <p>
            We build responsive, secure, and scalable websites tailored to your
            needs.
          </p>
        </div>

        <div className="card">
          <h3>AI & Automation 🤖</h3>
          <p>
            Automate workflows with powerful AI-driven tools.
          </p>
        </div>

        <div className="card">
          <h3>Mobile App Development 📱</h3>
          <p>
            User-friendly mobile apps with seamless performance.
          </p>
        </div>

        <div className="card">
          <h3>Digital Marketing 🎯</h3>
          <p>
            Grow your brand through professional online marketing strategies.
          </p>
        </div>

        <div className="card">
          <h3>Product Branding 🎨</h3>
          <p>
            Build a strong identity through creative visual design.
          </p>
        </div>

        <div className="card">
          <h3>Online Form Filling 📝</h3>
          <p>
            We simplify form automation ensuring accuracy and efficiency.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="grid-section">
        <div className="card">
          <h3>Who We Are</h3>
          <p>
            Stackly is a forward-thinking company specializing in digital marketing,
            development, and AI.
          </p>
        </div>

        <div className="card">
          <h3>Our Mission</h3>
          <p>
            Creating technology that simplifies business performance through
            innovation.
          </p>
        </div>

        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be a global leader in digital innovation delivering impactful
            solutions.
          </p>
        </div>

        <div className="card">
          <h3>Our Values</h3>
          <ul>
            <li>Innovation and learning</li>
            <li>Integrity & transparency</li>
            <li>Customer-first mindset</li>
            <li>Teamwork & collaboration</li>
          </ul>
        </div>
      </section>

      {/* FOOTER SET */}
      <section className="grid-section">
        <div className="card">
          <h3>Getting Started</h3>
          <p>
            Explore Home & Services to dive into AI, marketing, and automation.
          </p>
        </div>

        <div className="card">
          <h3>Frequently Asked Questions</h3>
          <ul>
            <li>How do I create an account? → Click Get Started.</li>
            <li>How do I reset my password? → Use “Forgot Password”.</li>
            <li>How do I contact support? → Email support@stackly.com.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Contact Us</h3>
          <p>
            Email: support@stackly.com <br />
            Phone: +91 98765 43210
          </p>
        </div>
      </section>

      <footer className="footer">© 2025 Stackly — All Rights Reserved</footer>
    </div>
  );
}

export default App;
