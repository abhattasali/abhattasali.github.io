import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import "./CSS/Interests.css";
import skills from "./data/skills.js";
import emojiList from "./data/emojis.js";
import ScrollAnimation from "react-animate-on-scroll";

function Interest() {
  return (
    <section className="section contact" id="contact">
      <Container>
        <h1 className="interest-gradient-border ">TLDR.</h1>
        <h6>through my lens</h6>
        <Row className="contact-row">
          <Col lg="6" className="contact-col hobbies-container">
            <ScrollAnimation animateIn="bounceInLeft">
              <div className="activities">What I Like</div>
              <div className="hobbies">
                <br />
                <br />
                <h2>
                  {emojiList.map((emoji) => {
                    return (
                      <span key={emoji.id} role="img" aria-label={emoji.label}>
                        {emoji.symbol}
                      </span>
                    );
                  })}
                </h2>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg="6" className="contact-col offset-6">
            <ScrollAnimation animateIn="bounceInRight">
              <div className="activities">
                What I Do <br />
                <br />
              </div>
              <div className="skills-container">
                <div className="skills">
                  {skills.map((skills, index) => (
                    <div key={index}>
                      <h6>{skills.title}</h6>
                      <h2>
                        <MDBProgress>
                          <MDBProgressBar
                            width={skills.percentage}
                            valuemin={0}
                            valuemax={100}
                            style={{ background: "#98abc2" }}
                          />
                        </MDBProgress>
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Interest;
