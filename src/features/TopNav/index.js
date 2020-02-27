import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as LogoMobileIcon } from "../../assets/icons/logo-mobile.svg";
import Theme from "../../assets/ui/theme";
import { display, position } from "styled-system";

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 23px 30px;
  @media (min-width: ${({ theme }) => theme.queries.md}) {
    justify-content: flex-start;
    padding: 26px 40px 30px;
  }
`;
const StyledNav = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 69px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    right: ${({ active }) => (active ? 0 : "-100vw")};
    // display: ${({ active }) => (active ? "block" : "none")};
    background: ${({ theme }) => theme.colors.darkBlue};
    
z-index: 1;
@media (min-width: ${({ theme }) => theme.queries.md}) {
    width: auto;
    height: auto;
    position: initial;
    flex-direction: row;
    background: none;
    padding: 0;
    margin-left: 10%;
    align-items: center;
  }
    `;
const StyledHamburger = styled.button`
background: none;
position: relative;
z-index: 1;
${display};
//height: 69px;
// border-left: 1px solid ${({ theme }) => theme.colors.silver};
//padding: 25px 22px 20px;

cursor: pointer;


    `;
const StyledWorkWithUs = styled.button`
  background: none;
  font-style: normal;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  border: 1.5px solid #ffffff;
  box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.06);
  border-radius: 22px;
  /* identical to box height, or 137% */
  padding: 11px 26px;
  text-align: center;
  box-sizing: border-box;
  @media (min-width: ${({ theme }) => theme.queries.md}) {
    margin-left: 65px;
  }
`;
const StyledNavLink = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  //cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ budgeColor }) => budgeColor};
    right: -5px;
    top: -5px;
  }

  @media (min-width: ${({ theme }) => theme.queries.md}) {
    margin: 0 20px;
  }
`;
const HamburgerIcon = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  // margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 1.8px;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: ${({ active }) => (active ? "7px" : 0)};
    transform: ${({ active }) => (active ? "rotate(135deg)" : "none")};
  }
  span:nth-child(2) {
    top: 7px;
    opacity: ${({ active }) => (active ? "0" : 1)};
    left: ${({ active }) => (active ? "-60px" : 0)};
  }
  span:nth-child(3) {
    top: ${({ active }) => (active ? "7px" : "14px")};
    transform: ${({ active }) => (active ? "rotate(-135deg)" : "none")};
  }
`;

const TopNav = () => {
  const [showNavSection, toggleTopNav] = useState(false);
  return (
    <StyledNavbar>
      <LogoIcon />
      {/*<LogoMobileIcon/>*/}
      <StyledNav active={showNavSection}>
        <StyledNavLink budgeColor={Theme.colors.mainPink}>
          Exportia.com
        </StyledNavLink>
        <StyledNavLink budgeColor={Theme.colors.mainGreen}>
          Venue management
        </StyledNavLink>
        <StyledNavLink budgeColor={Theme.colors.mainYellow}>
          Teacher&trainers
        </StyledNavLink>
        <StyledWorkWithUs>Work with us</StyledWorkWithUs>
      </StyledNav>
      <StyledHamburger
        onClick={() => toggleTopNav(!showNavSection)}
        display={["block", null, null, "none"]}
      >
        <HamburgerIcon active={showNavSection}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      </StyledHamburger>
    </StyledNavbar>
  );
};

export default TopNav;
