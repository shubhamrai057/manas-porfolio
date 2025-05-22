import React from 'react'
import Test from '../images/test.svg';
import Test1 from '../images/test1.svg';
import Test2 from '../images/test2.svg';
import Test3 from '../images/test3.svg';
import Test4 from '../images/test4.svg';
import Test5 from '../images/test5.svg';
import Test6 from '../images/test6.svg';
import Test7 from '../images/test7.svg';
import Test8 from '../images/test8.svg';
import Test9 from '../images/test9.svg';
import Test10 from '../images/test10.svg';
import Test11 from '../images/test11.svg';
import Test12 from '../images/test12.svg';
import Test13 from '../images/test13.svg';
import Test14 from '../images/test14.svg';
import FR1 from '../images/fr_1.png';
import FR2 from '../images/fr_2.png';
import FR3 from '../images/fr_3.png';
import FR4 from '../images/fr_4.png';
import Fr_ui_animation from '../images/fr_ui_animation.mp4';
import ElementTiming from '../images/elements-timing.mp4';
import Cat1 from '../images/cat_1.mp4';
import Cat2 from '../images/cat_2.mp4';
import LessonEnding from '../images/LessonEnding.mp4';
import LessonSectionTransition from '../images/LessonSectionTransition.mp4'
import LogoIntro from '../images/LogoIntro.mp4';
import MotionLang from '../images/motion-lang.mp4';
import Header from '../images/header.mp4';
import Gplay from '../images/gplay.svg';
import AppStore from '../images/appstore.svg';
import WebStore from '../images/webstore.svg';

function Frontrow() {
  return (
    <div>
      <div className="container">
        <div className="breadcrumbs">
          <span className="font-red">BRANDING</span>
          <span className="font-red">PRODUCT DESIGN</span>
          <span className="font-red">MOTION DESIGN</span>
        </div>
        <h1 className="pg_header">A frontrow seat to pursue your passion</h1>
        <div className="product_desc">
          <div className="year">
            <span className="label">YEAR</span>
            <div className="data">2020</div>
          </div>
          <div className="role">
            <span className="label">ROLE</span>
            <div className="data">Design Lead</div>
          </div>
          <div className="company">
            <span className="label">COMPANY</span>
            <a
              href="https://frontrow.co.in/"
              className="data"
              target="_blank"
              rel="noreferrer"
            >
              FrontRow
            </a>
          </div>
          <div className="desc">
            <div className="data">
              Everyone has an innate passion(whether it is singing, playing
              badminton or writing) which is a major source of joy in their
              lives. However, there’s a severe lack of avenues to pursue these
              passions further. Offline options are often lacklustre and
              expensive whereas there is little to no high quality guided
              content available online.
              <br />
              <br />
              FrontRow is an expert-led learning platform for creative arts,
              sports &amp; fitness and hobbies. Founders of FrontRow had
              raised a seed of{" "}
              <a
                href="https://yourstory.com/2020/11/funding-alert-frontrow-lightspeed-elevation-deepika-padukone"
                className="underline black"
              >
                $3M from LightSpeed
              </a>{" "}
              and were looking to craft a consumer ed-tech brand tackling this
              problem space.
            </div>
          </div>
        </div>
        <div className="product_hero">
          <video className="hero-video" id="vid" autoPlay loop muted>
            <source
              src={Header}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text_section rnd">
          <div className="text_header">CONTEXT &amp; BRANDING</div>
          <div className="text_content">
            A plethora of online learning startups have emerged in India in
            recent years to serve school-age students. More than 250 million
            students are enrolled across schools in urban and rural parts of
            the country. By the year, 2019/20 we have had unicorn companies
            like Byju’s and Unacademy solving for the massive STEM test-prep
            market within the overall online education space in India.
            <br />
            <br />
            When one looks away from the traditional STEM learning paths in
            India, there is a dire lack of quality coaching and expert
            teaching in skills like playback-singing, badminton or music
            composition. The learnings from the best in these fields were
            limited by human and geographical challenges. With the pandemic
            bringing about paradigm shifts in content consumption and delivery
            in India, we saw increasing demand from students wanting to pursue
            their passions online. Moreover, frustrated by the severe lack of
            learning paths &amp; solutions around hobbies, interests and
            non-academic pursuits of a student, founders of FrontRow decided
            to build for the massive Indian Ed-tech audience with their
            underlying passions at the core.
            <br />
            <br />
            <br />
            <br />
            <div className="text_header font-red quote-text">
              Skills in many of these categories are not codified as in hard
              sciences and often possessed only by those who’ve reached the
              very pinnacle of the field.
              <br />
              <br />
              FrontRow’s mission is to codify the tribal knowledge gained from
              years of practice and struggle across these fields and create a
              platform to enable even casual learners to learn and pursue
              excellence in these fields.
            </div>
            I began working closely with the founding team at FrontRow on
            creative strategy, visual identity and motion language, the result
            is a well-crafted consumer edutainment brand language that helps
            to inspire a learning lifestyle in everyone.
            <br />
            <br />
            The design language reflects the product’s sophisticated and
            best-in-class offering while allowing the wide range of
            topics/interests, instructors and their unique personalities to
            come through. FrontRow’s identity is tailored to offer: a
            cinematic, frontrow seat to a unique learning platform that opens
            up to an impressive array of top-tier instructors within.
          </div>
        </div>
      </div>
      <div className="grey-box">
        <div className="container2">
          <div className="brand-detail font-red">
            <div>
              <strong>BRAND/PRODUCT TENETS -</strong>
              <br />
              <br />
              We want to enable everyone to pursue their passion in learning.
              <br />
              <br />
              We want everyone to learn from the very best in the industry
              <br />
              <br />
              We want to provide a platform for students to showcase their
              talent and foster growth in a community of like-minded
              individuals
            </div>
            <div>
              <strong>Brand Personality -</strong>
              <br />
              <br />
              Inspiring (Aspirational)
              <br />
              <br />
              Trustworthy (Credible/Expertise)
              <br />
              <br />
              Inviting &amp; Approachable (I can do this/everyone can learn
              this)
              <br />
              <br />
              Energetic (foster community learning/creative expression)
            </div>
          </div>
          <div className="brand-detail one mt-200">
            <img src={Test} alt="Playstore" />
            <img src={Test1} alt="Playstore" />
            <img src={Test2} alt="Playstore" />
            <img src={Test3} alt="Playstore" />
            <img src={Test4} alt="Playstore" />
            <img src={Test5} alt="Playstore" />
          </div>
          <div className="brand-text">
            <div className="brand-header">EARLY EXPLORATIONS OF THE LOGOFORM</div>
            <div className="brand-copy">
              <strong>Concept - The classroom of one.</strong>
              <br />
              Explored recognisable shapes and forms that depict a scene of an
              exclusive/premium classroom, where the student gets to learn
              from the very best.
              <br />
              Concepts that showcase a cinematic element or a ‘front row seat’
              to the celebrity/expert’s class.
            </div>
          </div>
          <div className="brand-detail mt-200">
            <img src={Test6} alt="Playstore" />
            <img src={Test7} alt="Playstore" />
            <img src={Test8} alt="Playstore" />
            <img src={Test9} alt="Playstore" />
            <img src={Test10} alt="Playstore" />
            <img src={Test11} alt="Playstore" />
          </div>
          <div className="brand-text">
            <div className="brand-header">EARLY EXPLORATIONS OF THE LOGOFORM</div>
            <div className="brand-copy">
              <strong>
                Concept - Denote the continuous upskilling nature of learning
                anything.
              </strong>
              <br />
              Learning path in non-academic categories are not as codified as
              in hard sciences and often possessed only by those who’ve
              reached
              <br />
              the very pinnacle of the field. ‘Steps’ as an ancient symbol
              codifies the tribal knowledge gained from years of practice and
              struggle across these fields.
            </div>
          </div>
          <div className="brand-detail mt-200">
            <img src={Test13} alt="Playstore" />
            <img src={Test12} alt="Playstore" />
            <img src={Test14} alt="Playstore" />
          </div>
        </div>
      </div>
      <div className="m-75-75">
        <div className="container text_content">
          From all the explorations of the logoform, we narrowed down shapes
          and arrangements that best reflected FrontRow’s core values of being
          a{" "}
          <span className="font-red">
            sophisticated learning platform and yet an approachable consumer
            brand
          </span>
          .
        </div>
      </div>
      <div className="img-section">
        <img
          src={FR1}
          className="res-img"
          alt="Playstore"
        />
        <img
          src={FR2}
          className="res-img"
          alt="Playstore"
        />
        <img
          src={FR3}
          alt="Playstore"
          className="res-img"
        />
        <img
          src={FR4}
          className="res-img"
          alt="Playstore"
        />
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <span>User Interface animations/prototypes</span>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source
              src={Fr_ui_animation}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="text_content mb-45">
            <strong>CAMEO: MOTION DESIGN LANGUAGE</strong>
            <br />
            <br />
            Our motion design principles were inspired by the underlying craft
            in each of these experts. We watched hundreds of hours of course
            materials taught by the best of the best in every field, we
            watched these experts in-situ to understand their movement,
            technique, approach and distinguished secrets - and deconstructed
            them to create a unique behaviour that we call the{" "}
            <span className="underline">‘Cameo’</span>.
            <br />
            <br />
            <i>
              Cameo - originally meaning "a small piece of artwork," refers to
              a bit part (usually a brief, non-speaking or walk-on role that
              is uncredited or unbilled) or special screen appearance by a
              famous actor, director, or prominent entity.
            </i>
            <br />
            <br />
            Hence we named the motion-design system 'Cameo' to illustrate how
            FrontRow as a brand sneaks in-between the content and plays it's
            part in communicating key concepts, insights from lessons and give
            structure to the overall ebb and flow of the course content. It is
            an entire motion graphics intent that has its roots firmly in the
            fundamentals of learning and craft to create a beautiful, elegant
            and bold motion system for all touch-points of FrontRow as a
            brand.
          </div>
        </div>
        <div className="container video-title">
          <span>Basic Motion Philosophy - BIRTH &amp; REVEAL</span>
        </div>
        <div className="container">
          <video className="hero-video" autoPlay loop muted>
            <source
              src={MotionLang}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <span>Brand and UI elements following Birth+Reveal</span>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source
              src={ElementTiming}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <span>Application: Brand intro for course lessons</span>
          </div>
          <video className="hero-video" autoPlay muted loop>
            <source
              src={LogoIntro}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div>
              Application: Mid-lesson transitions
              <span className="video-sub-copy">
                The use of footage blur to change the context/scene in the
                background, helping learners adapt to the change in context
                seamlessly
              </span>
            </div>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source
              src={LessonSectionTransition}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div>
              Application: Lesson end transitions
              <span className="video-sub-copy">
                We follow the same animation principle at the end of each
                lesson, with interface for lesson summary and next-up cues.
              </span>
            </div>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source
              src={LessonEnding}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div>
              Application: Product Illustrations
              <span className="video-sub-copy">
                We follow the same animation principle for all the various
                category illustrations within the product. So far, FrontRow
                has launched courses in 6 categories.
              </span>
            </div>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source src={Cat1} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div>&nbsp;</div>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source src={Cat2} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div>Application: Course trailer cuts</div>
          </div>
        </div>
        <div className="container">
          <iframe
            className="iframebox"
            src="https://www.youtube.com/embed/HpdE6vhlyqw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="video"
          ></iframe>
        </div>
      </div>
      <div className="cat-videos">
        <div className="text_content">
          FUTURE TRACK
          <br />
          <br />
          FrontRow has officially launched the product in October 2020 and the
          iOS &amp; Android apps have hit more than a 200,000 download since
          launch. We have launched expert courses and learning tracks across
          Playback singing, Cricket (Batting, Pace and Spin Bowling), Rapping,
          Standup comedy and Music composition. The product and design teams
          since have been working on features that extend beyond the expert
          course videos into weekly and monthly community cohorts of learners.
        </div>
        <div className="count-section">
          <div className="diff-count">
            <div className="count-top">6+</div>
            <span className="count-bottom">CATEGORIES</span>
          </div>
          <div className="diff-count">
            <div className="count-top">200,000+</div>
            <span className="count-bottom">DOWNLOADS</span>
          </div>
          <div className="diff-count">
            <div className="count-top">INR. 1.3Cr</div>
            <span className="count-bottom">REV. MoM</span>
          </div>
        </div>
        <div className="download-bx text-center">
          <a
            className="downloads"
            href="https://play.google.com/store/apps/details?id=io.connectcourses.app"
            target="_blank"
            rel="noreferrer"
            title="Download frontrow on playstore"
          >
            <img src={Gplay} alt="Playstore" />
          </a>
          <a
            className="downloads"
            href="https://apps.apple.com/us/app/frontrow-learn-from-the-best/id1529245488"
            target="_blank"
            rel="noreferrer"
            title="Download frontrow on appstore"
          >
            <img src={AppStore} alt="appstore" />
          </a>
          <a
            href="https://frontrow.co.in/"
            target="_blank"
            className="downloads"
            rel="noreferrer"
            title="Download frontrow on web"
          >
            <img src={WebStore} alt="Web" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Frontrow