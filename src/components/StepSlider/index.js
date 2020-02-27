import React, { Fragment, useState, useEffect } from "react";
import { Box, Flex, Text } from "../../assets/ui";
import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledTextWrapper = styled.div`
  padding: 72px 35px 43px 23px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  letter-spacing: 0.1px;

  color: ${({ indicatorColor, theme }) =>
    indicatorColor === "greenWhite" ? "#233247" : "#a6b7d0"};
  @media (min-width: ${({ theme }) => theme.queries.sm}) {
    justify-content: flex-start;
    box-sizing: border-box;
    width: 50%;
    padding-left: 0px;
    margin-left: 40px;
    padding-right: 20px;
    max-width: 284px;
  }
  @media (min-width: ${({ theme }) => theme.queries.md}) {
    margin-left: 95px;
    padding-top: 131px;
  }
`;

const StyledImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  //background: red;
  //margin: 40px 0;
  & > img {
    width: 202px;
    height: 414px;
  }

  @media (min-width: ${({ theme }) => theme.queries.sm}) {
    width: 50%;
    margin: 40px 0;
    box-sizing: border-box;
    padding-left: 20px;
  }
  @media (min-width: ${({ theme }) => theme.queries.md}) {
    padding-left: 14.3%;
    justify-content: flex-start;
    & > img {
      width: 284px;
      height: 582px;
    }
  }
`;
const StyledIndicator = styled.div`
  //border: 1px solid #D5D5D5;
  width: 8px;
  height: 8px;
  //border-radius: 50%;
  @media (min-width: ${({ theme }) => theme.queries.sm}) {
    width: 25px;
    height: 25px;
  }
`;
const StyledIndicatorWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 430px;
  left: 50%;
  transform: translateX(-50%);
  & > li:not(:last-child):before {
  content: "";
  width: 12px;
  height: 1px;
  background: ${({ indicatorColor, theme }) =>
    indicatorColor === "greenWhite" ? "#E3E3E3" : theme.colors.white};
  position: absolute;
  left: 11px;
  top: 50%;
  border-radius: 2px;
  transform: translateY(-50%);
}
& > li {
    position: relative;
    border: 1px solid #D5D5D5;
    width: 8px;
    height: 8px;
    box-sizing: border-box;
    border-radius: 50%;
    margin: 0 10px;
    }
    & >.slick-active {
    background: ${({ indicatorColor, theme }) => theme.colors[indicatorColor]};
    border-color: ${({ indicatorColor, theme }) =>
      theme.colors[indicatorColor]};
    }
@media (min-width: ${({ theme }) => theme.queries.sm}) {
    display: flex;
    top: 20px;
    flex-direction: column;
    & > li {
    margin: 25px 0;
    width: 25px;
    height: 25px;
    }
    & > li:not(:last-child):before {
    width: 1px;
    height: 42px;
    left: 50%;
    top: 29px;
    transform: translateX(-50%);
    }
    }
}
`;
const StyledSliderWraper = styled.div`
  & .slick-vertical .slick-slide > div {
    display: flex;
    //padding: 40px 0;
  }
  @media (min-width: ${({ theme }) => theme.queries.sm}) {
    //background: linear-gradient(rgba(0, 0, 0, 0) 80%, #ffffff 200px);
    margin-bottom: -100px;
  }
`;

const StepSlider = ({ data, color }) => {
  const [loding, setOnLoaded] = useState(false);

  useEffect(() => {}, []);
  const settings = {
    dots: true,
    focusOnSelect: false,
    // vertical: true,
    // verticalSwiping: true,
    arrows: false,
    pauseOnHover: true,

    // fade: true,
    // draggable: true,
    speed: 1000,
    // rows: 2,
    // slidesPerRow: 2,
    // autoplay: true,
    appendDots: dots => {
      return (
        <StyledIndicatorWrapper indicatorColor={color}>
          {dots}
        </StyledIndicatorWrapper>
      );
    },
    customPaging: i => {
      return (
        <div>
          <StyledIndicator></StyledIndicator>
        </div>
      );
    },

    responsive: [
      {
        breakpoint: 600,
        settings: {
          // vertical: false,
          rows: 2,
          slidesPerRow: 1,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 5000,
        settings: {
          vertical: true,
          rows: 1,
          verticalSwiping: true,
          slidesToScroll: 1,
          // slidesToShow: 2,
          slidesPerRow: 2
        }
      }
    ]
  };

  return (
    <Fragment>
      <StyledSliderWraper>
        <Slider {...settings}>
          {data.map((el, index) => {
            console.log(index % 2, "images");
            return (
              <Fragment key={index}>
                {!(index % 2) ? (
                  <StyledImageWrapper justifyContent="center">
                    <img src={`./images/${el.image}`} alt="" />
                  </StyledImageWrapper>
                ) : (
                  <StyledTextWrapper indicatorColor={color}>
                    <Text
                      fontSize={["21px", null, null, null]}
                      marginBottom={["16px"]}
                      fontWeight="bold"
                      color={color === "greenWhite" ? "#233247" : "#EBF3FF;"}
                    >
                      {el.title}
                    </Text>
                    <Text>{el.description}</Text>
                  </StyledTextWrapper>
                )}
              </Fragment>
            );
          })}
        </Slider>
      </StyledSliderWraper>
    </Fragment>
  );
};

export default StepSlider;
