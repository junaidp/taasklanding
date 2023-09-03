import React from "react";
import "./index.css";
import { Pricing } from "./data";
import tick from "../../assets/tick.png";
import swit from "../../assets/switch.png";

const PricingBody = () => {
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
          <img src={swit} />
          <p>Bill Annually (Annual with 10% discount)</p>
        </div>
      </div>
      <div className="pricingCards">
        {Pricing.map((item) => {
          return (
            <div className="pricingCard">
              <div className="pricingCardFlexFirst">
                <div>
                  <h1 className="pricingCardHead">{item.head}</h1>
                  <p className="pricingCardPara">{item.para}</p>
                </div>
                <div className="pricingAmountFlex">
                  <h1 className="pricingCardAmount">{item.amount}</h1>
                  <p className="pricingCardTime">{item.time}</p>
                </div>
              </div>

              <div className="pricingLine"></div>

              <div>
                {item.content.map((text) => {
                  return (
                    <div className="pricingTickFlex">
                      <div className="PritickBox">
                        <img src={tick} />
                      </div>
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>

              <button
                className={`${item.dark ? "activeBtnPricing" : "pricingBtn"}`}
              >
                {item.btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingBody;
