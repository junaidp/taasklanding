import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";

const TimeLine = () => {
  return (
    <div className="timeLineMain">
      <h1>Our Timeline</h1>
      <p>
        Our journey from where it all started and where we aim to be in comming years.
      </p>

      <div className="timeline">
        <VerticalTimeline
          contentStyle={{ background: "red" }}
          className="costum-line"
          lineColor="#00CCB3"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work costum-line costum-line"
            date="January 2023"
            dateClassName="date1"
            iconClassName="icon1"
            position="right"
          >
            <div className="timelineWrapper">
              <h1>Traaak idea was created</h1>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2023"
            // iconStyle={{ background: "#C06EF3", color: "#C06EF3" }}
            position="left"
            dateClassName="date2"
            iconClassName="icon2"
          >
            <div className="timelineWrapper">
              <h1>Minimum Viable Product (MVP) produced</h1>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2023"
            // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            position="right"
            dateClassName="date3"
            iconClassName="icon3"
          >
            <div className="timelineWrapper">
              <h1>Short-term Next Steps - Customer Testing, iterations and more iterations</h1>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2024"
            // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            position="left"
            dateClassName="date1"
            iconClassName="icon1"
          >
            <div className="timelineWrapper">
              <h1>Medium-term next steps- soft launch with early adopting customers</h1>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024"
            // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            position="right"
            dateClassName="date2"
            iconClassName="icon2"
          >
            <div className="timelineWrapper">
              <h1>Long-term next steps - full launch and scaling</h1>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLine;
