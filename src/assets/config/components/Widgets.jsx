// src/components/Widgets.js
import React from "react";
import "./Widgets.css";
import ZAbutton from "./ZAbutton";
import { IoSettings } from "react-icons/io5";


function Widgets() {
  return (
    <>
      <div className="widgets ">
        <div className="widgets__suggestions">
            <div className="flex justify-between pb-4">
            <h6>Add to your Feed</h6>
            <span><IoSettings />
            </span>
            </div>
          <ZAbutton
            name="Basit Ahmed"
            company="Trainer : SMIT"
            img="https://avatars.githubusercontent.com/u/45896216?v=4"
          />
          <ZAbutton
            name="Zain ul Abedin"
            company="Student of SMIT"
            img="https://avatars.githubusercontent.com/u/147302681?v=4"
          />
          <ZAbutton
            name="Hassan Khan"
            company="Freind of SMIT"
            img="https://tse3.mm.bing.net/th?id=OIP.mLCJt6Dy2IA0RXkUDqlVwQHaHa&pid=Api&P=0&h=220"
          />
        </div>
        <div className="widgets__ads">
          <h4>Sponsored by:</h4>
          <p>code with Zainul.com</p>
       <div>
        <img src="https://tse4.mm.bing.net/th?id=OIP.oAQGcnP7tLvPcvE88T4bVQHaE8&pid=Api&P=0&h=220" alt="" />
       </div>
        </div>
      </div>
    </>
  );
}

export default Widgets;
