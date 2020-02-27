import React from "react";
import { Box, Flex } from "../../assets/ui";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(156, 163, 173, 0.24);
  padding-bottom: 12px;
`;
const StyledTitle = styled.div`
  padding: 32px 16px 0px 24px;
  margin-bottom: 56px;
  & > p {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.161738px;
  }
  & > h3 {
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;
    /* or 125% */
    margin-top: 17px;

    color: #233247;
  }
  & span {
    color: #15ef81;
  }
`;
const StyledDescriptions = styled.div`
  padding: 0 16px 0 24px;

  & > p {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #233247;
  }
`;
const StyledImagesWrapper = styled.div`
  //margin-bottom: 43px;
  position: relative;
  width: 70%;
  margin: 0 auto 43px;
  & > img:first-child {
    width: 100%;
    height: auto;
  }
  & > img:last-child {
    position: absolute;
    width: 24%;
    top: 50%;
    transform: translateY(-50%);
    left: -11%;
  }
`;
const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const VenueCalendar = () => {
  return (
    <StyledWrapper>
      <StyledTitle>
        <p>
          <span>Venues</span>
        </p>
        <h3>
          “Going live on Exsportia’s network
          <span> brings new customers, more bookings and faster growth”</span>
        </h3>
      </StyledTitle>
      <StyledContentWrapper>
        <StyledDescriptions>
          <p>
            “Wether your a Multi sport facility or a private home, Our superior
            Management tool turns your sports and activities into profitable
            assets.{" "}
          </p>
          <p>
            Creating accessibility to Players means anyone can convert there
            empty space to sustainable income ”.
          </p>
        </StyledDescriptions>
        <StyledImagesWrapper>
          <img src="./images/venue-calendar1.png" alt="" />
          <img src="./images/venue-calendar2.png" alt="" />
        </StyledImagesWrapper>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default VenueCalendar;
