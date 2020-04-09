import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import * as ac from "./actions";
import * as alertAc from "../Alert/actions";
import List from "../../components/list/list";
import { Item } from "../../_models/item";
import { media } from "../../_styles/media";
import wishlistService from '../../_services/wishlist.service';

interface CompProps {
  lists: any;
  onGetList: () => {};
  [any: string]: any;
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  ${media.lg`
    grid-template-columns: 1fr 1fr 1fr;
  `}
  ${media.lg`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}
`;

export class Lists extends Component<CompProps> {
  componentDidMount() {
    this.props.onGetList();
  }

  async wishlistHandler(item: Item) {
    if (this.props.auth.auth) {
      await wishlistService.add(this.props.auth.auth.uid, item);
      this.props.showAlert('Updated', `${item.model} has been added to wishlist.`, 'info');
    } else {
      this.props.showAlert(null, 'Please sign in first', 'info');
    }
  }

  render() {
    return (
      <Container>
        {this.props.lists.lists !== null ? (
          <ListContainer>
            {this.props.lists.lists.map((item: Item) => (
              <List
                key={item.id}
                item={item}
                addwishlist={() => this.wishlistHandler(item)}
              />
            ))}
          </ListContainer>
        ) : (
          <div>Loading</div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
    lists: state.lists,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetList: () => dispatch(ac.getLists()),
    showAlert: (title:string, message:string, severity:string) => dispatch(alertAc.show(title, message, severity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
