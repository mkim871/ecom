import React, { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const Thumbnail = (props: any) => {
  return (
    <a onClick={props.onClick}>
      {props.isReady ? (
        <img src={props.img} />
      ) : (
        <Skeleton variant="rect" width={"100%"} height={"100%"} />
      )}
    </a>
  );
};

export default Thumbnail;
