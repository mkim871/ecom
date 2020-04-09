import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import styled from "styled-components";
import _ from "lodash";
import img from "../../logo.png";
import User from "../../_models/user";

const StyledDrawer = styled.div`
  width: 250px;
`;
const StyledLogo = styled.img`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

interface LinkType {
  type: string;
  title: string;
  [any: string]: any;
}

const NavBarDrawer = (props: {
  links: LinkType[];
  open: boolean;
  auth: User;
  toggleDrawer: (b: boolean) => any;
  [any: string]: any;
}) => {
  const FilteredList = (link: LinkType, key: number) => {
    if (props.auth && (link.onAuth !== undefined && !link.onAuth)) return null;
    if (!props.auth && link.onAuth) return null;
    if (link.type === "link") {
      return (
        <ListItem button key={key} component={Link} to={link.to}>
          <ListItemText primary={link.title} />
        </ListItem>
      );
    } else if (link.type === "action") {
      return (
        <ListItem button key={key} onClick={() => props.onAction(link.onClick)}>
          <ListItemText primary={link.title} />
        </ListItem>
      );
    }
    return null;
  };

  const list = () => (
    <StyledDrawer
      role="presentation"
      onClick={props.toggleDrawer(false)}
      onKeyDown={props.toggleDrawer(false)}
    >
      <StyledLogo src={img} alt="Logo" />
      <Divider />
      <List>
        {_.values(props.links).map((link, index) => FilteredList(link, index))}
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
