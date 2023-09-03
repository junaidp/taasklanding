import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { closeContactForm } from "../../features/appSlice";
import emailjs from "emailjs-com"; // Import EmailJS

export default function Contact() {
  const dispatch = useDispatch();
  const { contactForm } = useSelector((state) => state.store);

  const handleClose = () => {
    dispatch(closeContactForm());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm("service_rbsuhse", "template_m38uyjv", e.target, "nLSPfTxHc9lqKP_hy")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          handleClose(); // Close the dialog after a successful email submission
        },
        (error) => {
          console.error("Email sending failed:", error.text);
        }
      );
  };

  return (
    <div>
      <Dialog
        open={contactForm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialogBox"
      >
        <div style={{ background: "#F4FFFB" }}>
          <h1 id="alert-dialog-title" className="dialogBoxHeader">
            Contact Us
          </h1>
          <form onSubmit={sendEmail}>
            <div className="dialogBoxTextFieldsGrid">
              <div className="dialogBoxTextField">
                <p>First Name</p>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className="dialogBoxInput"
                />
              </div>
              <div className="dialogBoxTextField">
                <p>Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="dialogBoxInput"
                />
              </div>
              <div className="dialogBoxTextField">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="dialogBoxInput"
                />
              </div>
              <div className="dialogBoxTextField">
                <p>Number</p>
                <input
                  type="text"
                  name="number"
                  placeholder="123 456 7890"
                  className="dialogBoxInput"
                />
              </div>
            </div>
            <div className="contactBtn">
              <button type="submit" className="homeBtnCommon">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
