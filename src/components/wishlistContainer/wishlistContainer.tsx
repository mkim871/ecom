import React from "react";
import _ from "lodash";
import { Item } from "../../_models/item";
import WishlistItem from "../wishlistItem/wishlistItem";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  min-width: 100%;
  margin-top: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledWishlistItem = styled(WishlistItem)`
  margin-right: 15px;
`;

const WishlistContainer = (props: {
  wishlist: any,
  isScrollView: boolean,
}) => {
  return (
    <StyledContainer>
      {props.wishlist
        ? _.values(props.wishlist).map((item) => {
            return <StyledWishlistItem item={item} key={item.id} />;
          })
        : null}
    </StyledContainer>
  );
};

export default WishlistContainer;
