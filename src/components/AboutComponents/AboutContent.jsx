import React from "react";
import "./AboutContent.css";
import vBar from "../../assets/verticalBar.png";
import hBar from "../../assets/horizontalBar.png";
import base from "../../assets/aboutBase.png";
import about from "../../assets/about.png";

const AboutContent = () => {
  return (
    <div className="aboutBigMain">
      <div className="aboutContent">
        <h1>About Traaak</h1>
        <p>
        Traaak was created by individuals who are passionate about technology 
        and improvement of  customer experience and the idea was born because
        of challenges of using existing platforms to manage tasks related to the 
        post sales customer lifecycle. <br></br>
        <br></br>
        Our aim is to simplify the process of managing the activities related to a 
        post sales customer portfolio by bringing together the basic aspects of a 
        Customer Relationship Management and combining this with task 
        management tools allowing users to easily manage post-sales related 
        customer tasks and activities.
        </p>
      </div>
      <div className="aboutImageWrapper">
        <img src={base} className="aboutBase" />
        <img src={about} className="aboutImg" />
        <img src={vBar} className="aboutVBar" />
        <img src={hBar} className="aboutHbar" />
      </div>
      <div className="aboutContent">
        <strong><h1>Founders Bio</h1></strong>
        <h2>Kayode Olusegun</h2>
        <h3>Co-Founder</h3>
        <p>
        Kayode has over 14 years’ experience in the customer service space. His 
        passion lies with improvement of customer experience especially for the 
        after sales processes and how software technology can be used to solve 
        business challenges. <br></br>
        <br></br>
        Having worked in global corporate companies and Fintech he is now 
        bringing this knowledge and experience to building a platform that 
        supports the job of people in the post sales frontline. He holds an M.Sc. in 
        IT with E-business from the University of Greenwich
        </p>
      </div>
      <div className="aboutContent">
        <strong><h1>Founders Bio</h1></strong>
        <h2>Junaid Prachard</h2>
        <h3>Co-Founder</h3>
        <p>
        Junaid is a highly skilled software developer and architect with over 15 
        years experience in the industry. With a passion for technology and a deep 
        understanding of software development principles, Junaid has become a
         sought-after expert in their field. <br></br>
        <br></br>
        He is proficient in multiple programming languages, databases, and development
        tools, as well as having experience with software architecture design, 
        implementation, and maintenance. Throughout his career, Junaid has worked on a
        wide range of projects, from small-scale applications to complex 
        enterprise systems. He has a proven track record of delivering high-quality 
        solutions that meet or exceed client expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
