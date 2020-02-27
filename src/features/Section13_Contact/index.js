import React, { Fragment } from "react";
import styled from "styled-components";
import { Box, Flex } from "../../assets/ui";

const StyledContactFormWrapper = styled.div`
  padding: 40px 8%;
  & > h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    /* identical to box height */

    color: #233247;
  }
`;
const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  & > input,
  & > textarea {
    border: 1px solid #e5eced;
    box-sizing: border-box;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.06);
    border-radius: 2px;
    padding: 12px 16px 13px;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #586981;
  }
  & > button {
    background: #ed3163;
    border-radius: 26px;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    padding: 18px 18px 16px;
  }
  & > textarea {
    padding: 16px;
    height: 160px;
    resize: none;
  }
`;

const StyledContactMap = styled.div`
  & > h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 26px;
    /* identical to box height */
    padding: 24px 8% 32px;

    color: #233247;
  }
  & > img {
    width: 100%;
  }
`;
const StyledContactsContent = styled.div`
  padding: 0 8% 11px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(58, 79, 106, 0.1);
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    letter-spacing: 0.0875px;

    color: #586981;
  }
  & h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    /* identical to box height */

    color: #233247;
  }
`;
const Contact = () => {
  return (
    <Box>
      <StyledContactFormWrapper>
        <h2>Say hello!</h2>
        <StyledContactForm
          onSubmit={e => {
            e.preventDefault();
            console.log("sswswsw");
          }}
        >
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Your email" />
          <textarea placeholder="Message in free form"></textarea>
          <button type="submit">SEND</button>
        </StyledContactForm>
      </StyledContactFormWrapper>
      <StyledContactMap>
        <img src="./images/map.png" alt="" />
        <h3>Contacts</h3>
        <StyledContactsContent>
          <Box marginBottom={["32px"]} width={["50%"]}>
            <h5>Address</h5>
            <p>3 Habarzel Street Tel aviv Israel</p>
          </Box>
          <Box marginBottom={["32px"]} width={["50%"]} paddingLeft={["10px"]}>
            <h5>Phone</h5>
            <p>+44 (0)203 290 1106</p>
          </Box>
          <Box marginBottom={["32px"]} width={["50%"]}>
            <h5>Email</h5>
            <p>Go@exsportia.com</p>
          </Box>
        </StyledContactsContent>
      </StyledContactMap>
    </Box>
  );
};

export default Contact;
