import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>

      {/* Header */}
      <header className="header">
        <div className="header-container">

          <div className="logo-section">
            <div className="logo-circle">S</div>
            <h1 className="logo-text">Stackly</h1>
          </div>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#software-solutions">Software Solutions</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#help">Help</a>
            <button className="get-started">Get Started</button>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>☰</button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <nav>
              <a href="#home" onClick={toggleMenu}>Home</a>
              <a href="#software-solutions" onClick={toggleMenu}>Software Solutions</a>
              <a href="#services" onClick={toggleMenu}>Services</a>
              <a href="#about" onClick={toggleMenu}>About</a>
              <a href="#help" onClick={toggleMenu}>Help</a>
              <button onClick={toggleMenu}>Get Started</button>
            </nav>

            {/* Working Image */}
            <img
              src="https://cdn.pixabay.com/photo/2023/03/15/14/25/ai-7855022_1280.jpg"
              alt="Menu Preview"
              style={{ width: "90%", borderRadius: "10px", marginTop: "10px" }}
            />
          </div>
        )}
      </header>



      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-image">
          <img
            src="https://cdn.pixabay.com/photo/2023/03/20/18/43/ai-7866724_1280.jpg"
            alt="AI Illustration"
          />
        </div>

        <div className="hero-text">
          <h1>Welcome to Stackly</h1>
          <p>
            <b>
              "Stackly is a forward-thinking technology company dedicated to driving digital transformation."
            </b>
          </p>

          <p>
            <i>
              We design intelligent, scalable solutions powered by AI and cloud innovation.
              Our mission is to empower businesses with cutting-edge tools for smarter growth.
            </i>
          </p>

          <p><b>💡 “Innovating today to define tomorrow’s digital world.”</b></p>
        </div>
      </section>



      {/* Software Solutions Section */}
      <section id="software-solutions" className="software-solutions-section">
        <h1 className="section-title">Our Software Solutions</h1>

        <div className="solutions-cards">
          <div className="solution-card fade-in">
            <h2>Custom Enterprise Software</h2>
            <p>Tailored solutions to optimize enterprise processes with scalability and security.</p>
          </div>

          <div className="solution-card fade-in delay-1">
            <h2>Cloud Migration</h2>
            <p>Move your infrastructure to the cloud with minimal downtime.</p>
          </div>

          <div className="solution-card fade-in delay-2">
            <h2>AI-Powered Analytics</h2>
            <p>Unlock insights with advanced AI analytics for decision making.</p>
          </div>
        </div>
      </section>



      {/* Services Cards */}
      <h1 className="section-title">We Are Providing</h1>

      <section className="service-cards">
        <div className="service-card">
          <h2>Digital Marketing 🌐</h2>
          <p><i>"Stackly’s digital marketing solutions help elevate brands digitally.”</i></p>
        </div>

        <div className="service-card">
          <h2>AI & Automation 🤖</h2>
          <p><i>"We leverage AI to streamline operations and boost efficiency.”</i></p>
        </div>

        <div className="service-card">
          <h2>Web Development 💡</h2>
          <p><i>"Fast, scalable, responsive websites for your business.”</i></p>
        </div>

        <div className="service-card">
          <h2>Mobile App Development 📲</h2>
          <p><i>"High-performance mobile apps for iOS and Android.”</i></p>
        </div>

        <div className="service-card">
          <h2>Branding 🎯</h2>
          <p><i>"Creative designs that build strong brand identity.”</i></p>
        </div>

        <div className="service-card">
          <h2>Online Form Filling 📝</h2>
          <p><i>"We simplify form-filling using automation tools.”</i></p>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="info-section">
        <h1>Our Services</h1>

        <div className="info-cards">
          <div className="info-card">
            <h2>🌐 Web Development</h2>
            <p>Secure, scalable websites built with modern tools.</p>
          </div>

          <div className="info-card">
            <h2>🤖 AI & Automation</h2>
            <p>Automate workflows using intelligent AI systems.</p>
          </div>

          <div className="info-card">
            <h2>📱 Mobile App Development</h2>
            <p>Seamless apps for Android and iOS.</p>
          </div>

          <div className="info-card">
            <h2>🎯 Digital Marketing</h2>
            <p>Grow your online presence with targeted strategies.</p>
          </div>

          <div className="info-card">
            <h2>🎨 Branding</h2>
            <p>Creative visuals that match your identity.</p>
          </div>

          <div className="info-card">
            <h2>🧾 Form Filling</h2>
            <p>Automated form filling for speed and accuracy.</p>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="info-section">
        <h1>About Us</h1>

        <div className="info-cards">
          <div className="info-card">
            <h2>Who We Are</h2>
            <p>We specialize in AI, development, and automation.</p>
          </div>

          <div className="info-card">
            <h2>Our Mission</h2>
            <p>To create technology that simplifies life and boosts efficiency.</p>
          </div>

          <div className="info-card">
            <h2>Our Vision</h2>
            <p>To be a global leader in digital innovation.</p>
          </div>

          <div className="info-card">
            <h2>Our Values</h2>
            <ul>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Customer First</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </section>



      {/* Help Section */}
      <section id="help" className="info-section">
        <h1>Help & Support</h1>

        <div className="info-cards">
          <div className="info-card">
            <h2>Getting Started</h2>
            <p>Explore our services to learn more.</p>
          </div>

          <div className="info-card">
            <h2>FAQ</h2>
            <ul>
              <li><b>Create an account?</b> – Click “Get Started”.</li>
              <li><b>Reset password?</b> – Use “Forgot Password”.</li>
              <li><b>Contact support?</b> – support@stackly.com</li>
            </ul>
          </div>

          <div className="info-card">
            <h2>Contact Us</h2>
            <p>Email: <b>support@stackly.com</b></p>
            <p>Phone: <b>+91 98765 43210</b></p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
