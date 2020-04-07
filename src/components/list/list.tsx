import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  IconButton,
} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Item } from "../../_models/item";
import numberFormat from "../../_helpers/numberFormat";

const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 200px;
  background-size: cover;
`;
const Brand = styled.h5`
  color: ${(props) => props.theme.colors.text2};
  margin: 0px;
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
  color: ${(props) => props.theme.colors.text2};
  font-size: 18px;
  font-weight: 600;
`;
const StyledIcon = styled(FavoriteBorderOutlinedIcon)`
  color: ${(props) => props.theme.colors.primary1};
`;
const InlineWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
`;

const List = (props: { item: Item; [key: string]: any }) => {
  return (
    <Card {...props}>
      <CardActionArea component={Link} to={`/lists/${props.item.id}`}>
        <StyledCardMedia
          image={`https://picsum.photos/300/400?random=${props.item.id}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Brand>{props.item.brand}</Brand>
          <Model>
            {props.item.year} {props.item.model}
          </Model>
          <InlineWrapper>
            <Price>
              <Currency>$</Currency>
              {numberFormat(props.item.price)}
            </Price>
            <StyledIcon />
          </InlineWrapper>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default List;
