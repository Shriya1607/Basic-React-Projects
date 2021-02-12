import React from "react";
import Tour from "./Tour";
import data from "./data";

const Tours = () => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {data.map((tour) => {
            return <Tour {...tour} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
