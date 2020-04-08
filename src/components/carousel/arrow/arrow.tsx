import React from "react";
import IconButton from "@material-ui/core/IconButton";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";
import styled from "styled-components";

interface ArrowProps {
  positon: string;
  [any: string]: any;
}

const StyledArrow = styled.div<ArrowProps>`
  position: absolute;
  ${(props) => (props.position === "next" ? "right: 0px;" : "left: 0px")};
  top: calc(50% - 50px);
  z-index: 10;
  svg {
    color: white;
    font-size: 30px;
  }
`;

const arrow = (props: any) => {
  return (
    <StyledArrow onClick={props.onClick} position={props.position}>
      <IconButton>
        {props.position === "next" ? (
          <NavigateNextRoundedIcon />
        ) : (
          <NavigateBeforeRoundedIcon />
        )}
      </IconButton>
    </StyledArrow>
  );
};

export default arrow;
