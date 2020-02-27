import React from "react";
import { ReactComponent as Benefits1Icon } from "../../assets/icons/benefits1.svg";
import { ReactComponent as Benefits2Icon } from "../../assets/icons/benefits2.svg";
import { ReactComponent as Benefits3Icon } from "../../assets/icons/benefits3.svg";
import { ReactComponent as Benefits4Icon } from "../../assets/icons/benefits4.svg";
import { Box, Flex } from "../../assets/ui";
import styled from "styled-components";

const StyledSectionWrapper = styled.div`
  padding: 0 6% 14px 8%;
  border-bottom: 1px solid rgba(58, 79, 106, 0.1);
  & > h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 18px;
    /* identical to box height */

    color: #233247;
  }
`;
const StyledBenefitsList = styled.div`
  & > .benefit span {
    min-width: 60px;
    padding-top: 8px;
  }
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #586981;
  }
  & h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    margin-bottom: 5px;

    color: #233247;
  }
  & > .benefit {
    display: flex;
    margin-bottom: 22px;
  }
`;
const PrivateHostingFeatures = () => {
  return (
    <StyledSectionWrapper>
      <h2>Benefits</h2>
      <Flex>
        <StyledBenefitsList>
          <div className="benefit">
            <span>
              <Benefits1Icon />
            </span>
            <Box>
              <h4>Cancellation Protection</h4>
              <p>
                Stop losing out from cancellations, choose from our 4 policies
              </p>
            </Box>
          </div>
          <div className="benefit">
            <span>
              <Benefits2Icon />
            </span>
            <Box>
              <h4>Personal booking App</h4>
              <p>Give your clients the ultimate bookig experience</p>
            </Box>
          </div>
          <div className="benefit">
            <span>
              <Benefits3Icon />
            </span>
            <Box>
              <h4>Availability</h4>
              <p>With live syncing you will only get booked when you want.</p>
            </Box>
          </div>
          <div className="benefit">
            <span>
              <Benefits4Icon />
            </span>
            <Box>
              <h4>Global network</h4>
              <p>
                Access a world of new customers by joing the exsportia network.
              </p>
            </Box>
          </div>
        </StyledBenefitsList>
        {/*<Box>ONLY DESCTOP CONTENT</Box>*/}
      </Flex>
    </StyledSectionWrapper>
  );
};

export default PrivateHostingFeatures;
