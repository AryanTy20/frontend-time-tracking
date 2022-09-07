import { useState, useEffect, useRef } from "react";
import "./style.scss";

import { Card } from "../Components";

import {
  exercise,
  play,
  selfCare,
  social,
  study,
  work,
  profilePic,
} from "../../assets";

const Tracking = () => {
  const [time, setTime] = useState("daily");

  const Data = [
    {
      title: "Work",
      bg: "hsl(15, 100%, 70%)",
      icon: work,
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      bg: "hsl(195, 74%, 62%)",
      icon: play,
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      bg: "hsl(348, 100%, 68%)",
      icon: study,
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      bg: "hsl(145, 58%, 55%)",
      icon: exercise,
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      bg: "hsl(264, 64%, 52%)",
      icon: social,
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      bg: "hsl(43, 84%, 65%)",
      icon: selfCare,
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];
  return (
    <>
      <div className="tracking">
        <div className="container">
          <div className="profile">
            <div className="top">
              <div className="pic">
                <img src={profilePic} alt="" />
              </div>
              <div className="meta">
                <p>Report for</p>
                <p>Jeremy Robson</p>
              </div>
            </div>
            <div className="bottom">
              <p
                className={time == "daily" ? "active" : ""}
                onClick={(e) => setTime(e.target.textContent.toLowerCase())}
              >
                Daily
              </p>
              <p
                className={time == "weekly" ? "active" : ""}
                onClick={(e) => setTime(e.target.textContent.toLowerCase())}
              >
                Weekly
              </p>
              <p
                className={time == "monthly" ? "active" : ""}
                onClick={(e) => setTime(e.target.textContent.toLowerCase())}
              >
                Monthly
              </p>
            </div>
          </div>

          {Data.map((item, i) => (
            <Card data={item} time={time} key={i} />
          ))}
          {/* <div className="activity">
            {Data.map((item, i) => (
              <Card data={item} time={time} key={i} />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Tracking;
