import React, { useState } from "react";
import SingleColor from "./SingleColor";
// this is API that generate colors
import Values from "values.js";

function App() {
  // this state need to save value from "INPUT" tag
  const [color, setColor] = useState("");
  // this state is to error
  const [error, sestError] = useState(false);
  // this list state is to save colors that generated from API
  const [list, setLilt] = useState(new Values("#3AB0FF").all(10));
  // console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    // "try" means try this block of code and if there is error the "catch" will hadle it
    try {
      // this is API that generate colors
      // colors is array
      let colors = new Values(color).all(10);
      // here we pass array of colors to useState
      setLilt(colors);
      // console.log(list);
    } catch {
      //  if  "try" gives erron than code inside "catch" will run
      sestError(true);
      console.log("error");
    }
  };

  return (
    <>
      {/* header section */}
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          {/* this is how we can get inputs' value. For that we need to use "onChange" attribute */}
          <input
            placeholder="#FF7396"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            // set dinamick class to this "input" tag
            // if "error" is true than class by the name of "erron" will be given to this tag
            className={`${error ? "error" : null}`}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      {/* body section */}
      <section className="colors">
        {list.map((color, index) => {
          // "{...color}" - this is how we passed in all the property from the item (this called "object spread operator")
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
