import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../../components/styles/TextStyles"

import Iphone from "../devices/Iphone.js"
import GithubButton from "../../components/buttons/GithubButton"
import VideoButton from "../../components/buttons/VideoButton"
import ProcessButton from "../../components/buttons/ProcessButton"
import ThreeProcessButtonSet from "../../components/buttons/ThreeProcessButtonSet.js"

import { AnchorLink } from "gatsby-plugin-anchor-links"

import { IphoneSectionText } from "../../components/constants.js"
import {
  BeaconDevice,
  BeaconPlaceholder,
} from "../../components/styles/IphoneStyles.js"

export default function IphoneSection() {
  const [state, setState] = useState(1)
  const [loads, setLoads] = useState(1) //To make sure animation is not being reloaded

  //Conditionally renders the description based on the state change passed from props
  const renderDescription = () => {
    if (state == 1) {
      return <Description>{IphoneSectionText.state1_description}</Description>
    } else if (state == 2) {
      return <Description>{IphoneSectionText.state2_description}</Description>
    } else if (state == 3) {
      return <Description>{IphoneSectionText.state3_description}</Description>
    } else {
      setState(1)
    }
  }

  const renderBeacon = () => {
    if (state != 1) {
      return (
        <BeaconImg
          className="beacon"
          src="/images/devices/Beacon.svg"
          alt="Beacon"
        />
      )
    } else {
      return (
        <BeaconOpaque
          className="beacon"
          src="/images/devices/Beacon.svg"
          alt="Beacon"
        />
      )
    }
  }

  return (
    <Wrapper id="iphone">
      <ContentWrapper>
        <IphoneColumn>
          <Title>iPhone App</Title>
          <Iphone
            state={state}
            loads={loads}
            changeState={state => setState(state)}
          />
        </IphoneColumn>
        <ContentColumn>
          {renderBeacon()}
          {renderDescription()}
          <ThreeProcessButtonSet
            class="processbuttons"
            type="dark"
            state={state}
            changeState={state => setState(state)}
            changeLoads={loads => setLoads(loads)}
          />
          <LinkButtons>
            <GithubButton
              type="light"
              url="https://github.com/wendellrodrigues/projectretail"
            />
            <VideoButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
          </LinkButtons>
        </ContentColumn>
      </ContentWrapper>
      <NextPageWrapper>
        <AnchorLink to="projectretail/#ipad">
          <NextPage>Continue</NextPage>
        </AnchorLink>
      </NextPageWrapper>
    </Wrapper>
  )
}

//Fade in animations
const fadeIn = keyframes`
  0% { opacity: 0.1;  }
  100% { opacity: 1; }
`

const fadeOut = keyframes`
  0% { opacity: 1;  }
  100% { opacity: 0; }
`

const Wrapper = styled.div`
  padding: 80px 0px 20px 0px;
  display: grid;
  background: white;
  height: auto;
  overflow: hidden; //Clip the overflow content

  @media (max-width: 1100px) {
    padding: 90px 0px 20px 0px;
  }

  //Switches to one column when small screen
  @media (max-width: 880px) {
    padding: 0px 0px 0px 0px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 70px 0px 0px 0px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
  margin-bottom: 220px;

  @media (max-width: 1100px) {
    gap: 30px;
  }

  //Switches to one column when small screen
  @media (max-width: 880px) {
    grid-template-columns: auto;
    gap: 40px;
    margin-bottom: 50px;
  }

  //Tablets
  @media (max-width: 588px) {
    margin-bottom: 70px;
    gap: 70px;
  }

  @media (max-width: 400px) {
    gap: 30px;
    margin-bottom: 50px;
  }
`

const IphoneColumn = styled.div`
  position: relative;
  margin: auto;
  display: grid;
  gap: 40px;
  padding-right: 40px;

  @media (max-width: 1100px) {
    padding-left: 50px;
  }

  @media (max-width: 880px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`

const Title = styled(H1)`
  margin: auto;
  color: black;
`

const ContentColumn = styled.div`
  //margin: auto;
  display: grid;
  //justify-items: start;
  align-content: end;
  gap: 40px;
  min-width: 400px;

  .beacon {
    justify-self: center;
  }

  @media (max-width: 1100px) {
    margin-right: 50px;
  }

  @media (max-width: 880px) {
    justify-self: center;
    margin-right: 0px;
    margin-left: 50px;
    margin-right: 50px;
    min-width: 0px;
  }
`

const Description = styled(MediumText)`
  //max-width: 847px;
  color: black;
  margin: auto;
  min-height: 125px;
  max-width: 700px;
  //padding: 30px;

  @media (max-width: 1100px) {
    max-width: 500px;
  }

  @media (max-width: 880px) {
    margin-top: -30px;
  }

  //Tablets
  @media (max-width: 588px) {
    min-height: 100px;
  }

  @media (max-width: 400px) {
    min-height: 120px;
  }
`

const BeaconImg = styled(BeaconDevice)`
  animation: ${fadeIn} 1s 0.1s forwards;
`

const BeaconOpaque = styled(BeaconPlaceholder)``

const LinkButtons = styled.div`
  max-width: 480px;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  gap: 60px;

  @media (max-width: 588px) {
    gap: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`

const NextPageWrapper = styled.div`
  margin: auto;
  margin-bottom: 50px;
`

const NextPage = styled(MediumText)`
  color: black;

  cursor: pointer;
  @media (max-width: 588px) {
    margin-bottom: 30px;
  }

  //Phones
  @media (max-width: 400px) {
    margin-bottom: 30px;
    margin-top: -10px;
  }
`
