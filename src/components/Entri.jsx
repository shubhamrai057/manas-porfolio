import React from 'react';
import EN1 from '../images/en_1.png';
import EN2 from '../images/en_2.png';
import EN3 from '../images/en_3.png';
import EN4 from '../images/en_4.png';
import EN5 from '../images/en_5.png';
import EN6 from '../images/en_6.png';
import EN7 from '../images/en_7.png';
import EN8 from '../images/en_8.png';
import EN9 from '../images/en_9.png';
import Gplay from '../images/gplay.svg';
import ENV1 from '../images/entri_1.mp4';
import ENV2 from '../images/entri_2.mp4';
import ENV3 from '../images/entri_3.mp4';
import ENV5 from '../images/entri_5.mp4';

function Entri() {
  return (
    <div>
      <div className="container">
        <div className="breadcrumbs">
          <span className="font-red">BRANDING</span>
          <span className="font-red">PRODUCT DESIGN</span>
          <span className="font-red">DESIGN MANAGEMENT</span>
        </div>
        <h1 className="pg_header">
          Affordable education &amp; upskilling for the next billion users.
        </h1>
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
              href="https://entri.me/"
              className="data"
              target="_blank"
              rel="noreferrer"
            >
              Entri
            </a>
          </div>
          <div className="desc">
            <div className="data">
              Scores of online learning startups have emerged in India in recent
              years to serve school-age students. More than 250 million students
              are enrolled across schools in urban and rural parts of the
              country.
              <br />
              <br />
              Most of these students, however, will either end up not getting
              their dream job — or based on their skills and India’s growing
              unemployment figures, a job altogether. There are about 400
              million people in India, or roughly a third of the country’s
              population, who are confronting a fundamental challenge:{" "}
              <span className="underline">Not able to speak English</span>, and
              lacking other skills that could prove crucial when applying for a
              job.
              <br />
              <br />
              Entri provides affordable, quality coaching &amp; educational
              tools to this marginalised sector of the Indian population,
              helping them excel at exams that would land them a job with state
              and federal governments. And it teaches them these courses in the
              language with which they are most comfortable.
            </div>
          </div>
        </div>
        <div className="product_hero">
          <iframe
            className="iframebox"
            src="https://www.youtube.com/embed/zDYozbFW68M"
            frameborder="0"
            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="text"
          ></iframe>
        </div>
        <div className="text_section rnd">
          <div className="text_header">RESEARCH &amp; CONTEXT</div>
          <div className="text_content">
            By mid 2017 the story of internet access in India was much
            different. The best of coaching and learning materials was not
            limited to colleges and premium coaching institutes anymore, all the
            teaching and learning was happening on youtube channels and
            whatsapp/telegram groups. Everyone owned a smartphone, and we
            started seeing a fundamental shift in learning patterns in the
            Indian audience. This usage of internet for learning has further
            skyrocketed since the COVID lockdowns began in March 2020.
            <br />
            <br />
            Entri first started by providing a database of questions for
            government recruitment exams in Malayalam (one of the south indian
            languages) . Presently, there are more than twenty lakh questions
            and over 10,000 videos on Entri in five different local languages.{" "}
            <span className="underline">
              Students who dropped out before high school or those who have
              already attained graduate-level degrees or have families, account
              for the vast majority of users of Entri
            </span>
            . These students are looking to crack entrance exams that guarantee
            them a secure job in the state and federal governments.
          </div>
        </div>
        <br />
        <div className="text_header font-red quote-text">
          Only 5% of all students in India are literate and proficient in
          English language; the rest 95% have been educated in one of the many
          Indian regional languages like Hindi, Kannada, Malayalam, Telugu,
          Tamil, etc.
          <br />
          <br />
          It’s ridiculous that economic opportunities are bottlenecked because
          of the medium of learning. Skills bringing employability shouldn’t
          require people to be proficient in English.
        </div>
      </div>
      <div className="container">
        <img src={EN1} className="res-img" alt="" />
      </div>
      <div className="container">
        <div className="m-95-95">
          <div className="text_content">
            In the begining of 2019, we had conducted multiple interviews across
            4 states with students preparing for govt. exams regarding their
            studying habits, learning material and the common issues they were
            facing with online learning. We observed that more than half of the
            students we{" "}
            <span className="underline">
              spoke to were proficient in Hindi and their native language but
              not English
            </span>
            . We also noted that many of the state govt. examinations are held
            both in English and native language, allowing these students the
            opportunity to attend the exams. However, every single existing
            online solution was delivering learning in English.
            <br />
            <br />A detailed study of other education products also revelead to
            us that all of them had the same content+pedagogy, syllabus,
            question banks and many students prefer{" "}
            <span className="underline">
              platforms only as a complementary tool
            </span>{" "}
            in their preparation. These two observations helped us hone in on
            themes around which we based the redesign. We hypothesised that all
            of the competitive advantage and USP of Entri was going to come from
            the{" "}
            <span className="underline">‘experience layer’ of the product</span>
            , in the way the content is packaged and delivered to each student
            in the form of personalised study plans.
          </div>
        </div>
      </div>
      <img src={EN2} className="res-img" alt="" />
      <div className="container">
        <div className="m-95-95">
          <div className="text_header">THE CHALLENGES</div>
          <div className="text_content">
            After the initial PMF, the team at Entri did extensive market
            analysis and research on existing learning products and found the
            following to be major paint points for students across India:
            <br />
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Most
            of the subscriptions offered were too steep in terms of pricing for
            the audience that’s trying to prepare for govt. jobs. Most of these
            students can afford not more than INR.500($7 USD) per month on
            online education.
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- More
            than 90% of the available online products offered learning materials
            and video classes in English. This proved to be a major deterrent
            for a majority share of Indian students. In our surveys, more than
            7/10 students clearly mentioned their ‘inability to understand
            english’ as a major huddle in their preparation.
          </div>
        </div>
        <div className="m-95-95">
          <div className="text_header">THE GOAL</div>
          <div className="text_content">
            The primary goal of our redesign was to re-think and improve the
            core learning experience within the Entri app. At the time, every
            new user who finished onboarding was expected to browse and find
            learning resources by themselves. This was causing a lot of users to
            use Entri only as a complementary tool in their preparation.{" "}
            <span className="underline">
              We wanted to design and build features that enabled students to
              prepare for their examination entirely on the Entri app
            </span>
            . This would further help us reach to the remote corners of India
            where students do not have access to coaching classes/colleges.
            <br />
            <br />
            Along with these, we also planned to do grounds up thinking in terms
            of brand and visual design for all of the content within Entri app.
            <span className="underline">
              We identified our unique positioning in terms of being a local
              language learning product spread across many different cultures
              within India
            </span>
            .
          </div>
        </div>
        <div className="challenge_box">
          <div className="box-typ1">
            <div className="text-right">
              <img src={EN3} alt="" />
            </div>
            <div className="box_desc">
              <div className="box_head">Home Screen - Before Redesign</div>
              <div className="box_copy">
                Once a new user was onboarded successfully, they were offered
                all of the learning resources at once and were expected to
                browse and prepare by themselves. This had led to poor
                activation rates across languages/regions.
              </div>
            </div>
          </div>
          <div className="box-typ1">
            <div className="text-right">
              <img src={EN4} alt="" />
            </div>
            <div className="box_desc">
              <div className="box_head">Explore Screen - Before Redesign</div>
              <div className="box_copy">
                One the explore screen, the team had chosen to showcase other
                govt. job platforms available on Entri. These made little sense
                to the students as more than 96% of them prepare and attempt for
                a single govt. exam.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="m-95-95">
          <div className="text_header">BRAND &amp; VISUAL DESIGN</div>
          <div className="text_content">
            The design team at Entri began talking to a lot of our paid users.
            We asked them questions around why they were choosing Entri for
            their learning and preparation and the observations led us to
            identify our unique positioning in the overall Indian Ed-tech
            market.
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="text_header font-red quote-text">
            Entri was the only online product that offered content and learning
            tools in non-english languages spoken by almost 400Million students
            across India.
            <br />
            <br />
            In our user interviews, we also observed that the learning+prep
            culture and habits also varied across regions within India and no
            ed-tech brand was speaking to these students on an emotional level.
          </div>
          <div className="text_content">
            We decided to do a complete visual re-design of{" "}
            <span className="underline">all content and learning features</span>{" "}
            within Entri to highlight the uniqueness of each of the regions and
            the languages those students spoke on a daily basis. We wanted the
            new visual language and interface elements to look attractive and
            trustworthy, persuading even the least-tech savvy users to feel
            comfortable and confident in their preparation.
          </div>
        </div>
      </div>
      <img src={EN5} className="res-img" alt="" />
      <br />
      <br />
      <img src={EN6} className="res-img" alt="" />
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div className="w-100">
              Redesigned onboarding in local languages and a much more
              personalised home screen filled with relevant learning content.{" "}
            </div>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source src={ENV1} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="container">
        <div className="m-95-95">
          <div className="text_content">
            As mentioned earlier, we also redesigned the core learning
            experience across the app. We wanted to take Entri app from a
            complementary tool towards being the only learning product a
            students needs.We planned to design and build features that enabled
            students to prepare for their examination entirely on the Entri app.
            Based on our research and product brainstorms, we narrowed down on a
            couple of comprehensive features that drew upon existing offline
            behaviours in learning.
            <br />
            <br />
            One of the primary reasons most surveyed students chose to attend
            paid coaching classes was the presense of a dedicated teacher and
            enforced structure to their learning/preparation.
          </div>
        </div>
      </div>
      <img src={EN7} className="res-img" alt="" />
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div className="w-100">
              Designed a Stories feature, which acts as a discovery channel for
              all users. The stories themselves contain Daily Tips &amp; Tricks,
              Spoken English basics and Editor posts about new course and exam
              launches.
            </div>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source src={ENV2} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="container">
        <div className="m-95-95">
          <div className="text_content">
            Another strong behavioural pattern we observed in offline learning
            and coaching classes was that of peer-to-peer learning and
            competing. As an effort to introduce similar behaviour within Entri,
            the design team along with the partnership of content team designed
            a feature we called SUPER QUIZ.
            <br />
            <br />
            Super Quiz allows any two Entri users to challenge each other in a
            short timed quiz about their favorite subjects.
          </div>
        </div>
      </div>
      <br />
      <br />
      <img src={EN8} className="res-img" alt="" />
      <div className="cat-videos">
        <div className="container">
          <div className="video-title">
            <div className="w-100"></div>
          </div>
          <video className="hero-video" autoPlay loop muted>
            <source src={ENV3} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="container">
        <div className="m-75-75">
          <div className="text_content">
            In the 3rd year of Entri, we were getting significant amount of
            requests from our paid users regarding the need for personalised,
            weekly mentorship and coaching program within Entri.
            <br />
            <br />
            While our existing content allowed students to begin their learning
            journey, they still faced significant hurdles during their
            preparation. Getting solutions to their doubts immediately,
            re-learning a concept to understand it thoroughly and the enforcing
            presence of a mentor during each stage of their learning were some
            of the solutions missing in Entri.
          </div>
        </div>
        <video className="hero-video" autoPlay loop muted>
          <source src={ENV5} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="m-95-95">
          <div className="entri-last">
            <div className="entri-left">
              <div className="count-section entri">
                <div className="diff-count">
                  <div className="count-top">+32%</div>
                  <span className="count-bottom">Day 1-3 Retention</span>
                </div>
                <div className="diff-count">
                  <div className="count-top">+40%</div>
                  <span className="count-bottom">Week 2 Retention</span>
                </div>
                <div className="diff-count">
                  <div className="count-top">1.5x </div>
                  <span className="count-bottom">Organic Revenue</span>
                </div>
                <div className="diff-count">
                  <div className="count-top">+60%</div>
                  <span className="count-bottom">New user activation</span>
                </div>
              </div>
              <div className="text_content">
                Entri was one of the few chosen products from India that
                recently got selected for the{" "}
                <span className="underline">
                  <strong>GLOBAL APPS MADE BY INDIANS</strong> award category
                  from the Google Playstore.
                </span>
                <br />
                <br />
                FUTURE TRACK
                <br />
                <br />
                In Feb 2020, Entri closed a $3.1 million Pre-Series A financing
                round, led by Good Capital.
                <br />
                <br />
                The team at Entri is gearing up to introduce 50 additional
                courses to the platform and reach 400M more users within India,
                Bangladesh and Pakistan.
                <br />
                <br />
                Entri’s revenues have surged 150% in the last three months and
                its annual recurring revenue (ARR) has reached $2 million. With
                a focus on guided, high-ticket offerings, the next aim is to
                scale Entri’s ARR to $10 million by this year.
              </div>
              <br />
              <br />
              <a
                className="downloads mb-0"
                href="https://play.google.com/store/apps/details?id=me.entri.entrime&amp;referrer=utm_source%3DEntri.app%2520Website%26utm_medium%3DGet%2520it%2520on%2520button%2520"
                target="_blank"
                rel="noreferrer"
                title="link"
              >
                <img src={Gplay} alt="" />
              </a>
            </div>
            <img src={EN9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entri