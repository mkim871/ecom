import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  color: ${(props) => props.theme.colors.text6};
  font-size: 16px;
  font-weight: 400;
`;
const h4 = (props) => {
  return (
    <Content {...props}>{props.children}</Content>
  )
}

export default h4;