import React, { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import { Row, Col, Image } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import PFP from "./Images/fb_pfp.png";
import Resume from "./data/resume.pdf";
import "animate.css/animate.compat.css";
import "./CSS/Bio.css";

const wordsDisplay = [
  "Data-Driven.",
  "Problem Solver.",
  "Avid Learner.",
  "Curious.",
  "Detail-Oriented.",
  "Recovering Oreo-Addict.",
  "Storyteller.",
  "Data-Driven.",
  "Problem Solver.",
  "Avid Learner.",
  "Curious.",
  "Detail-Oriented.",
  "Recovering Oreo-Addict.",
];
let index = 0;

function Bio() {
  const [displayName, setDisplayName] = useState("Storyteller.");
  const intervalRef = useRef({});
  const name = useTypewriter(displayName);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > wordsDisplay.length ? 0 : ++index;
      setDisplayName(wordsDisplay[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [displayName]);

  return (
    <div className="section bio" id="bio">
      <h1>Bio</h1>
      <h6>introduction about myself</h6>
      <Row className="bio-row">
        <Col lg={8} className="bio-row">
          <ScrollAnimation animateIn="bounceInLeft">
            <h3>
              <div className="bio-description">
                <span className="display">{name}</span>
              </div>
            </h3>
            <p>
              Hello! I'm Arun Bhattasali, a recent graduate of UCLA with a major
              in Linguistics & Computer Science, and a soon-to-be PM @ Microsoft
              in Seattle.
            </p>
            <p>
              I was born in DC but lived in Beijing for the first 5 years of my
              life. I've been fascinated with technology since I was kid, and
              now immerse myself in all things digital since I love seeing the
              ground constantly shift beneath our feet.
            </p>
            <p>
              I emphasize big thinking in the tiny things, and believe in
              knowledge-sharing and community building. My goal is to view the
              world through the lens of the user, understanding their pain
              points to create more optimized experiences while iterating on
              solutions that bend towards elegant simplicity.
            </p>
            <p>
              Some of my past projects include an iOS app{" "}
              <a href="https://github.com/abhattasali/SnapStudy">SnapStudy</a>{" "}
              that creates a personalized set of flashcards by extracting
              keywords from text (OCR/NLP), as well as a product for overnight
              drivers called{" "}
              <a href="https://devpost.com/software/iawake">iAwake</a> that
              detects eye movement to recognize drowsiness and prevent sleeping
              at the wheel.
            </p>
            <p>
              Through these experiences, I've been able to grasp the product
              development lifecycle and think through the entire customer
              journey, while so too challenging our own assumptions.
            </p>
            <p>
              Download my resume{" "}
              <a href={Resume} download="Bhattasali_Arun_Resume">
                here.
              </a>
            </p>
          </ScrollAnimation>
        </Col>
        <Col lg={4} className="bio-col text-center">
          <ScrollAnimation animateIn="bounceInRight">
            <Image
              className="bio-image gradient-border -using-border-image -using-clip-path"
              src={PFP}
              thumbnail
              alt="aboutImage"
            />
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default Bio;
