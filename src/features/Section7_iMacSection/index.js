import React from "react";
import styled from "styled-components";

const StyledSectionWrapper = styled.div`
  background: url("./images/mac-section-bg.png");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: 143% auto;
  background-repeat: no-repeat;
  //background-position: 50% 0;
  background-position-x: center;
  background-position-y: 0;
  padding-top: 40px;
  & > p {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.161738px;
    color: #96a8be;
    margin-top: 44px;
  }
  & > img {
    width: 78%;
  }
`;
const MacSection = () => {
  return (
    <StyledSectionWrapper>
      <img src="./images/mac.png" alt="" />
      <p>Playing sports and activities never easier</p>
    </StyledSectionWrapper>
  );
};

export default MacSection;
