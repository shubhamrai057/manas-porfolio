import React from "react";
import Photo from '../images/photo.png';
import About1 from '../images/abou1.svg';
import About2 from '../images/abou2.png';
import About4 from '../images/abou4.png';
import About5 from '../images/abou5.png';
import Prototype from '../images/prototype_header.png';

function Home() {
  return (
    <div className="container">
      <div className="about">
        <div className="about_top">
          <div className="about_top_left">
            <p>
              Hi, I'm Manas, a designer based in{" "}
              <span className="font-red">Bengaluru, IN.</span>
            </p>
            <p>
              15+ years of leading product design teams for startups and large
              orgs. Scaling user experience practices for teams that serve 400M+
              people worldwide. I care about shipping out experiences that enable
              a positive change in people's lives while delivering successful
              business outcomes.
            </p>
            <p>
              Most recently, I was heading the product design function at{" "}
              <strong>Truecaller</strong> in Stockholm.
            </p>
            {/* <p>Currently, I am heading design teams at <a href="https://play.google.com/store/apps/details?id=me.entri.entrime" className="about_link" title="Entri" target="_blank" rel="noreferrer">Entri</a> and <a href="https://frontrow.co.in/" className="about_link"
                    title="FrontRow" target="_blank" rel="noreferrer">FrontRow</a>, crafting education products for emerging markets.</p>
                <p>I'm passionate about&nbsp;consumer behaviour, product strategy and prototyping.</p> */}
          </div>
          <div className="about_top_right">
            <img
              src={Photo}
              title="About Manav"
              alt="About Manav"
              className="about_img"
            />
          </div>
        </div>
        <div className="about_bottom">
          <a href="/frontrow" className="about_port">
            <div className="about_header">
              <div>01/</div>
              <div>A frontrow seat to pursue your passion</div>
            </div>
            <div className="about_content">
              FrontRow enables everyone to pursue their passions - get better,
              learn from the best and get noticed!
            </div>
            <div className="text-left">
              <img
                src={About1}
                alt="Manas-vaze-portfolio-img"
                className="width-100"
              />
            </div>
          </a>
          <a href="/entri" className="about_port left">
            <div className="about_header">
              <div>02/</div>
              <div>Affordable upskilling for the next billion</div>
            </div>
            <div className="about_content">
              Entri provides affordable, quality coaching &amp; educational tools
              in local languages to the millions of users from remote, rural parts
              of India.
            </div>
            <div className="">
              <img
                src={About2}
                alt="Manas-vaze-portfolio-img"
                className="width-100"
              />
            </div>
          </a>
          <a href="/instamojo" className="about_port left">
            <div className="about_header">
              <div>03/</div>
              <div>Enabling payments for mobile-first SMBs</div>
            </div>
            <div className="about_content">
              Trusted by 5,00,000+ Indian Businesses, Instamojo offers tools that
              help users manage their business efficiently.
            </div>
            <div className="">
              <img
                src={About4}
                alt="Manas-vaze-portfolio-img"
                className="width-100"
              />
            </div>
          </a>
          <a href="/swiggy" className="about_port">
            <div className="about_header">
              <div>04/</div>
              <div>Lightning fast food delivery, made simple.</div>
            </div>
            <div className="about_content">
              India's largest food delivery startup with products &amp; solutions
              that redefines the food ordering &amp; delivery space in India
            </div>
            <div className="text-left">
              <img
                src={About5}
                alt="Manas-vaze-portfolio-img"
                className="width-100"
              />
            </div>
          </a>
          <a
            href="https://blog.framer.com/making-framer-prototypes-talk-to-each-other-web-sockets-framer-85eedd2243aa"
            target="_blank"
            className="about_port left"
            rel="noreferrer"
          >
            <div className="about_header">
              <div>05/</div>
              <div>Prototypes and Experiments</div>
            </div>
            <div className="about_content">
              A collection of prototypes I've made with Framer, welding design and
              code to create intuitive and compelling experiences.
            </div>
            <div className="">
              <img
                src={Prototype}
                alt="Manas-vaze-portfolio-img"
                className="width-100"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
