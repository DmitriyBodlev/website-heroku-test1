import React from "react";
import { Box, Flex } from "../../assets/ui";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const StyledSlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 32px;
  img {
    width: 57%;
  }
`;
const StyledSliderWrapper = styled.div`
  background: url("./images/find-opponents-line.png");
  background-repeat: no-repeat;
  background-position: 0 50%;
`;
const StyledDescriptionWrapper = styled.div`
  //margin-top: 40px;
  padding: 16px 16px 16px 14px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin: 40px 8px 0;
  min-height: 170px;
  box-sizing: border-box;

  & h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;

    color: #233247;
    margin-bottom: 10px;
  }
  & p {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    color: #233247;
  }
`;
// const StyledSlideWrapper = styled.div``;
// const StyledSlideWrapper = styled.div``;
const SliderSimple = () => {
  const settings = {
    dots: false,
    // focusOnSelect: false,
    arrows: false,
    pauseOnHover: true,
    // rows: 2,
    // slidesPerRow: 1,
    slidesToShow: 1,
    // autoplay: true,
    // autoplaySpeed: 3000
    speed: 1000,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "13px"
  };
  return (
    <StyledSliderWrapper>
      <Slider {...settings}>
        <StyledSlideWrapper>
          <Flex justifyContent={["center"]}>
            <img src="./images/slider2-1.png" alt="" />
          </Flex>
          <StyledDescriptionWrapper>
            <h3>Find opponents and partners</h3>
            <p>
              Our platform allows you to search, compare and invite other
              players/partners/opponents. Choose people on your level - split
              the cost.
            </p>
          </StyledDescriptionWrapper>
        </StyledSlideWrapper>
        <StyledSlideWrapper>
          <Flex justifyContent={["center"]}>
            <img src="./images/slider2-1.png" alt="" />
          </Flex>
          <StyledDescriptionWrapper>
            <h3>Find opponents and partners</h3>
            <p>
              Our platform allows you to search, compare and invite other
              players/partners/opponents. Choose people on your level - split
              the cost.
            </p>
          </StyledDescriptionWrapper>
        </StyledSlideWrapper>
        <StyledSlideWrapper>
          <Flex justifyContent={["center"]}>
            <img src="./images/slider2-1.png" alt="" />
          </Flex>
          <StyledDescriptionWrapper>
            <h3>Find opponents and partners</h3>
            <p>
              Our platform allows you to search, compare and invite other
              players/partners/opponents. Choose people on your level - split
              the cost.
            </p>
          </StyledDescriptionWrapper>
        </StyledSlideWrapper>
      </Slider>
    </StyledSliderWrapper>
  );
};

export default SliderSimple;
