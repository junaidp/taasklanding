import React, { useState } from "react";
import "./index.css";
import { Pricing } from "./data";
import tick from "../../assets/tick.png";
import swit from "../../assets/switch.png";
import { Switch } from "antd";

const PricingBody = () => {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="pricingMain">
      <div className="pricingContent">
        <h1 className="PriHeadMain">
          Manage your customer portfolio tasks more efficiently!
        </h1>
        <p className="preHeadPara">
          Our pricing aims to cater for relevant businesses at various stages and
          sizes and however if you are uncertain about which package works best
          for your company then you can try for a limited period, for free.
        </p>
        <div className="pricingBiling">
          <p>Bill Monthly</p>
          <Switch onClick={toggler} />
          <p>Bill Annually (Annual with 10% discount)</p>
        </div>
      </div>
      <div className="pricingCards">
        {Pricing.map((item, index) => (
          <div className="pricingCard" key={index}>
            <div className="pricingCardFlexFirst">
              <div>
                <h1 className="pricingCardHead">{item.head}</h1>
                <p className="pricingCardPara">{item.para}</p>
              </div>
              <div className="pricingAmountFlex">
                <h1 className="pricingCardAmount">
                  {toggle ? item.amount.monthly : item.amount.annual}
                </h1>
                <p className="pricingCardTime">{item.time}</p>
              </div>
            </div>
            <div className="pricingLine"></div>
            <div>
              {item.content.map((text, subIndex) => (
                <div className="pricingTickFlex" key={subIndex}>
                  <div className="PritickBox">
                    <img src={tick} alt="tick" />
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <button
              className={`${
                item.dark ? "activeBtnPricing" : "pricingBtn"
              } ${toggle ? "customTrueStyle" : ""}`}
            >
              {item.btn}
            </button>
          </div>
        ))}
      </div>
      <h3 className="CTA-Bottom">Please contact us to discuss bespoke pricing needs</h3>
    </div>
  );
};

export default PricingBody;
