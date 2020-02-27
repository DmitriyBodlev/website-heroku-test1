import React, { Fragment } from "react";
import { Box, Flex } from "../../assets/ui";
import styled from "styled-components";
import { padding } from "styled-system";
import { ReactComponent as InCallIcon } from "../../assets/icons/incall.svg";
import { ReactComponent as OutCallIcon } from "../../assets/icons/outcall.svg";

const StyledSectionWrapper = styled.div`
  padding-top: 64px;
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    letter-spacing: 0.161738px;
    margin-bottom: 10px;
    color: #96a8be;
    padding: 0 18px;
  }
  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 80px;
    color: #233247;
    padding: 0 18px;
  }
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 6% 0 8%;

  & img {
    width: 51%;
    height: auto;
  }

  & .item-wrapper {
    display: flex;
    margin-bottom: 10px;
  }
  & .item-wrapper:last-child {
    flex-direction: row-reverse;
  }
`;

const StyledDescription = styled.div`
  //padding-top: 1px;
  display: flex;
  ${padding};
  flex-direction: column;
  & > h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 21.0538px;
    line-height: 21px;
    /* identical to box height, or 100% */
    margin: 19px 0 16px;

    color: #233247;
  }
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #586981;
  }
  & > span {
    margin-top: 47px;
    width: 40px;
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PrivateHosting = () => {
  return (
    <Fragment>
      <StyledSectionWrapper>
        <p>Playing sports and activities never easier</p>
        <h3>Mobile VMS for private hosting</h3>

        <StyledContentWrapper>
          <div className="item-wrapper">
            <img src="./images/private-hosting-1.png" alt="" />
            <StyledDescription padding={["0 0 0 16px"]}>
              <span>
                <OutCallIcon />
              </span>
              <h4>Outcall</h4>
              <p>
                Add cities and radiuses, show your clients how far you’ll go
              </p>
            </StyledDescription>
          </div>
          <div className="item-wrapper" flexDirection="row-reverse">
            <img src="./images/private-hosting-2.png" alt="" />
            <StyledDescription padding={["0 10px 0 0"]}>
              <span>
                <InCallIcon />
              </span>
              <h4>Incall</h4>
              <p>Set specific venues that you teach specific sports.</p>
            </StyledDescription>
          </div>
        </StyledContentWrapper>
      </StyledSectionWrapper>
    </Fragment>
  );
};

export default PrivateHosting;
