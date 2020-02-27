import React from "react";
import { Box } from "../../assets/ui";
import StepSlider from "../../components/StepSlider"; 
import styled from "styled-components";

const sliderData = [
  { image: "slider-vms-1.png" },
  {
    title: "List your Home facility",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  },
  { image: "slider-vms-2.png" },
  {
    title: "List your Home facility",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  },
  { image: "slider-vms-3.png" },
  {
    title: "List your Home facility",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  },
  { image: "slider-vms-4.png" },
  {
    title: "List your Home facility",
    description:
      "Search sports or activities, Discover Venues, View classes and find personal trainers in your area and beyond"
  }
];

const StyledSectionWrapper = styled.div`
  background-image: url("./images/second-slider-line.png");
  background-repeat: no-repeat;
  background-position: 17% 50%;
  padding-bottom: 8px;
  & > h2 {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;

    color: #233247;
    padding: 0 10px;
    margin: 18px 0 31px;
  }
`;

const MobileVMS = () => {
  return (
    <StyledSectionWrapper>
      <h2>Mobile VMS - mangage on the go </h2>
      <StepSlider data={[...sliderData]} color="greenWhite" />
    </StyledSectionWrapper>
  );
};

export default MobileVMS;
