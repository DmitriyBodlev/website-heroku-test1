import React from "react";
import { Flex } from "../../assets/ui";
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
  margin-top: 19px;
  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;

    color: #f9d937;
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
    margin-bottom: 51px;
    color: #233247;
  }
  & > h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.161738px;
    margin-bottom: 8px;
    color: #96a8be;
  }
`;
const StyledInfo = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  padding-left: 16px;
  margin: 58px 18px 71px;
  color: #586981;
  border-left: 3px solid #f9d937;
`;
const StyledImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 13% 8% 10%;
  position: relative;
  //margin-bottom: -40px;
  max-width: 520px;
  //margin: 0 auto -40px;
  //padding-top: 80px;
  //&>img:not(:nth-child(2)) {
  //width: 50%;
  //}
  & > img {
    width: 41%;
    height: auto;
  }
  & > img:nth-child(2) {
    width: 46%;
    height: auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TeachersTrainersCases = () => {
  return (
    <StyledSectionWrapper>
      <Flex
        flexDirection={["column", null, "row"]}
        alignItems={["center"]}
        position="relative"
      >
        {/*<Flex flexDirection={["column"]} alignItems={["center"]} position="relative" background={["red", "green", "yellow", "blue"]}>*/}
        <StyledIndicators>
          {/*<p>Classes</p>*/}
          <h3>Sports & Activities</h3>
          {/*<p>Leagues</p>*/}
        </StyledIndicators>

        <StyledDescription>
          <h4>All your customers, bookings and money in one place</h4>
          <p>
            “Classes, Incalls and Outcalls, cancellations, itinary, exsportia
            does it all”
          </p>
        </StyledDescription>

        <StyledImageWrapper>
          <img src="./images/trainers-cases-1.png" alt="" />
          <img src="./images/trainers-cases-2.png" alt="" />
          <img src="./images/trainers-cases-3.png" alt="" />
        </StyledImageWrapper>

        <StyledInfo>
          “Personal Trainers and teachers can now use Exsportia’s technology to
          fully manage their careers.”
        </StyledInfo>
      </Flex>
    </StyledSectionWrapper>
  );
};

export default TeachersTrainersCases;
