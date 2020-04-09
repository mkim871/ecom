import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import { media } from "../../_styles/media";
import NavBarDrawer from "../../components/navBarDrawer/navBarDrawer";

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
// const StyledLogoContainer = styled.div`
//   flex: 1;
//   padding: 10px;
// `;
// const StyledLogo = styled.img`
//   height: 30px;
//   box-sizing: border-box;
// `;

class NavBar extends React.Component<{
  [any: string]: any;
}> {
  state = {
    isOpen: false,
    links: [
      {
        type: "link",
        title: "Lists",
        to: "/lists",
      },
      {
        type: "link",
        title: "Login",
        to: "/auth/signin",
        onAuth: false,
      },
      {
        type: "link",
        title: "Register",
        to: "/auth/register",
        onAuth: false,
      },
      {
        type: "action",
        title: "Sign out",
        onClick: "signout",
        onAuth: true,
      },
    ],
  };

  actionsHandler(type: string) {
    if (type === "signout") {
      console.log(type);
    }
  }

  FilteredList(link: any, key: number) {
    if (this.props.auth && link.onAuth !== undefined && !link.onAuth)
      return null;
    if (!this.props.auth && link.onAuth) return null;
    if (link.type === "link") {
      return (
        <Button color="inherit" key={key} component={Link} to={link.to}>
          {link.title}
        </Button>
      );
    } else if (link.type === "action") {
      return (
        <Button color="inherit" key={key} onClick={() =>this.actionsHandler(link.onClick)}>
          {link.title}
        </Button>
      );
    }
    return null;
  }

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
          links={this.state.links}
          open={this.state.isOpen}
          auth={this.props.auth}
          onAction={(type: string) => this.actionsHandler(type)}
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
            <StyledH6>Place holder</StyledH6>
            {/* <StyledLogoContainer>
              <StyledLogo src={img} alt="Logo" />
            </StyledLogoContainer> */}
            <StyledDesktopButtonsContainer>
              {this.state.links.map((link, index) => this.FilteredList(link, index))}
            </StyledDesktopButtonsContainer>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
