import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as ac from "./actions";
import Carousel from "../../components/carousel/carousel";
import H2 from "../../components/typography/h2";
import P from "../../components/typography/p";
import SectionTitle from "../../components/typography/sectionTitle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

interface MyProps {
  [any: string]: any;
}

const StyledCarousel = styled(Carousel)`
  background-color: ${(props) => props.theme.colors.whiteGrey};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Section = styled.div`
  padding: 5px 15px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FilledButton = styled(Button)`
  flex: 1;
`;

export class Item extends Component<MyProps> {
  componentDidMount() {
    this.props.onGetCurrentItem(this.props.match.params.id);
  }

  render() {
    return this.props.item.currentItem ? (
      <React.Fragment>
        <StyledCarousel
          imgs={[
            `https://picsum.photos/300/400?random=0`,
            `https://picsum.photos/300/400?random=1`,
            `https://picsum.photos/300/400?random=2`,
            `https://picsum.photos/300/400?random=3`,
          ]}
        />
        <Section>
          <H2>{this.props.item.currentItem.brand}</H2>
        </Section>
        <Section>
          <SectionTitle>Summary</SectionTitle>
          <ButtonsContainer>
            <FilledButton variant="contained" color="primary">
              Shop it
            </FilledButton>
            <IconButton
              color="primary"
              component="div"
            >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </ButtonsContainer>
        </Section>
        <Section>
          <SectionTitle>Description</SectionTitle>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iste eveniet nihil, minus deleniti voluptatum odio culpa nisi vero.
            Inventore hic nemo dolorem debitis tempora molestias ratione cumque
            tenetur corrupti!
          </P>
        </Section>
        <Section>
          <SectionTitle>Description</SectionTitle>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            iste eveniet nihil, minus deleniti voluptatum odio culpa nisi vero.
            Inventore hic nemo dolorem debitis tempora molestias ratione cumque
            tenetur corrupti!
          </P>
        </Section>
      </React.Fragment>
    ) : (
      <div></div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  item: state.item,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetCurrentItem: (id: any) => dispatch(ac.getCurrentItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
