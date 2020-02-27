import React from "react";
import StepSlider from "../../components/StepSlider";
import { Box, Text } from "../../assets/ui";
import styled from "styled-components";
import { fontSize, lineHeight } from "styled-system";

const sliderData = [
  { image: "slider1-1.png" },
  {
    title: "Search",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  },
  { image: "slider1-2.png" },
  {
    title: "Search",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  },
  { image: "slider1-3.png" },
  {
    title: "Search",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  },
  { image: "slider1-4.png" },
  {
    title: "Search",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  }
];
const StyledSectionWrapper = styled.div`
  background-image: url("./images/first-slider-line.png");
  background-repeat: no-repeat;
  background-position: 0% 60%;
  //background-size: 100% auto;
  //margin-bottom: -300px!important;
`;
const StyledTitle = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.161738px;

  color: #96a8be;
  padding: 0 26px;
  text-align: left;
  margin-bottom: 10px;
  @media (min-width: ${({ theme }) => theme.queries.sm}) {
    text-align: center;
    max-width: 631px;
    margin: 0 auto;
  }
`;

const StyledDescriptions = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  padding: 0 26px;
  text-align: left;
  margin-bottom: 66px;

  color: #f3f8ff;
  @media (min-width: ${({ theme }) => theme.queries.sm}) {
    text-align: center;
    max-width: 650px;
    margin: 10px auto 40px;
    font-size: 32px;
    line-height: 40px;
  }
`;
// first-slider-line.png
const ExsportiaFeatures = () => {
  return (
    <StyledSectionWrapper marginTop={["54px"]}>
      <StyledTitle>Exsportia Application</StyledTitle>
      <StyledDescriptions
        fontSize={["28px", null, null, "32px"]}
        lineHeight={["35px", null, null, "44px"]}
      >
        “Exsportia makes 1000+ Sports and Activities bookable at your
        fingertips”
      </StyledDescriptions>
      <StepSlider data={[...sliderData]} color="mainPink" />
    </StyledSectionWrapper>
  );
};

export default ExsportiaFeatures;
