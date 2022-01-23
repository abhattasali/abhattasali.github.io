import React, { Component } from "react";
import GHIcon from "./Images/Logos/gh_logo.png";
import IGIcon from "./Images/Logos/ig_logo.png";
import LNIcon from "./Images/Logos/linkedin_logo.png";
import EMIcon from "./Images/Logos/gmail_logo.png";
import "./CSS/IconBar.css";

class IconBar extends Component {
  render() {
    return (
      <div className="iconWrapper">
        <div className="iconBackground">
          <div className="textBody">
            <div className="title-box">
              <div className="mini-title">LET'S TALK</div>
            </div>
            <div className="heading-3 big">Connect with me here.</div>
          </div>
          <div className="iconBody">
            <ul>
              <li>
                <a href="https://www.instagram.com/thearunxb">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                  <span>
                    <div className="iconContent">
                      <div className="imageDeleted">
                        <img
                          src={IGIcon}
                          style={{ height: 40, width: 40 }}
                          alt="Instagram Icon"
                        />
                      </div>
                    </div>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://github.com/abhattasali">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                  <span>
                    <div className="iconContent">
                      <div className="imageDeleted">
                        <img
                          src={GHIcon}
                          style={{ height: 40, width: 40 }}
                          alt="Facebook Icon"
                        />
                      </div>
                    </div>
                  </span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/arunbhattasali/">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span>
                    <div className="iconContent">
                      <div className="imageDeleted">
                        <img
                          src={LNIcon}
                          style={{ height: 38, width: 38 }}
                          alt="LinkedIn Icon"
                        />
                      </div>
                    </div>
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:abhattasali@gmail.com">
                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                  <span>
                    <div className="iconContent">
                      <div className="imageDeleted">
                        <img
                          src={EMIcon}
                          style={{ height: 38, width: 43 }}
                          alt="Email Icon"
                        />
                      </div>
                    </div>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default IconBar;
