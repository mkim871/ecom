import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import { media } from "../../_styles/media";
import NavBarDrawer from "../../components/navBarDrawer/navBarDrawer";

const links = [
  {
    title: "Login",
    to: "/auth/signin",
  },
  {
    title: "Register",
    to: "/auth/register",
  },
  {
    title: "Lists",
    to: "/lists",
  },
];

const StyledH6 = styled.h6`
  margin: 0px;
  font-weight: 500;
  font-size: 20px;
  flex-grow: 1;
`;
const StyledDesktopButtonsContainer = styled.div`
  display: none;
  ${media.md`
    display: block;
  `}
`;
const StyledIconButton = styled(IconButton)`
  ${media.md`
     display: none;
  `}
`;

class NavBar extends React.Component {
  state = {
    isOpen: false,
  };

  onToggleDrawer(open: boolean) {
    return (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      this.setState({
        isOpen: open,
      });
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBarDrawer
          links={links}
          open={this.state.isOpen}
          toggleDrawer={(b) => this.onToggleDrawer(b)}
        />
        <AppBar position="static">
          <Toolbar>
            <StyledIconButton
              onClick={this.onToggleDrawer(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </StyledIconButton>
            <StyledH6>News</StyledH6>
            <StyledDesktopButtonsContainer>
              {links.map((link) => {
                return (
                  <Button
                    color="inherit"
                    key={link.to}
                    component={Link}
                    to={link.to}
                  >
                    {link.title}
                  </Button>
                );
              })}
            </StyledDesktopButtonsContainer>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default NavBar;
