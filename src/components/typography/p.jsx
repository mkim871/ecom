import React from 'react';
import styled from "styled-components";

const Content = styled.p`
  margin: 0px 0px 15px;
  color: ${(props) => props.theme.colors.text4};
  line-height: 1.4;
  font-size: 16px;
  font-weight: 400;
`;
const p = (props) => {
  return (
    <Content {...props}>{props.children}</Content>
  )
}

export default p;