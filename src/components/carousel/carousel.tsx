import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Thumbnail from "./thumbnail/thumbnail";
import Arrow from "./arrow/arrow";
import Skeleton from "@material-ui/lab/Skeleton";
import imgLoader from "../../_helpers/imgLoader";

const Carousel = (props: { imgs: string[]; config?: object }) => {
  const [imgReady, setImgReady] = useState(false);
  const _config = {
    customPaging: function (i: number) {
      return <Thumbnail img={props.imgs[i]} isReady={imgReady} />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb thumbnail-container",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow position="next" />,
    prevArrow: <Arrow position="prev" />,
  };

  imgLoader(props.imgs).then(() => {
    setImgReady(true);
  });

  return (
    <div {...props}>
      <Slider {..._config} className="custom-carousel">
          {props.imgs.map((img, i) => {
            return imgReady ? (
              <img src={img} key={i} />
            ) : (
              <Skeleton variant="rect" width={"100%"} height={400} key={i} />
            )
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
