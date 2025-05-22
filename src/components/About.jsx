import React from 'react';
import Photo from '../images/photo.png';
import Port1 from '../images/port1.svg';
import Port2 from '../images/port2.svg';
import Port3 from '../images/port3.svg';
import Port4 from '../images/port4.svg';
import Port5 from '../images/port5.svg';
import Port6 from '../images/port6.svg';
import Port7 from '../images/port7.svg';

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="about_top">
          <div className="about_top_left sm">
            <p>
              My last 10 years have been spent designing and creating things,
              mostly software products. My most notable stint was at&nbsp;Swiggy,
              as it scaled from 300 to 300,000 orders per day, on the strong
              foundations of their ops and consumer app teams in Bengaluru,India.
            </p>
            <p>
              In India, my work is used by millions of consumers to get their
              favorite food delivered faster, to enjoy their daily commutes, and
              most recently, in learning skills and getting their dream jobs
              online.{" "}
            </p>
            <p>
              My work at Instamojo has impacted 500,000+ SMB merchants, helping
              them take their businesses online via an android app.
            </p>
            <p>
              These days I am heading design teams at Entri and FrontRow, crafting
              education products of tomorrow. Sometimes, I write my thoughts here.
            </p>
            <p>
              My spare time is spent in travelling, motorcycling and reading.
              <br />I live in Bengaluru and ride a mean RX-135.
            </p>
            <br />
            <div className="other_header">OTHER LINKS</div>
            <a
              href="https://www.dropbox.com/s/5nsiqdrc3mvql13/Manas_Vaze_CV.pdf?dl=0"
              className="other_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/manas-vaze/"
              className="other_link"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/manasvaze"
              className="other_link"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://dribbble.com/manasvaze"
              className="other_link"
              target="_blank"
              rel="noreferrer"
            >
              Dribbble
            </a>
            <a href="mailto:manasvaze23@gmail.com" className="other_link">
              Email
            </a>
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
        <div className="about_gallery">
          <div className="gallery_items">
            <img
              src={Port1}
              className="gallery_item"
              alt="gallery_img"
            />
            <img
              src={Port2}
              className="gallery_item"
              alt="gallery_img"
            />
          </div>
          <div className="gallery_items">
            <img
              src={Port3}
              className="gallery_item"
              alt="gallery_img"
            />
            <img
              src={Port4}
              className="gallery_item"
              alt="gallery_img"
            />
            <img
              src={Port5}
              className="gallery_item"
              alt="gallery_img"
            />
          </div>
          <div className="gallery_items">
            <img
              src={Port6}
              className="gallery_item"
              alt="gallery_img"
            />
            <img
              src={Port7}
              className="gallery_item"
              alt="gallery_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About