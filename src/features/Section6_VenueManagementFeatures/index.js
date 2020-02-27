import React from "react";
import { Box, Flex } from "../../assets/ui";
import { ReactComponent as VenueManagement1Icon } from "../../assets/icons/venue-managment1.svg";
import { ReactComponent as VenueManagement2Icon } from "../../assets/icons/venue-managment2.svg";
import { ReactComponent as VenueManagement3Icon } from "../../assets/icons/venue-managment3.svg";
import { ReactComponent as VenueManagement4Icon } from "../../assets/icons/venue-managment4.svg";
import { ReactComponent as VenueManagement5Icon } from "../../assets/icons/venue-managment5.svg";
import { ReactComponent as VenueManagement6Icon } from "../../assets/icons/venue-managment6.svg";
import { ReactComponent as VenueManagement7Icon } from "../../assets/icons/venue-managment7.svg";
import { ReactComponent as VenueManagement8Icon } from "../../assets/icons/venue-managment8.svg";
import { ReactComponent as VenueManagement9Icon } from "../../assets/icons/venue-managment9.svg";
import { ReactComponent as VenueManagement10Icon } from "../../assets/icons/venue-managment10.svg";
import { ReactComponent as VenueManagement11Icon } from "../../assets/icons/venue-managment11.svg";
import { ReactComponent as VenueManagement12Icon } from "../../assets/icons/venue-managment12.svg";
import styled from "styled-components";

const StyledTitle = styled.div`
  padding: 40px 24px 8px;
  & > h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 38px;
    color: #233247;
  }
  & > p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */

    padding-left: 16px;
    color: #586981;
    border-left: 3px solid #15ef81;
  }
`;
const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-top: 53px;
  color: #586981;
  padding: 0 18px;
  justify-content: space-between;

  & > p > span {
    margin-top: 20px;
  }
  & > p {
    width: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 42px;
  }
`;

const VenueManagement = () => {
  return (
    <Flex flexDirection="column">
      <StyledTitle>
        <h2>Exsportia Venue management</h2>
        <p>
          “With complete all-round customisations our software can be adapted to
          any sport and any environment.”
        </p>
      </StyledTitle>
      <StyledList>
        <p>
          <VenueManagement1Icon />
          <span>Members & subscriptions</span>
        </p>
        <p>
          <VenueManagement2Icon />
          <span>Real time Calendars</span>
        </p>
        <p>
          <VenueManagement3Icon />
          <span>Booking App</span>
        </p>
        <p>
          <VenueManagement4Icon />
          <span>Statements & Invoices</span>
        </p>
        <p>
          <VenueManagement5Icon />
          <span>Online Payments</span>
        </p>
        <p>
          <VenueManagement6Icon />
          <span>Availability</span>
        </p>
        <p>
          <VenueManagement7Icon />
          <span>24/7 Support</span>
        </p>
        <p>
          <VenueManagement8Icon />
          <span>Customisation</span>
        </p>
        <p>
          <VenueManagement9Icon />
          <span>Customer data</span>
        </p>
        <p>
          <VenueManagement10Icon />
          <span>Venue Automation</span>
        </p>
        <p>
          <VenueManagement11Icon />
          <span>Staff Accounts</span>
        </p>
        <p>
          <VenueManagement12Icon />
          <span>Account management</span>
        </p>
      </StyledList>
    </Flex>
  );
};

export default VenueManagement;
