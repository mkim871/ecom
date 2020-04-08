import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Thumbnail from "./thumbnail/thumbnail";
import Arrow from "./arrow/arrow";

const carousel = (props: { imgs: string[]; config?: object }) => {
  const _config = {
    customPaging: function (i:number) {
      return <Thumbnail img={props.imgs[i]} />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb thumbnail-container",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow position="next" />,
    prevArrow: <Arrow position="prev" />
  };

  return (
    <div>
      <Slider {..._config}>
        {props.imgs.map((img, i) => {
          return <img src={img} key={i} />
        })}
      </Slider>
    </div>
  );
};

export default carousel;
