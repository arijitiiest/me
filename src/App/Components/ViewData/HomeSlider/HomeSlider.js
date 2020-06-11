import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./HomeSlider.css";
import { homeData } from "../../../data/homeData";

const delay = 5000;
const lengthData = homeData.length;

const HomeSlider = (props) => {
  const ref = useRef(null);
  const [dataId, setDataId] = useState(0);

  useEffect(() => {
    const c = ref.current;

    /* Settings for Dots */
    var height = c.clientHeight;
    var width = c.clientWidth;
    c.width = width;
    c.height = height;
    var numDots = 50;
    var radius = width > 400 ? 3 : 1;
    var temp = (height * 1.0) / 10;
    var temp2 = Math.pow(temp, 2);

    var minDistance = width / 0.9;

    /* Array of Dots (Initialization) */
    var listOfDots = [];

    function reload() {
      height = window.innerHeight;
      width = window.innerWidth;
      c.width = width;
      c.height = height;
      temp = (height * 1.0) / 10;
      temp2 = Math.pow(temp, 2);
      listOfDots.length = 0;
      addDot();
    }

    reload();

    /* Moving Dots */
    var ctx = c.getContext("2d");

    let index = 0;
    let t = 2 * Math.PI;

    const timer = setInterval(function () {
      ctx.clearRect(0, 0, width, height);
      drawAllDots();
      drawAllLines();
      index += 10;
      t = (2 * Math.PI * index * 1.0) / 7500;
      index = index % 7500;
      if (listOfDots.length < numDots) {
        addDot();
      }
    }, 60);

    function addDot() {
      var rx = Math.floor(Math.random() * temp);
      var ry = Math.sqrt(temp2 - Math.pow(rx, 2));
      var x = Math.floor(
        Math.random() * (width - 2 * radius - 2 * rx) + radius + rx
      );
      var y = Math.floor(
        Math.random() * (height - 2 * radius - 2 * ry) + radius + ry
      );
      var dir = -1;
      if (Math.floor(Math.random() * 2) === 0) {
        dir = 1;
      }
      var speed = Math.floor(Math.random() * 2 + 2) * 2;

      listOfDots.push({
        x: x,
        y: y,
        cx: x,
        cy: y,
        rx: rx,
        ry: ry,
        speed: speed,
        dir: dir,
      });
    }

    function drawAllDots() {
      for (var i = 0; i < listOfDots.length; i++) {
        drawDot(listOfDots[i]);
      }
    }

    function drawAllLines() {
      for (var i = 0; i < listOfDots.length; i++) {
        for (var j = 0; j < listOfDots.length; j++) {
          if (i !== j) {
            const p1 = listOfDots[i];
            const p2 = listOfDots[j];
            var dist = Math.sqrt(
              Math.pow(p1.cx - p2.cx, 2) + Math.pow(p1.cy - p2.cy, 2)
            );

            if (dist < minDistance) {
              drawLine(listOfDots[i], listOfDots[j], dist);
            }
          }
        }
      }
    }

    function drawLine(p1, p2, dist) {
      var trans = 0.3 - (dist * 1.0) / minDistance;

      ctx.beginPath();
      ctx.moveTo(p1.cx, p1.cy);
      ctx.lineTo(p2.cx, p2.cy);
      ctx.closePath();

      ctx.strokeStyle = "rgba(150,150,150," + trans + ")";
      ctx.stroke();
    }

    function drawDot(p1) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(0,0,0,.3)";
      var newX = Math.floor(p1.x + p1.rx * Math.cos(t * p1.speed));
      var newY = Math.floor(p1.y + p1.ry * p1.dir * Math.sin(t * p1.speed));
      p1.cx = newX;
      p1.cy = newY;
      ctx.arc(newX, newY, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      document.getElementById("Slider").classList.remove("HiSlide");

      void document.getElementById("Slider").offsetWidth;

      document.getElementById("Slider").classList.add("HiSlide");
      setDataId((dataId + 1) % lengthData);
    }, delay);
    return () => clearInterval(timer);
  }, [dataId]);

  return (
    <div className="Hi">
      {/* <img src={background} className="back_img" alt="Background"></img> */}
      <canvas id="mycanvas" ref={ref}></canvas>

      <div className="HiSlide" id="Slider">
        {homeData[dataId].text1}
        <br />
        {homeData[dataId].text2} <br />
        <a href={homeData[dataId].link} className="homeDataLink">
          {homeData[dataId].linkText}
          <FontAwesomeIcon
            className="homeIcon"
            icon={homeData[dataId].icon}
            size="lg"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeSlider;
