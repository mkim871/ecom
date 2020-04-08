import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import img from '../../logo.png';

const StyledDrawer = styled.div`
  width: 250px;
`;
const StyledLogo = styled.img`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const NavBarDrawer = (props: {
  links: { title: string; to: string }[];
  open: boolean;
  toggleDrawer: (b: boolean) => any;
  [any: string]: any;
}) => {
  const list = () => (
    <StyledDrawer
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <StyledLogo src={img} alt="Logo"/>
      <Divider />
      <List>
        {props.links.map((link, index) => (
          <ListItem button component={Link} to={link.to} key={index}>
            <ListItemText primary={link.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </StyledDrawer>
  );

  return (
    <React.Fragment>
      <Drawer
        anchor={"left"}
        open={props.open}
        onClose={props.toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default NavBarDrawer;
