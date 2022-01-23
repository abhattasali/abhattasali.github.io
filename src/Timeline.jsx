import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import workList from "./data/timeline.js";
import "./CSS/Timeline.css";

function Timeline() {
  return (
    <div>
      <div className="section project" id="project">
        <div>
          <div className="sectionTitle">
            <h1>
              Journey{" "}
              <span role="img" aria-label="rocket-ship">
                &#128640;
              </span>
            </h1>
            <h6>experiences & education</h6>
          </div>
          <VerticalTimeline>
            {workList.map(
              (project, index) =>
                (project.isWork && (
                  <VerticalTimelineElement
                    key={index}
                    contentStyle={{
                      ...project.contentStyle,
                      maxWidth: "550px",
                    }}
                    contentArrowStyle={{ ...project.contentArrowStyle }}
                    iconStyle={{ ...project.iconStyle }}
                    icon={project.icon}
                  >
                    <div className="gradient-border">
                      <p
                        className="project-labeltitle"
                        dangerouslySetInnerHTML={{ __html: project.label }}
                      />
                      <h3
                        className="project-labeltitle"
                        dangerouslySetInnerHTML={{ __html: project.title }}
                      />
                      <p
                        className="project-subtitle"
                        dangerouslySetInnerHTML={{ __html: project.subtitle }}
                      />
                    </div>
                    {/*<p
                  className="project-detail"
                  dangerouslySetInnerHTML={{ __html: project.detail }}
                /> 
                */}
                  </VerticalTimelineElement>
                )) ||
                (!project.isWork && (
                  <VerticalTimelineElement
                    key={index}
                    contentStyle={{
                      background: "#fff",
                      maxWidth: "550px",
                      borderTop: "5px Solid #fbc002",
                    }}
                    contentArrowStyle={{ borderLeft: "9px solid #3f73af" }}
                    date={project.date}
                    dateClassName="education-date"
                    iconStyle={{
                      background:
                        "radial-gradient(circle, rgba(251,203,49,1) 0%, rgba(255,246,0,1) 90%)",
                      color: "black",
                    }}
                    icon={<SchoolIcon />}
                  >
                    <div className="gradient-border">
                      <h3
                        className="project-labeltitle"
                        dangerouslySetInnerHTML={{ __html: project.event }}
                      />
                      <p
                        className="project-subtitle"
                        dangerouslySetInnerHTML={{ __html: project.detail }}
                      />
                    </div>
                  </VerticalTimelineElement>
                ))
            )}
            <VerticalTimelineElement
              iconStyle={{
                color: "white",
                background:
                  "-webkit-linear-gradient(top, #e72c83 0%,#a742c6 100%)",
              }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
