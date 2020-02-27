import React from "react";
import { Box } from "../../assets/ui";
import styled from "styled-components";

const StyledVideoSection = styled.div`
  position: relative;
  & > button {
    position: absolute;
    top: 50%;
    left: 50%;
    background: none;
    font-weight: 600;
    font-size: 20px;
    color: #ffffff;
    transform: translate(-50%, -50%);
  }
`;
const VideoSection = () => {
  return (
    <StyledVideoSection>
      <button>PLAY</button>
      <img
        src="./images/video1.png"
        alt=""
        style={{ width: "100%", marginBottom: "-2px" }}
      />
    </StyledVideoSection>
  );
};

export default VideoSection;
