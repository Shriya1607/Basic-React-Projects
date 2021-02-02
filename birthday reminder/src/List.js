import React from "react";

const List = (props) => {
  return (
    <>
      <article className="person">
        <img src={props.image} alt="" />
        <div>
          <h4> {props.name}</h4>
          <p> Age: {props.age} years</p>
          <p> Birthday: {props.date} </p>
        </div>
      </article>
    </>
  );
};

export default List;
