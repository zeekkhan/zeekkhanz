import React from "react";
import home from "./about/page";
import Link from "next/link";
const My_Portfolio = () => {
  return (
    <section className="main_page">
      <header className="header">
        <h2 className="logo">
          <span className="l">W</span>ali <span className="l">H</span>ayat
        </h2>
        <nav className="navigation">
          {/* <a href="#home">Home</a> */}
          <Link href="#home" legacyBehavior>Home</Link>
          {/* <a href="#">Portfolio</a> */}
          <Link href="/portfolio" legacyBehavior>Portfolio</Link>
          {/* <a href="#">About</a> */}
          <Link href="/about" legacyBehavior>About</Link>
          {/* <a href="#">Services</a> */}
          <Link href="/services" legacyBehavior>Services</Link>
          {/* <a href="#">Contact</a> */}
          <Link href="/contact" legacyBehavior>Contact</Link>
        </nav>
      </header>

      {/* home Section */}

      <div id="home">
        <h1 className="greet"><span id="w">W</span>elcome T<span id="o">o</span> <span id="m">M</span>y <span className="port">P</span>ortf<span className="port">f</span>olio Site</h1>
        <h2 id="h2"><b>Ready to Join Your Team.</b></h2>
        <Link href="/about">
      <button id="btn-start">Get Start
      </button>
        </Link>
      </div>
      <div id="home2">
        <p><b>Coming Soon....</b></p>
      </div>
    </section>
  );
};

export default My_Portfolio;
