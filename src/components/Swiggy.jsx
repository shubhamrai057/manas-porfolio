import React from 'react';
import SW1 from '../images/sw_1.png';
import SW2 from '../images/sw_2.png';
import SW3 from '../images/sw_3.png';
import SW4 from '../images/sw_4.png';
import SW5 from '../images/sw_5.png';
import SW6 from '../images/sw_6.png';
import SW7 from '../images/sw_7.png';
import SW8 from '../images/sw_8.png';
import SW7G from '../images/sw_7.gif';

function Swiggy() {
  return (
    <div>
      <div class="container">
        <div class="breadcrumbs">
          <span class="font-red">BRANDING</span>
          <span class="font-red">PRODUCT DESIGN</span>
          <span class="font-red">MOTION DESIGN</span>
        </div>
        <h1 class="pg_header">Lightning fast food delivery, made simple.</h1>
        <div class="product_desc">
          <div class="year">
            <span class="label">YEAR</span>
            <div class="data">2015-16</div>
          </div>
          <div class="role">
            <span class="label">ROLE</span>
            <div class="data">Sr. Product Designer</div>
          </div>
          <div class="company">
            <span class="label">COMPANY</span>
            <a
              href="https://www.swiggy.com"
              class="data"
              target="_blank"
              rel="noreferrer"
            >
              Swiggy
            </a>
          </div>
          <div class="desc">
            <div class="data">
              In early 2015, Swiggy's business and operations were starting to
              grow exponentially. The team was looking to grow from 300 to
              300,000 orders per day by the end of 2016. However, the experience
              of online food-ordering was in very bad shape. Hungry users had to
              go through broken checkout flows, deal with ill-managed addresses
              and wait impatiently on a dumb &amp; opaque delivery process.
              <br />
              <br />
              We wanted to change this and make food-ordering ‘second nature’ to
              our hungry customers.
            </div>
          </div>
        </div>
        <div class="product_hero">
          <img
            src={SW1}
            class="hero"
            alt="Swiggy"
          />
        </div>
        <div class="pg_header2">CHALLENGES</div>
        <div class="challenge_box">
          <div class="box-typ1">
            <div class="text-right">
              <img src={SW2} alt="" />
            </div>
            <div class="box_desc">
              <div class="box_head">Delivery Tracking - Before Redesign</div>
              <div class="box_copy">
                A text-heavy representation of the underlying logistics, along
                with un-intuitive tracking caused a lot of anxiety in users.
                This also led to a lot of un-necessary support calls.
              </div>
            </div>
          </div>
          <div class="box-typ1">
            <div class="text-right">
              <img src={SW3} alt="" />
            </div>
            <div class="box_desc">
              <div class="box_head">
                Logistical transparency - Before Redesign
              </div>
              <div class="box_copy">
                We found that our choice of logistical steps communicated to
                users was leading to confusion regarding the ‘current status’ of
                their order. These choices were also not good at accounting for
                any mis-haps during the delivery operations.
              </div>
            </div>
          </div>
        </div>
        <div class="text_section">
          <div class="text_header">RESEARCH &amp; CONTEXT</div>
          <div class="text_content">
            Swiggy has consumer-facing apps on iOS, android and the web.
            Swiggy’s delivery fleet operate across multiple localities and
            cities with varying constraints and demands. Today, Swiggy is the
            leading food ordering and delivery platform in India.
            <br />
            <br />
            Prior to the redesign, we had conducted multiple interviews with
            some of Swiggy’s most loyal customers regarding their daily food
            ordering habits and the common issues they were facing. We observed
            that many of our early customers ordered multiple times in a week.
            We also saw that some of them had placed orders from multiple
            locations. These two observations helped us cement product values
            that revolved around
            <span class="underline">continuity of service</span> and
            <span class="underline">ease-of-repetition</span>.
            <br />
            <br />
            Another key insight we got from our research was that, after
            ordering, customers go through a lot of anxiety in waiting for their
            food. Hunger is one of the primal needs of us human beings.
          </div>
        </div>
        <div class="text_header font-red quote-text">
          Evolutionary psychology also tells us that hunger, as an experience is
          designed to induce anxiety and fear when deprived of food. Leading to
          better chances of survival.
        </div>
        <div class="text_section">
          <div class="text_content">
            Our conversations with customers (both on call and in-person) led us
            to areas of improvement within the product experience that would
            enable customers to
            <span class="underline">be in control of their orders</span> and
            hence reduce this primal anxiety.
          </div>
        </div>
        <div class="text_section">
          <div class="text_header">THE GOAL</div>
          <div class="text_content">
            The primary goal of our redesign was to re-think and improve the
            core flows of the consumer apps, across iOS, android and web. These
            included restaurant/food discovery, browsing menu &amp; order
            creation, checkout &amp; order-tracking and managing multiple
            delivery locations. Additionally, we planned to revise the product
            visuals in accordance with the rebranding done during late 2014.
            <br />
            <br />
            We also expected our changes to reduce inbound support call volume
            for on-going orders and also reduce friction in onboarding new
            users.
          </div>
        </div>
        <div class="text_section">
          <div class="text_header">SOLUTIONS</div>
          <div class="text_content">
            Many customers told us they were very anxious about the “current
            status” of their food delivery more than anything else. Previously,
            the <span class="underline">track order</span> feature was buried
            under a CTA on the order details page. Many users would navigate
            into these pages to find the track order CTA to track their ongoing
            order.
            <br />
            <br />
            We eliminated this manual effort by implementing
            <span class="underline">live tracking via google maps</span> and
            surfacing the map screen to the top most level.
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <img src={SW4} class="res-img" alt="" />
      <div class="container">
        <div class="m-75-95">
          <div class="text_content">
            Along with live tracking, we also had to standardise the
            communication around the logistical milestones of a Swiggy order.
            Through early testing we found that users felt more in-control of
            their orders when Swiggy’s logistical efforts were communicated to
            them in real-time and clearly.
            <br />
            <br />
            We identified 4 important milestones that corresponded to most
            common worries a Swiggy user had during an active order.
          </div>
          <div class="pr_list">
            <div>
              <div class="pr_list_header font-red">MILESTONES</div>
              <div class="pr_list_item">
                Order confirmed by the restaurant
                <br />
                <br />
                Delivery person assigned to the order
                <br />
                <br />
                Food is en-route to delivery
                <br />
                <br />
                Order delivered
              </div>
            </div>
            <div>
              <div class="pr_list_header font-red">USER WORRIES</div>
              <div class="pr_list_item">
                Is my order confirmed by the restaurant?
                <br />
                <br />
                How long will this order take?
                <br />
                <br />
                Where is the delivery guy?
                <br />
                <br />
                Was my food actually delivered?
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={SW5} class="res-img" alt="" />
      <div class="container">
        <div class="m-95-95">
          <div class="text_content">
            Along with exceptional delivery time SLAs mantained by Swiggy,
            standardising these steps across orders helps users
            <span class="underline">
              develop a muscle memory of how Swiggy operates
            </span>
            and makes food ordering easy and habitual.
          </div>
          <br />
          <br />
          <br />
          <div class="text_header">RESTAURANT DISCOVERY</div>
          <div class="text_content">
            As the number of restaurants and service areas of Swiggy grew, the
            old design was becoming inefficient in discovery/spotting. We
            observed that users were spending a lot of their time scrolling this
            screen indecisively.
            <br />
            Retention data for weekdays showed us that most users would stick to
            3-4 favorite restaurants for all their orders.
            <br />
            <br />
            Also as Swiggy’s SLAs got better, details like the
            <span class="underline">exact location</span> of restaurant were
            becoming irrelevant as compared to
            <span class="underline">delivery time</span>.
          </div>
        </div>
      </div>
      <img src={SW6} class="res-img" alt="" />
      <div class="container">
        <div class="m-95-95">
          <div class="text_header">ENHANCEMENTS TO THE MENU</div>
          <div class="text_content">
            In late 2015, Swiggy started partnering with established fast-food
            chains and franchisee outlets for food delivery. Some of the early
            partners included Dominos Pizza, McDonalds and Cafe Coffee Day.
            These partnerships brought in new use-cases to solve for, such as
            <span class="underline">variants and toppings</span> of a food item
            and
            <span class="underline">
              choosing from multiple franchise locations
            </span>
            .
            <br />
            <br />
            We teamed up with folks from the product and data intelligence teams
            to analyse every food item from Swiggy’s catalogue. This enabled us
            to create a relational database of “main dish” + “accompaniments”
            (Like Biriyani + Cold Drink or Ice cream). We also started
            recommending some items on the Cart screen and food customization
            screen to ‘cross sell and ‘upsell’ beverages/ice creams, the
            relevance of the accompaniments led to an increased order value and
            over time, reach the median order value of Rs 200 per order.
          </div>
        </div>
      </div>
      <img src={SW7} class="res-img" alt="" />
      <div class="container">
        <div class="m-75-95">
          <img src={SW7G} class="res-img" alt="" />
        </div>
      </div>
      <div class="container">
        <div class="m-95-95">
          <div class="text_header">Get me the food, wherever I am</div>
          <div class="text_content">
            In the old design, adding a new delivery address and managing
            existing addresses was manual and a pain which users had to go
            through for every order.
            <br />
            <br />
            For the background ops, Swiggy was already using LAT+LONG of
            restaurant and delivery locations. This ensured accuracy and
            streamlined the operations. However, in the consumer apps, we were
            still relying on manual text address inputs from our customers. This
            was leading to a lot of last-mile calls between delivery executives
            and customers, especially to pin-point the address.
            <br />
            <br />
            To eliminate this manual errors, we advocated for
            <span class="underline">
              auto-filling the address fields via google maps API
            </span>
            . This made the ‘add a new address flow’ more accurate and easy for
            the users to manage. Coupled with the training efforts, this
            accuracy further helped the logistics/operations teams to perform
            better, by eliminating many last mile phone calls between users,
            delivery personnel and Swiggy’s customer care.
          </div>
        </div>
      </div>
      <img src={SW8} class="res-img" alt="" />
      <div class="container">
        <div class="m-95-95">
          <div class="text_content">
            During user interviews, we observed that people think of delivery
            locations as “home” or “office” or “Friend’s house”.
            <br />
            This prompted us to design tags for delivery addresses allowing a
            more seamless and natural switch between locations.
            <br />
            We also observed that this made it easier for users to be sure of
            their current delivery location.
            <br />
            <br />
            Our incredible dev team also developed a feature logic, based on the
            GPS data and time of the day - the app automatically fetches the
            right address and gives the list of restaurants. Thereby eliminating
            manually choosing the address on every app launch.
            <br />
            <br />
            <br />
            <br />
            <div class="text_header">FUTURE TRACK</div>Since 2016, Swiggy has
            championed customer experience and scaled their food delivery
            business across major cities in India. With a focus on delighting
            their customers, they remain the leading startup/product in the food
            delivery sector. They have continued to build on the core value
            proposition and launched many successful initiatives like cloud
            kitchens(bowl company, homely) and Swiggy Pop, a food first approach
            that makes it even easier for the users to get food delivered ASAP.
          </div>
        </div>
        <a
          href="https://Ftechcrunch.com/2018/12/20/swiggy-raises-1-billion/"
          target="_blank"
          class="final_link"
          rel="noreferrer"
        >
          Food delivery startup Swiggy raises $1 billion more from Naspers,
          Tencent and others
        </a>
      </div>
    </div>
  );
}

export default Swiggy