import React from "react";
import styled from "styled-components";
import { Item } from "../../_models/item";
import { media } from "../../_styles/media";
import numberFormat from "../../_helpers/numberFormat";
import { Link } from "react-router-dom";

const StyledImage = styled.img`
  height: 320px;
  border-radius: 10px;
`;
const Brand = styled.h5`
  color: ${(props) => props.theme.colors.text2};
  margin: 10px 0px 0px;
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 700;
`;
const Model = styled.div`
  color: ${(props) => props.theme.colors.text6};
  font-size: 16px;
  font-weight: 400;
`;
const Currency = styled.span`
  margin-right: 3px;
  font-size: 90%;
  font-weight: 500;
  vertical-align: top;
  color: ${(props) => props.theme.colors.primary};
`;
const Price = styled.div`
  margin: 10px 0px;
  color: ${(props) => props.theme.colors.text2};
  font-size: 20px;
  font-weight: 600;
  ${media.md`
    font-size: 22px;
 `};
`;

const wishlistItem = (props: { item: Item; [any: string]: any }) => {
  return (
    <div {...props}>
      <Link to={`/lists/${props.item.id}`}>
        <StyledImage
          src={`https://picsum.photos/300/400?random=${props.item.id}`}
          alt="Main"
        />
      </Link>
      <Brand>{props.item.brand}</Brand>
      <Model>
        {props.item.year} {props.item.model}
      </Model>
      <Model>
        Added on: {new Date(props.item.createdAt.toDate()).toLocaleDateString("en-US")}
      </Model>
      <Price>
        <Currency>$</Currency>
        {numberFormat(props.item.price)}
      </Price>
    </div>
  );
};

export default wishlistItem;
