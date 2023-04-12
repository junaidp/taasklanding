import React from "react";
import "./Project.css";
import Img from "../../assets/project.png";
import Line from "../../assets/pLine.png";
import vBar from "../../assets/verticalBar.png";
import { useDispatch } from "react-redux";
import {openContactForm}  from "../../features/appSlice"

const Project = () => {
  let dispatch=useDispatch()
  return (
    <div className="projecrBigMain">
      <div className="projectMain">
        <img src={vBar} className="projectVBar" />
        <div className="projectContent">
          <h1 className="homeHead">Projects</h1>
          <p className="homePara">
            Manage your customer or non-customer related projects in one place,
            mapping them to your customer portfolio if this is required. Manage emails campaigns, service improvement plans and even
            internal projects relating to your job. Track and monitor progress,
            assign and receive tasks from team or project members.
          </p>
          <button className="homeBtnCommon" onClick={()=>dispatch(openContactForm())}>Book a Demo</button>
        </div>
        <div className="projectImage">
          <img src={Line} className="pLine" />
          <img src={Img} />
        </div>
      </div>
    </div>
  );
};

export default Project;
