import React from 'react';
import styled from "styled-components";

const Content = styled.div`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.text2};
  font-size: 17px;
  font-weight: 700;
`;
const sectionTitle = (props) => {
  return (
    <Content {...props}>{props.children}</Content>
  )
}

export default sectionTitle;