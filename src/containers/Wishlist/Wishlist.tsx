import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button } from "@material-ui/core";
import styled from "styled-components";
import _ from "lodash";
import List from "../../components/list/list";
import { Item } from "../../_models/item";
import { media } from "../../_styles/media";
import wishlistService from "../../_services/wishlist.service";
import H1 from "../../components/typography/h1";
import WishlistContainer from "../../components/wishlistContainer/wishlistContainer";
import * as ac from "../Auth/actions";
import User from "../../_models/user";

const StyledButtonsContainer = styled.div`
  display: flex;
  > button {
    margin-right: 15px;
  }
`;

export class Lists extends Component<{
  [any: string]: any;
}> {
  state = {
    isScrollView: true,
  };


  componentDidMount() {
    console.log('test');
  }
  

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return !_.isEqual(
      this.props.auth?.auth?.wishlist,
      nextProps.auth?.auth?.wishlist
    );
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // TODO Called twice
    wishlistService.getLatest(
      this.props.auth?.auth?.wishlist
    ).then((res) => {
      const wishlist = _.zipObject(_.map(res, 'id'), _.values(res));
      this.props.updateAuth({
        ...this.props.auth.auth,
        wishlist: wishlist,
      });
    })
  }

  render() {
    return (
      <Container>
        <H1>Wishlist</H1>
        <StyledButtonsContainer>
          <Button
            variant={this.state.isScrollView ? "contained" : "outlined"}
            color="primary"
            onClick={(e) => this.setState({ isScrollView: true })}
          >
            Carousel
          </Button>
          <Button
            variant={this.state.isScrollView ? "outlined" : "contained"}
            color="primary"
            onClick={(e) => this.setState({ isScrollView: false })}
          >
            List
          </Button>
        </StyledButtonsContainer>
        <WishlistContainer
          wishlist={this.props.auth?.auth?.wishlist}
          isScrollView={this.state.isScrollView}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateAuth: (auth: User) => dispatch(ac.updateAuth(auth)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
