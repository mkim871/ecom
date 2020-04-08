import React from "react";

const thumbnail = (props: any) => {
  return (
    <a onClick={props.onClick}>
      <img src={props.img} />
    </a>
  );
};

export default thumbnail;
