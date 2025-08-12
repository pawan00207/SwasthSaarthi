import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Faraway United Locust</title>
        <meta property="og:title" content="Faraway United Locust" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
              Get in touch with us for any inquiries
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text101">Book Appointment</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text102">/services</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">/home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text107">/contact</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Welcome to Swasth Saarthi - Your Health Companion
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
              Explore our range of healthcare services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text110">/about</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">About Us</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our mission and team
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">Learn More</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Get Started</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">Welcome to Swasth Saarthi</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Empowering rural and semi-urban communities with accessible and
              affordable healthcare through AI technology.
            </span>
          </Fragment>
        }
        image7Src="https://images.unsplash.com/photo-1584467735871-8e85353a8413?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxoZWFsdGglMjBjYXJlfGVufDB8fHx8MTc1NTAxNjkyMXww&amp;ixlib=rb-4.1.0&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxoZWFsdGglMjBjYXJlfGVufDB8fHx8MTc1NTAxNjkyMnww&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">Medicine delivery</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Medicine Delivery</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">Telemedicine consultations</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">AI Symptom Checker</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              AI-powered symptom checker for accurate health assessments
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Telemedicine Consultations</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxoZWFsdGglMjBjYXJlfGVufDB8fHx8MTc1NTAxNjkyMXww&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Join Swasth Saarthi today!</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Experience accessible and affordable healthcare at your
              fingertips.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Sign up now</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
              Have your prescribed medications delivered to your doorstep for
              convenience.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
              Quickly assess your symptoms and get recommendations for next
              steps.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Telemedicine Consultations</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">AI Symptom Checker</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Connect with healthcare professionals remotely for medical advice
              and prescriptions.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Medicine Delivery</span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGhlYWx0aHxlbnwwfHx8fDE3NTUwMTY5MDN8MA&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">Starting at $30/month</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Sign up now</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Basic plan</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Sign up now</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Enterprise plan</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Telemedicine consultations</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Telemedicine consultations</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$120/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Get started</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Sign up now</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">AI symptom checker</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">
              Mood-detecting mental wellness chatbot
            </span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Business plan</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Telemedicine consultations</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">AI symptom checker</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Business plan</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">Starting at $15/month</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$300/year</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Medicine delivery</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">$0/year</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">AI symptom checker</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">
              Mood-detecting mental wellness chatbot
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Get started</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">Starting at $0/month</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Enterprise plan</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text184">
              Create an account using your mobile number and basic details to
              access our telehealth services.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text185">
              Book a virtual appointment with a healthcare provider for a
              detailed diagnosis and treatment plan.
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text186">Use AI symptom checker</span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text187">
              Describe your symptoms to the AI-powered tool to receive
              preliminary health assessments.
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text188">
              Sign up on Swasth Saarthi platform
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text189">
              Schedule a telemedicine consultation
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text190">
              Get your prescribed medications delivered to your doorstep for
              convenience and timely treatment.
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text191">Receive medicine delivery</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Teacher</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Farmer</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text194">SanjeevPatel</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text195">Riya Singh</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text196">
              As a teacher in a remote village, accessing healthcare was always
              a challenge. Swasth Saarthi has made it convenient for me to seek
              medical advice and get prescriptions delivered to my doorstep. The
              mental wellness chatbot has also helped me manage stress better.
            </span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text197">Aditya Pratap Singh</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text198">Social Worker</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text199">Pawan Singh</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text200">
              Swasth Saarthi has been a lifesaver for me and my family. I can
              now consult with doctors without traveling long distances, saving
              time and money. The AI symptom checker is incredibly accurate, and
              the medicine delivery service is a blessing.
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text201">Local Shop Owner</span>
          </Fragment>
        }
        review1={
          <Fragment>
            <span className="home-text202">
              Swasth Saarthi has transformed healthcare access in my village. I
              can now connect with doctors without leaving my farm, saving both
              time and money. The platform’s accurate AI symptom checker and
              timely medicine delivery have been a true blessing for my family.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text203">Testimonials</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text204">
              I never thought I could receive quality healthcare services from
              the comfort of my shop until I discovered Swasth Saarthi. The
              telemedicine consultations have been prompt and effective, and the
              multi-language support is a game-changer for our community.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text205">
              Working with marginalized communities, I have seen firsthand the
              impact of Swasth Saarthi in bridging the healthcare gap. The
              platform&apos;s integration with government programs ensures that
              even the most vulnerable populations have access to essential
              medical services.
            </span>
          </Fragment>
        }
        author4Src="https://images.unsplash.com/photo-1743345358132-bc60a91716ea?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8fHwxNzU1MDEyNzc5fA&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Testimonial17>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text206">FAQs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text207">About Us</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text208">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text209">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text210">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text211">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text212">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text213">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
