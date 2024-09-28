"use client";
import React, { useEffect, useState } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm Simran Tyagi",
    "Hi, I'm Simran Tyagi",
    "Hi, I'm Simran Tyagi",
  ];

  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(1);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current text being displayed
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }

      // If we go beyond the text length, reverse the direction
      if (endValue > texts[index].length + 10) {
        setIsForward(false);
      }

      // If we shrink back to the start, move to the next text
      if (endValue < 1) {
        setIsForward(true);
        setIndex((prev) => (prev + 1) % texts.length); // Cycle through texts
      }
    }, 50);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [endValue, isForward, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
