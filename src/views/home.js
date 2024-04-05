import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Timeline from '../components/timeline'
import TabSelector1 from '../components/tab-selector1'
import TabSelector2 from '../components/tab-selector2'
import TestimonialCard from '../components/testimonial-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Claim IT</title>
        <meta property="og:title" content="Claim IT" />
      </Helmet>
      <div className="home-fixednavbar-container">
        <Navbar
          id="fixed-navbar"
          rootClassName="navbar-root-class-name1"
        ></Navbar>
      </div>
      <Navbar
        id="static-navbar"
        rootClassName="navbar-root-class-name"
      ></Navbar>
      <main className="home-main">
        <div className="home-hero hero-container">
          <img alt="image" src="/logo/logo-navbar.svg" className="home-image" />
        </div>
        <div className="home-sub-hero">
          <div className="home-max-width">
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/sub-hero-1500w.webp"
              srcSet="/sub-hero-1500w.webp 1200w, /sub-hero-tablet.webp 800w, /sub-hero-mobile.webp 480w"
              className="home-image1"
            />
            <div className="home-container1">
              <h1 className="heading-1">
                <span>
                  Claim IT:
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Scaling Success for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Every Business Size.</span>
              </h1>
              <span>
                Whether you&apos;re a small startup or a large enterprise, Claim
                IT scales to meet your evolving needs. Gain insights that drive
                operational decisions, optimise resource utilisation, and
                enhance operational processes – all with the power of our
                next-gen Claim IT solution.
              </span>
            </div>
          </div>
        </div>
        <div className="home-benefits section-container">
          <div className="max-width-container">
            <h2 className="home-text07 heading-1">
              Unlock Success with Claim. Transform Your Company&apos;s Dynamic.
            </h2>
            <Timeline></Timeline>
          </div>
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <animate-on-reveal
              animation="fadeIn"
              duration="300ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-column">
                <img
                  alt="IconRelumeI312"
                  src="/external/iconrelumei312-qmeg.svg"
                  className="home-icon-relume"
                />
                <div className="home-content">
                  <span className="home-text08">Multi Tenant</span>
                  <span className="home-text09 TextRegularNormal">
                    Seamlessly extend your reach across Android, iOS, and web
                    platforms as Claim IT ensures secure, independent spaces for
                    each tenant through content sandboxing. Empower multiple
                    companies with the flexibility and reliability of Claim.
                  </span>
                </div>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeIn"
              duration="300ms"
              delay="0.3s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-column1">
                <img
                  alt="IconRelumeI312"
                  src="/external/iconrelumei312-ct0a.svg"
                  className="home-icon-relume1"
                />
                <div className="home-content01">
                  <span className="home-text10">Multi Roles</span>
                  <span className="home-text11 TextRegularNormal">
                    Claim embraces a multi-roles approach, acting as an umbrella
                    for practitioners, managers, and administrators. Tailored
                    functionalities ensure each user type efficiently manages
                    their responsibilities under a unified platform,
                    streamlining company operations.
                  </span>
                </div>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeIn"
              duration="300ms"
              delay="0.6s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-column2">
                <img
                  alt="IconRelumeI312"
                  src="/external/iconrelumei312-n9aa.svg"
                  className="home-icon-relume2"
                />
                <div className="home-content02">
                  <span className="home-text12">Security by design</span>
                  <span className="home-text13 TextRegularNormal">
                    Safeguard your operations with Claim IT&apos;s fortified
                    measures, including protected accounts with MFA, platform
                    RBAC, content sandboxing, cloud-native integration, robust
                    data encryption, and a regimen of regular security audits,
                    backups, and updates.
                  </span>
                </div>
              </div>
            </animate-on-reveal>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-width-container">
            <div className="home-content03">
              <h2 className="home-text14 heading-1">
                <span>
                  Streamline and organize your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>company with Claim</span>
              </h2>
              <span className="home-text18">
                Experience the efficiency of the Claim app in managing your
                business.
              </span>
              <div className="home-input-container">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <button
                  type="button"
                  className="home-button button button-primary"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="home-video-container">
              <video
                src
                loop="true"
                muted="true"
                poster="/placeholder%20lightbox-1500w.webp"
                preload="auto"
                autoPlay="true"
                controls="true"
                playsInline="true"
                className="home-video"
              ></video>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width4 max-width-container">
            <TabSelector1 rootClassName="tab-selector1-root-class-name"></TabSelector1>
            <TabSelector2 rootClassName="tab-selector2-root-class-name"></TabSelector2>
          </div>
        </div>
        <div className="home-testimonials section-container">
          <div className="home-max-width5 max-width-container">
            <div
              data-thq="slider"
              data-loop="true"
              data-autoplay="true"
              data-navigation="true"
              data-pagination="true"
              data-reverse-direction="true"
              className="home-slider swiper"
            >
              <div data-thq="slider-wrapper" className="swiper-wrapper">
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide swiper-slide"
                >
                  <TestimonialCard
                    rootClassName="testimonial-card-root-class-name"
                    avatarImageSrc="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxhdmF0YXJ8ZW58MHx8fHwxNzEyMzIyNjYwfDA&amp;ixlib=rb-4.0.3&amp;h=200"
                  ></TestimonialCard>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide1 swiper-slide"
                >
                  <TestimonialCard
                    content="Lorem ipsum dolor etcsa aiai ceva text care spune niste chestii foarte bune despre aplicatie"
                    avatarName="Jane Smith"
                    avatarCompany="CTO"
                    rootClassName="testimonial-card-root-class-name1"
                    avatarImageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhdmF0YXJ8ZW58MHx8fHwxNzEyMzIyNjYwfDA&amp;ixlib=rb-4.0.3&amp;h=200"
                  ></TestimonialCard>
                </div>
                <div
                  data-thq="slider-slide"
                  className="home-slider-slide2 swiper-slide"
                >
                  <TestimonialCard
                    avatarName="George Washington"
                    avatarCompany="Marketer, Google"
                    rootClassName="testimonial-card-root-class-name2"
                    avatarImageSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGF2YXRhcnxlbnwwfHx8fDE3MTIzMjI2NjB8MA&amp;ixlib=rb-4.0.3&amp;h=200"
                    companyLogoSrc="https://images.unsplash.com/photo-1586125674857-4eb86880905d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxnb29nbGV8ZW58MHx8fHwxNzEyMzIyNjc5fDA&amp;ixlib=rb-4.0.3&amp;h=200"
                  ></TestimonialCard>
                </div>
              </div>
              <div
                data-thq="slider-pagination"
                className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
              >
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
                <div
                  data-thq="slider-pagination-bullet"
                  className="swiper-pagination-bullet"
                ></div>
              </div>
              <div
                data-thq="slider-button-prev"
                className="swiper-button-prev"
              ></div>
              <div
                data-thq="slider-button-next"
                className="swiper-button-next"
              ></div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="max-width-container">
            <div className="home-faq-inner">
              <div className="home-heading-container">
                <h1>FAQs</h1>
              </div>
              <div className="home-questions">
                <div data-role="Accordion" className="home-question">
                  <div data-role="AccordionHeader" className="accordion-header">
                    <span className="home-text20">
                      How Can Claim Help Streamline Project Management?
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-type="AccordionArrow"
                      className="accordion-arrow"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <div
                    data-role="AccordionContent"
                    className="accordion-content"
                  >
                    <span className="home-text21">
                      <span>
                        An Editor is an invited account with editing role and
                        counts as a billable collaborator.
                      </span>
                      <br></br>
                      <span>
                        A Viewer is an invited account with no editing role and
                        it doesn’t count as a billable collaborator
                      </span>
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="home-question1">
                  <div data-role="AccordionHeader" className="accordion-header">
                    <span className="home-text25">
                      What Cost-saving Opportunities Does Claim Offer?
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-type="AccordionArrow"
                      className="accordion-arrow"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <div
                    data-role="AccordionContent"
                    className="accordion-content"
                  >
                    <span className="home-text26">
                      Based on his rights, a collaborator can be either free or
                      billable. If a collaborator has editing rights or is an
                      owner, it’s billable. If the collaborator is a viewer,
                      with view-only rights, it won’t be billed. This only
                      applies for the Professional Plan. All collaborators are
                      free on the Free Plan.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="home-question2">
                  <div data-role="AccordionHeader" className="accordion-header">
                    <span className="home-text27">
                      How Does Claim Ensure Data Security?
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-type="AccordionArrow"
                      className="accordion-arrow"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <div
                    data-role="AccordionContent"
                    className="accordion-content"
                  >
                    <span className="home-text28">
                      Collaborators can be invited to any individual project
                      with restricted access, while team members can be invited
                      on the team level and have access to all the team’s
                      projects.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="home-question3">
                  <div data-role="AccordionHeader" className="accordion-header">
                    <span className="home-text29">
                      Can Claim Adapt to Different Company Sizes?
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-type="AccordionArrow"
                      className="accordion-arrow"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <div
                    data-role="AccordionContent"
                    className="accordion-content"
                  >
                    <span className="home-text30">
                      <span>
                        Note that when collaborators are workspace
                        collaborators, they will access all projects within the
                        workspace and view the contents of all project pages.
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        To prevent collaborators to access sensitive or
                        confidential information, it’s a good idea to invite
                        collaborators to individual projects only. For example,
                        say you had two “people teams” within your workspace, a
                        marketing team, and a developers team. While it would be
                        a good idea to have two different projects designated
                        for each team, it might not be best to have each team be
                        able to view each other’s projects. This is where you
                        would set your collaborators to project collaborators
                        and not workspace collaborators.
                      </span>
                      <br></br>
                      <span></span>
                      <br></br>
                      <span>
                        Another good case would be if you are a legacy user of
                        Teleport, each of your migrated projects might have
                        specific collaborators you don’t want to share all of
                        the workspace contents.
                      </span>
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="home-question4">
                  <div data-role="AccordionHeader" className="accordion-header">
                    <span className="home-text40">
                      What Support Options are Available for Users?
                    </span>
                    <svg
                      viewBox="0 0 1024 1024"
                      data-type="AccordionArrow"
                      className="accordion-arrow"
                    >
                      <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                    </svg>
                  </div>
                  <div
                    data-role="AccordionContent"
                    className="accordion-content"
                  >
                    <span className="home-text41">
                      Yes, you can create multiple workspaces upgraded to a
                      Professional Plan. These plans however are purchased
                      individually.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-contact section-container">
          <div className="max-width-container">
            <div className="home-contact1">
              <div className="home-content04">
                <img
                  alt="IconenvelopeI524"
                  src="/external/iconenvelopei524-wdv.svg"
                  className="home-iconenvelope"
                />
                <div className="home-contact-info">
                  <div className="home-content05">
                    <span className="home-text42">Email</span>
                  </div>
                  <span className="home-text43 TextRegularLink">
                    daniel.mandea@mtdtechnology.net
                  </span>
                </div>
              </div>
              <div className="home-content06">
                <img
                  alt="IconphoneI524"
                  src="/external/iconphonei524-hmzt.svg"
                  className="home-iconphone"
                />
                <div className="home-contact-info1">
                  <div className="home-content07">
                    <span className="home-text44">Phone</span>
                  </div>
                  <span className="home-text45 TextRegularLink">
                    +40 754 783 362
                  </span>
                </div>
              </div>
              <div className="home-content08">
                <img
                  alt="IconmapI524"
                  src="/external/iconmapi524-1jy8.svg"
                  className="home-iconmap"
                />
                <div className="home-contact-info2">
                  <div className="home-content09">
                    <span className="home-text46">Office</span>
                  </div>
                  <span className="home-text47 TextRegularLink">
                    Cluj-Napoca, România Constantin Brâncuși 55-57-59
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="home-footer-container section-container">
        <footer className="home-footer">
          <div className="home-container2">
            <img
              alt="logo"
              src="/logo/logo-navbar.svg"
              className="home-image2"
            />
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-separator"></div>
          <div className="home-row">
            <span className="home-text48 TextSmallNormal">
              © 2024 ClaimIT. All rights reserved.
            </span>
            <div className="home-footer-links">
              <span className="home-text49 TextSmallLink">Privacy Policy</span>
              <span className="home-text50 TextSmallLink">
                Terms of Service
              </span>
            </div>
          </div>
        </footer>
      </div>
      <div>
        <div className="home-container4">
          <Script
            html={`<script>
  (function () {
    window.onscroll = () => onScroll();

    const doc = document.documentElement;
    const w = window;
    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;

    const onScroll = () => {
      curScroll = w.scrollY || doc.scrollTop;
      console.log(curScroll);
      if (curScroll > prevScroll) {
        direction = 2;
      } else if (curScroll < prevScroll) {
        direction = 1;
      }
      toggleHeaders(direction, curScroll);
      prevScroll = curScroll;
    };

    const toggleHeaders = (direction, curScroll) => {
      const fixedHeader = document.getElementById("fixed-navbar");
      const absoluteHeader = document.getElementById("static-navbar");
      if (!fixedHeader || !absoluteHeader) {
        return;
      }

      console.log(direction);
      if (direction === 2 && curScroll > 80) {
        fixedHeader.classList.add("show-fixed-navbar");
      } else {
        fixedHeader.classList.remove("show-fixed-navbar");
      }
    };
  })();
</script>

<style>
  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  .show-fixed-navbar {
    margin-top: 0 !important;
    display: flex;
    justify-content: center;
    animation: slide-down 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-animation: slide-down 420ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
