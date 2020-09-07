import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  const [left, setLeft] = useState("0deg");
  const [right, setRight] = useState("0deg");

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const moveHandler = (e) => {
    const lx =
      leftRef.current.getBoundingClientRect().left +
      leftRef.current.clientWidth / 2;
    const ly =
      leftRef.current.getBoundingClientRect().top +
      leftRef.current.clientHeight / 2;
    const rx =
      rightRef.current.getBoundingClientRect().left +
      rightRef.current.clientWidth / 2;
    const ry =
      rightRef.current.getBoundingClientRect().top +
      rightRef.current.clientHeight / 2;

    const radianL = Math.atan2(e.pageX - lx, e.pageY - ly);
    const radianR = Math.atan2(e.pageX - rx, e.pageY - ry);

    const rotL = radianL * (180 / Math.PI) * -1 + 90;
    const rotR = radianR * (180 / Math.PI) * -1 + 90;

    setLeft(`rotate(${rotL}deg)`);
    setRight(`rotate(${rotR}deg)`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  });

  return (
    <div className="panda">
      <div className="ear left"></div>
      <div className="ear right"></div>
      <div className="eye left">
        <div
          style={{
            transform: left
          }}
          className="eye-roll"
          ref={leftRef}
        ></div>
      </div>
      <div className="eye right">
        <div
          style={{
            transform: right
          }}
          className="eye-roll"
          ref={rightRef}
        ></div>
      </div>
      <div className="nose">
        <FontAwesomeIcon className="icon" icon={faHeart} />
      </div>
      <div className="mouth"></div>
    </div>
  );
}
