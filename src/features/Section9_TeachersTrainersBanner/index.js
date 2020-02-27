import React from "react";
import styled from "styled-components";
//
const StyledSectionWrapper = styled.div`
  background-image: url("./images/teachers-trainers-bg.png");
  background-repeat: no-repeat;
  background-position: 47% 0;
  padding: 171px 24px 0;
  display: flex;
  flex-direction: column;
  //padding-bottom: 8px;
  & > p {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.161738px;
    margin-bottom: 17px;
    color: #fbbb17;
  }
  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    /* or 125% */
    margin-bottom: 128px;

    color: #ffffff;
  }

  & span {
    color: #fbbb17;
  }

  & img {
    width: 100%;
    height: auto;
    box-shadow: 0px 24px 46px rgba(0, 0, 0, 0.199574);
  }
`;
const TeachersTrainersBanner = () => {
  return (
    <StyledSectionWrapper>
      <p>
        <span>Teacher trainers manegmanet</span>
      </p>
      <h3>
        “The First of its kind Teacher
        <span> trainer managment system”</span>
      </h3>
      <img src="./images/teachers-trainers.png" alt="" />
    </StyledSectionWrapper>
  );
};

export default TeachersTrainersBanner;
