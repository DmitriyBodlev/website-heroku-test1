import React from "react";
import { Box, Flex, Text } from "../../assets/ui";
import styled from "styled-components";

const StyledSectionWrapper = styled.div`
  background: #ffffff;
  padding-top: 40px;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.queries.sm}) {
    //background: linear-gradient(rgba(0, 0, 0, 0) 80%, #ffffff 200px);
    //margin-bottom: -100px;
    padding-top: 50px;
  }

  @media (min-width: ${({ theme }) => theme.queries.sl}) {
    padding-top: 90px;
  }
  //position: relative;
`;
const StyledIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 62px;
  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;

    color: #ed3163;
    @media (min-width: ${({ theme }) => theme.queries.sm}) {
      position: absolute;
      //background: #09d3ac;
      top: 0;
      right: 4%;
    }
    @media (min-width: ${({ theme }) => theme.queries.sl}) {
      top: -60px;
      right: 0;
      min-width: 420px;
    }
  }
`;
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 0 24px;

  & > p {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 80px;
    color: #233247;
  }
  & > h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.161738px;
    margin-bottom: 18px;
    color: #96a8be;
  }
`;
const StyledImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 80px 4% 0;
  position: relative;
  //margin-bottom: -40px;
  max-width: 420px;
  margin: 0 auto -40px;
  //padding-top: 80px;
  //&>img:not(:nth-child(2)) {
  //width: 50%;
  //}
  & > img:nth-child(2) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const Cases = () => {
  return (
    <StyledSectionWrapper>
      <Flex flexDirection={["column", null, "row"]} alignItems={["center"]} position="relative" >
      {/*<Flex flexDirection={["column"]} alignItems={["center"]} position="relative" background={["red", "green", "yellow", "blue"]}>*/}
        <StyledIndicators>
          {/*<p>Classes</p>*/}
          <h3>Sports & Activities</h3>
          {/*<p>Leagues</p>*/}
        </StyledIndicators>

        <StyledDescription>
          <h4>Playing sports and activities never easier</h4>
          <p>
            “Discover whats in your area, compare venues, sports, facilities and
            price”
          </p>
        </StyledDescription>

        <StyledImageWrapper>
          <img src="./images/section3-1.png" alt="" />
          <img src="./images/section3-2.png" alt="" />
          <img src="./images/section3-3.png" alt="" />
        </StyledImageWrapper>
      </Flex>
    </StyledSectionWrapper>
  );
};

export default Cases;
