import React, { Fragment } from "react";
import { Flex } from "../../assets/ui";
import styled from "styled-components";

import { ReactComponent as ChampionIcon } from "../../assets/icons/champion.svg";
import SliderSimple from "./slider";

const StyledIntroduseSection = styled.div`
  //background:
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("./images/find-opponent1.png");
  background-blend-mode: multiply, multiply, normal;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  padding-top: 119px;
  align-items: center;
  padding: 119px 16px 0;
  //margin-bottom: -113px;
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 14.6462px;
    line-height: 18px;

    color: #626f81;
    margin-bottom: 16px;
    margin-top: 32px;
  }

  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;

    margin-bottom: 154px;
  }
  & > img {
    margin-bottom: -113px;
    box-shadow: 0px 24px 46px rgba(0, 0, 0, 0.199574);
  }
`;

const StyledFindOpponent = styled.div`
  padding: 165px 24px 0;
  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 30px;

    color: #233247;
  }
`;

const StyledOpponentsList = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  padding-left: 27px;
  color: #233247;
  & > p {
    margin-bottom: 20px;
    position: relative;
  }

  & > p:before {
    content: "";
    position: absolute;
    top: 11px;
    width: 11px;
    height: 1.5px;
    left: -25px;
    background: #233247;
  }
`;

const StyledNetworkShop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  margin-bottom: 31px;
`;
const FindOpponent = () => {
  return (
    <Fragment>
      <StyledIntroduseSection>
        <ChampionIcon />
        <p>Opponents, Leagues and Tournaments </p>
        <h3>“Play people on your level, where you want, when you want”</h3>
        <img src="./images/find-opponent2.png" alt="" />
      </StyledIntroduseSection>
      <StyledFindOpponent>
        <h3>Exsportia’s Find Opponent®</h3>
        <StyledOpponentsList>
          <p>A revolution in amateur sports. Play opponents on your level.</p>
          <p>Join Teams, Create / manage tournaments and leagues.</p>
          <p>Get your ranking and get your sports lifestyle back.</p>
        </StyledOpponentsList>
        <StyledNetworkShop>
          <img src="./images/apple-store.png" alt="" />
          <img src="./images/google-play.png" alt="" />
        </StyledNetworkShop>
      </StyledFindOpponent>

      <SliderSimple />
    </Fragment>
  );
};

export default FindOpponent;
