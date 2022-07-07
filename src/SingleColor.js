import React, { useState, useEffect } from "react";
// this is function that transform rgb to Hex
// i can get ready functions from google
import rgbToHex from "./utils";

// "rgb and weight" coming from "{...color}"
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [copy, setCopy] = useState(false);
  // "rgb" coming from prop. And rgb is array but we need it as string so we convert it to string with mathod "join()" and seperate them with ","
  const background = rgb.join(",");
  //  this is function that transform rgb to Hex
  const hex = rgbToHex(...rgb);
  // this is how i can dinamicly add "#" to text
  const hexValue = `#${hexColor}`; // i dont using this. `` this called "Template string"
  // this useRffect to is to "disoiiring" text that apear when clicking on color to copy "rgb"
  useEffect(() => {
    const timeOut = setInterval(() => {
      setCopy(false);
    }, 3000);

    // this is cleanup function
    return () => {
      clearInterval(timeOut);
    };
  }, [copy]);
  return (
    <article
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(hex);
      }}
      // index means base color. SO if base color biger than 5 our text will have deff color
      className={`color ${index > 5 && "color-light"}`}
      // this is how we can set inline style
      style={{ backgroundColor: `rgb(${background})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {/* this is how we can set tag dinamicly */}
      {copy && <p className="alert">copied to clipbord</p>}
    </article>
  );
};

export default SingleColor;

// this is how we can set inline style
// style={{ backgroundColor: `rgb(${background})` }}

// i can get ready functions from google
