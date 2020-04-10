import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  color: ${(props) => props.theme.colors.text2};
  margin: 15px 0px;
  font-size: 26px;
  font-weight: 700;
`;
const h1 = (props) => {
  return (
    <Content {...props}>{props.children}</Content>
  )
}

export default h1;