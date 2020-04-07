import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import * as ac from "./actions";
import List from "../../components/list/list";
import { Item } from "../../_models/item";
import { media } from "../../_styles/media";

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
const StyledList = styled(List)``;
export class Lists extends Component<CompProps> {
  componentDidMount() {
    this.props.onGetList();
  }

  render() {
    return (
      <Container>
        {this.props.lists.lists !== null ? (
          <ListContainer>
            {this.props.lists.lists.map((item: Item) => (
              <StyledList key={item.id} item={item} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
