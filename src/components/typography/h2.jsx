import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  color: ${(props) => props.theme.colors.text2};
  margin: 0px;
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 700;
`;
const h2 = (props) => {
  return (
    <Content {...props}>{props.children}</Content>
  )
}

export default h2;