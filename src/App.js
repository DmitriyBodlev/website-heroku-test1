import React, { Fragment } from "react";
import GlobalStyle from "./assets/ui/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "./assets/ui/theme";
import { Box, Flex } from "./assets/ui";
import styled from "styled-components";
import TopNav from "./features/TopNav";
import Banner from "./features/Section1_Banner";
import ExsportiaFeatures from "./features/Section2_ExsportiaFeatures";
import Cases from "./features/Section3_Cases";
import FindOpponent from "./features/Section3_FindOponent/info";
import VideoSection from "./features/Section_Video";
import VenueManagement from "./features/Section6_VenueManagementFeatures";
import VenueCalendar from "./features/Section5_VenueCalendar";
import MacSection from "./features/Section7_iMacSection";
import MobileVMS from "./features/Section8_MobileVMS";
import TeachersTrainersBanner from "./features/Section9_TeachersTrainersBanner";
import TeachersTrainersCases from "./features/Section10_TeachersTrainersCases";
import PrivateHosting from "./features/Section11_PrivateHosting";
import PrivateHostingFeatures from "./features/Section12_PrivateHostingFeatures";
import Contact from "./features/Section13_Contact";
import Footer from "./features/Footer";

const StyledIntroduseWrapper = styled.div`
  background: radial-gradient(
      100% 100% at 93.55% 94.42%,
      #ffffff 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    #233247;
  background-blend-mode: multiply, normal;
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledIntroduseWrapper>
          <Flex height="100vh" flexDirection="column" overflow="hidden">
            <TopNav />
            <Banner />
          </Flex>
          <ExsportiaFeatures />
        </StyledIntroduseWrapper>

        <Cases />
        <FindOpponent />
        <VideoSection />
        <VenueCalendar />
        <VenueManagement />
        <VideoSection />
        <MacSection />
        <MobileVMS />
        <TeachersTrainersBanner />
        <TeachersTrainersCases />
        <VideoSection />
        <PrivateHosting />
        <PrivateHostingFeatures />
        <Contact />
        <Footer />
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
