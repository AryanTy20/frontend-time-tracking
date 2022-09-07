import { useState, useEffect, useRef } from "react";

import { ellipsis } from "../../../assets";

import "./style.scss";

const Card = ({ data, time }) => {
  return (
    <>
      <div className="card">
        <div className="top" style={{ backgroundColor: data.bg }}>
          <div className="icon">
            <img src={data.icon} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="header">
            <p>{data.title}</p>
            <img src={ellipsis} alt="" />
          </div>
          <div className="meta">
            <p>{data.timeframes[time].current}hrs</p>
            <p>Last Week - {data.timeframes[time].previous}hrs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
