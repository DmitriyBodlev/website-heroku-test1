import React from "react";
import { ReactComponent as LogoMobileIcon } from "../../assets/icons/logo-mobile.svg";
import styled from "styled-components";

const StyledFooter = styled.div`
  padding: 23px 8% 28px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > p:last-child {
    margin-top: 17px;
  }
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    letter-spacing: 0.0875px;

    color: #586981;
  }
  & span {
    font-weight: 600;
    color: #ed3163;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <LogoMobileIcon />
      </p>
      <p>
        <span>Privacy Policy</span>
      </p>
      <p>Copyright @ 2019-2020 Exsportia. All rights reserved</p>
    </StyledFooter>
  );
};

export default Footer;
