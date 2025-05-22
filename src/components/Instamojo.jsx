import React from 'react';
import IN1 from '../images/in_1.png';
import IN2 from '../images/in_2.png';
import IN3 from '../images/in_3.png';
import IN4 from '../images/in_4.png';
import IN5 from '../images/in_5.png';
import IN6 from '../images/in_6.png';
import IN7 from '../images/in_7.gif';
import IN8 from '../images/in_8.png';
import IN9 from '../images/in_9.gif';
import IN10 from '../images/in_10.png';

function Instamojo() {
  return (
    <div>
      <div class="container">
        <div class="breadcrumbs">
          <span class="font-red">PRODUCT DESIGN</span>
          <span class="font-red">PROTOTYPING</span>
        </div>
        <h1 class="pg_header">Enabling payments for mobile-first SMBs</h1>
        <div class="product_desc">
          <div class="year">
            <span class="label">YEAR</span>
            <div class="data">2017</div>
          </div>
          <div class="role">
            <span class="label">ROLE</span>
            <div class="data">Design Lead</div>
          </div>
          <div class="company">
            <span class="label">COMPANY</span>
            <a href="https//www.instamojo.com/" class="data" target="_blank">
              Instamojo
            </a>
          </div>
          <div class="desc">
            <div class="data">
              Instamojo provides free payment gateway in India. Trusted by
              5,00,000+ indian SMBs, it offers some great tools that help one
              manage and grow their small business online.
              <br />
              <br />
              Since launch in 2012, Instamojo was primarily a web product,
              offering payment related features to SMB owners with internet
              access.
              <br />
              However, by mid 2017 the{" "}
              <a
                href="https://www.businessinsider.in/home/how-the-jio-effect-brought-millions-of-indians-online-and-is-reshaping-silicon-valley-and-the-internet/articleshow/70723349.cms"
                target="_blank"
                class="data"
                rel="noreferrer"
              >
                story of internet access in India
              </a>{" "}
              was much different.
              <br />
              <br />
              This put forth a strong use-case for an Android app that enables
              merchants to conduct day-to-day commerce on their phones. I was
              teamed up with an amazing Product Head,{" "}
              <a
                href="https://www.linkedin.com/in/dalanmendonca/"
                target="_blank"
                class="data"
                rel="noreferrer"
              >
                Dalan
              </a>{" "}
              and Developer,{" "}
              <a
                href="https://www.linkedin.com/in/vedhavyas/"
                target="_blank"
                class="data"
                rel="noreferrer"
              >
                Vedhavyas
              </a>{" "}
              to design and ship an android app catering to mobile-first
              merchants.
            </div>
          </div>
        </div>
        <div class="product_hero">
          <img
            src={IN1}
            class="hero"
            alt="Instamojo"
          />
        </div>
        <div class="text_section rnd">
          <div class="text_header">RESEARCH &amp; CONTEXT</div>
          <div class="text_content">
            By mid 2017 the story of internet access in India was much
            different. Thanks to the insane sales of reliance JIO connections
            and availability of cheap and good android phones, internet was
            suddenly everywhere. Everyone owned a smartphone, and interesting
            new businesses sprawled around on facebook pages and whatsapp
            groups.
            <br />
            <br />
            We had conducted large user surveys across tier-1 &amp; tier-2
            cities in India during the early part of 2017. Discussions with the
            support team also revealed that we got a lot of requests from
            existing Instamojo merchants that they couldn’t see their new sales
            on mobile, so they had no way of tracking their realtime earnings on
            the go.
          </div>
          <br />
          <br />
          <br />
          <br />
          <div class="text_header font-red quote-text">
            We found 80% of the SMB merchants had a basic smartphone with 3G
            connectivity, and only around 15% of SMB merchants had
            laptops/desktops.
          </div>
        </div>
      </div>
      <img src={IN2} class="res-img" alt="" />
      <div class="container">
        <div class="m-95-95">
          <div class="text_header">CHALLENGES</div>
          <div class="text_content">
            Our research and surveys along with continous customer asks put
            forth a strong use-case for an Android app that enables merchants to
            conduct day-to-day commerce on their phones. Up until this point,
            they were only notified of new sales through email, like the one
            below.
          </div>
        </div>
      </div>
      <div class="container">
        <img src={IN3} class="res-img" alt="" />
      </div>
      <div class="container">
        <div class="m-95-95">
          <div class="text_content">
            If the merchant wanted to see the total sales they’ve now made on
            Instamojo, they would have to log in to the website and navigate to
            their Sales dashboard. The information on new sales and total sales
            was completely separate, and there were additional steps involved in
            retreiving that information.
          </div>
        </div>
      </div>
      <div class="container">
        <img src={IN4} class="res-img" alt="" />
      </div>
      <div class="container">
        <div class="m-75-75">
          <div class="text_content">
            With the emphasis on <span class="underline">total sales</span>{" "}
            rather than <span class="underline">new sales</span>, it can be
            tough for merchants to get a sense of new sales coming in. From a
            business standpoint, we should make it ridiculously easy for
            merchants to see how Instamojo is helping{" "}
            <span class="underline">them every single day</span>.
            <br />
            <br />
            Apart from the drawbacks of the existing product, we also had to
            answer to the rapidly changing online SMB market in India. Mobile
            and internet penetration in India was growing exponentially by 2017.
            There were new and exciting startups like{" "}
            <a
              class="font-black"
              href="https://techcrunch.com/2016/08/17/meesho-wants-to-make-selling-through-whatsapp-more-efficient-and-less-painful/"
            >
              Meesho, focussing solely on this new mobile-first SMB market
            </a>
            .
            <br />
            <br />
            During our interviews, we talked to many such tech-savvy SMB owners
            who were already doing business on Facebook groups and Whatsapp.
            They would display products/services and close deals via Cash or
            NEFT bank transfers. We wanted to give these SMB owners the best
            tool, through an Android app that enables them to conduct day-to-day
            commerce on their phones powered by Instamojo.
          </div>
        </div>
        <div class="m-75-75">
          <div class="text_header">GOALS</div>
          <div class="text_content">
            Our team brainstormed on many early and divergent ideas and together
            with discussions with business teams, we were able to reduce the
            scope by phasing out the releases of the android app. This also
            allowed us to ship and learn faster, since this was Instamojo’s
            first foray into mobile products.
            <br />
            <br />
            <br />
            The goals were as follows -
            <br />
            <br />
            <div class="phase_text">
              <span class="phase_label">Phase 1 - </span>Enable our existing
              merchants to conduct most of their commerce on their smartphones.
            </div>
            <div class="phase_text">
              <span class="phase_label">Phase 2 - </span>Act as an acquisition
              channel of the next million merchants, who have only known “the
              mobile way” of doing business.
            </div>
            <br />
            <br />
            Upon talking to the customers about ground realities of invoicing,
            transactions and tax related workflows, the team decided that these
            are best designed on a web/desktop interface. Instead we focussed on
            offering great experiences that enabled merchants to do basic but
            frequent and daily tasks like-
            <br />
            <br />
            <ul class="text_list">
              <li> Creating &amp; Sharing payment/product links.</li>
              <li> View the latest sales figures in realtime with filters.</li>
              <li>
                {" "}
                Enable merchant sign-ups on the app, leading to new user
                acquisitions.
              </li>
            </ul>
          </div>
        </div>
        <div class="m-75-75">
          <div class="text_header">SOLUTION</div>
          <div class="text_content">
            The biggest challenge was to make the above mentioned tasks easy on
            a smartphone. The app had to be designed for clarity and real time
            information of the business/sales. I started by defining the most
            important information to communicate. My inner monologue went
            something like this —
            <br />
            <br />
            <div class="inverted_text">
              <div class="inverted left">“</div>What is the biggest value
              provided by this app — the ability to see each new sale in
              realtime.
              <br />
              <br />
              Do we want to show a sales breakdown by Day, Week, Month, and All
              Time?
              <br />
              <br />
              What value is added between Week and Month?
              <br />
              <br />
              Do we want to provide a breakdown of sales by product or should
              that segmentation be for a later release?
              <span class="inverted right">”</span>
            </div>
            I started sketching out various dashboards with different sets of
            information ranging from daily sales, to amount of transactions and
            support tickets that were open.{" "}
            <span class="underline">
              We’d got overwhelming feedback in the interviews that merchants
              were very eager to know the sales in real time
            </span>
            . Often times, these SMB owners were in meetings or on the move and
            this app would help them be on top of their business.
          </div>
        </div>
      </div>
      <img src={IN5} class="res-img" alt="" />
      <div class="container">
        <div class="m-75-95">
          <div class="text_content">
            One thing I kept in mind was, putting the emphasis on the
            <span class="underline">customer</span> rather than the
            <span class="underline">purchase</span>. Out in the field, merchants
            would talk and interact with people and close a deal,
            <span class="underline">
              merchants remember their customers very well and track stuff
              mentally using their names
            </span>
            , it’s more important to highlight that there are people behind
            these transactions.
            <div class="font-red quote-text mt-75">
              We reasoned that these merchants have chosen to use Instamojo
              because they want a direct relationship with their audience, so we
              should help them feel this relationship via our products.
            </div>
            After many white-boarding sessions and iterations, we finalised the
            overall purpose of the app and the main dashboard contents. The
            dashboard is designed to be the go-to place for merchants to track
            their sales in the last day/week/months and hence that’s the primary
            focus on the screen. Along with the sales numbers, we also showed
            numbers that indicate growth/dip in business compared to the
            previous day/week/month.
          </div>
        </div>
      </div>
      <img src={IN6} class="res-img" alt="" />
      <div class="container">
        <div class="m-75-75">
          <img src={IN7} class="res-img" alt="" />
        </div>
        <div class="text_content">
          Another objective of the android app was to enable merchants to create
          and share products (or payment links) directly from the app.
          <br />
          <br />
          Since we already had anecdotal data showing patterns in sharing via
          Whatsapp, Email and Facebook, we made it easy for merchants to share
          their links/products on these platforms directly from the app. Prior
          to this, merchants would copy-paste links into mails and whatsapp
          manually on the desktop/browser.
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <img src={IN8} class="res-img" alt="" />
      <div class="container">
        <div class="m-75-75">
          <img src={IN9} class="res-img" alt="" />
        </div>
        <div class="text_content">
          As we finalised the design and the project got onto the development
          phase, I carved out time to design some details within the app,
          animations, empty states via framer JS prototypes. These help me
          immensely in conveying some animations and interactions to the
          developers and how this plays a role in customer delight.
          <div class="m-75-75">
            <div class="text_header">FUTURE TRACK</div>We ended up shipping the
            app in 6 weeks and our customers loved it. We kept seeing more and
            more existing merchants using the android app on a daily basis.
            <br />
            <br />
            Although beyond the scope of this project, Instamojo team had future
            visions of{" "}
            <span class="underline">
              helping merchants manage their capital &amp; shipments
            </span>
            . While working on these designs, I realized how difficult it can be
            for merchants with larger audiences to manage their capital &amp;
            shipments.{" "}
            <span class="underline">
              SMBs usually struggle with liquidity on a daily/weekly basis that
              can aid their procurement or fulfilment of the orders
            </span>
            .
            <br />
            <br />
            Instamojo has later taken up this business challenge and has{" "}
            <span class="underline">
              successfully launched mojo-express and mojo-capital
            </span>
            .
          </div>
        </div>
      </div>
      <div class="container">
        <img src={IN10} class="res-img" alt="" />
      </div>
      <div class="container">
        <div class="mt-75">
          <a
            href="https://play.google.com/store/apps/details?id=com.instamojo.app"
            target="_blank"
            class="final_link"
            rel="noreferrer"
          >
            Download Instamojo Merchant App on the Playstore
          </a>
        </div>
      </div>
    </div>
  );
}

export default Instamojo