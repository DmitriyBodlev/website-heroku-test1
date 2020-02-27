import React from "react";
import { Box, Button, Flex, PositionedFlex, Text } from "../../assets/ui";
import Theme from "../../assets/ui/theme";
import { alignItems, flexDirection, justifyContent } from "styled-system";
import styled, { keyframes } from "styled-components";
import { ReactComponent as Line1Icon } from "../../assets/icons/mobile-line-1-banner.svg";
import { ReactComponent as Line1DesktopIcon } from "../../assets/icons/desctop-line-1-banner.svg";
import { ReactComponent as Line2DesktopIcon } from "../../assets/icons/desctop-line-2-banner.svg";
import { ReactComponent as Line3DesktopIcon } from "../../assets/icons/desctop-line-3-banner.svg";
import { ReactComponent as Line2Icon } from "../../assets/icons/mobile-line-2-banner.svg";
import { ReactComponent as Line3Icon } from "../../assets/icons/mobile-line-3-banner.svg";
import { ReactComponent as PlayVideoIcon } from "../../assets/icons/play-video.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";

const showBannerLineDesctop = keyframes`
  from {
    right: -100%;
    opacity: 0;
  }

  to {
  opacity: 1;
    right: 0;
  }
`;
const StyledPlayButton = styled.button`
  background: ${({ theme }) => theme.colors.mainPink};
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  padding: 17px 41px 17px 30px;
  border-radius: 26px;
  cursor: pointer;
  text-transform: uppercase;
  //position: relative;
  display: flex;
  align-items: center;

  svg {
    margin-right: 20px;
  }
`;

const StyledLineIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: ${({ index }) =>
    index === 1 ? "158px" : index === 2 ? "100px" : "44px"};
  @media (min-width: ${({ theme }) => theme.queries.md}) {
    display: none;
  }
`;
const StyledLineDesktopIcon = styled.div`
  display: none;
  top: ${({ index }) =>
    index === 1 ? "0px" : index === 2 ? "150px" : "360px"};
  position: absolute;
  animation-name: ${showBannerLineDesctop};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-delay: ${({ index }) =>
    index === 1 ? "3s" : index === 2 ? "1.5s" : "0s"};
  right: -100%;
  animation-fill-mode: forwards;

  @media (min-width: ${({ theme }) => theme.queries.md}) {
    display: block;
  }
`;

const StyledBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  @media (min-width: ${({ theme }) => theme.queries.md}) {
    align-items: flex-start;
    padding-left: 6.7%;
    padding-top: 95px;
  }
`;
const BannerImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  background: url("./images/banner-run-man.png");
  mix-blend-mode: normal;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  //transform: scale(-1, 1);
  opacity: 0.5;
  transform: translate(-50%, -50%);
  //background-repeat: no-repeat;

  //transform: matrix(-0.99, -0.16, -0.16, 0.99, 0, 0);
  @media (min-width: ${({ theme }) => theme.queries.md}) {
    width: 37%;
    height: 100vh;
    transform: none;
    //right: 100px;
    top: 8%;
    left: 52%;
    //transform: none;
  }
`;

{
  /*banner-run-man.png*/
}
{
  /*<BannerImage/>*/
}
// desctop-line-1-banner.svg
const Banner = props => {
  return (
    <Flex
      height="100%"
      alignItems={["center", null, null, "flex-start"]}
      justifyContent="center"
    >
      <StyledBannerWrapper>
        <Flex
          fontWeight="bold"
          flexDirection="column"
          alignItems={["center", null, null, "flex-start"]}
          // marginTop={["76px", "76px", "76px", "76px"]}
          marginBottom={["66px", "66px", "66px", "66px"]}
          lineHeight={["42px", null, null, "72px"]}
          fontSize={["36px", null, null, "72px"]}
          color={Theme.colors.white}
        >
          <Text> We make sport</Text>
          <Text color={Theme.colors.mainPink}> accessible</Text>
          <Text> for everyone</Text>
        </Flex>
        <Box marginBottom={["91px", null, null, null]}>
          <StyledPlayButton
            background={Theme.colors.mainPink}
            color={Theme.colors.white}
          >
            <PlayVideoIcon />
            Play video
          </StyledPlayButton>
        </Box>
        <Text color={Theme.colors.silverWhite} fontSize="12px">
          Scroll down to see more <ArrowDownIcon />
        </Text>
      </StyledBannerWrapper>
      <StyledLineIcon index={1}>
        <Line1Icon />
      </StyledLineIcon>
      <StyledLineIcon index={2}>
        <Line2Icon />
      </StyledLineIcon>
      <StyledLineIcon index={3}>
        <Line3Icon />
      </StyledLineIcon>
      <StyledLineDesktopIcon index={1}>
        <Line1DesktopIcon />
      </StyledLineDesktopIcon>
      <StyledLineDesktopIcon index={2}>
        <Line2DesktopIcon />
      </StyledLineDesktopIcon>
      <StyledLineDesktopIcon index={3}>
        <Line3DesktopIcon />
      </StyledLineDesktopIcon>
      {/*banner-run-man.png*/}
      <BannerImage />
    </Flex>
  );
};

export default Banner;
