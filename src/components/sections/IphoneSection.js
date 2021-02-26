import React, { useState } from "react"
import styled from "styled-components"
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

import { IphoneSectionText } from "../../components/constants.js"
import { BeaconDevice } from "../../components/styles/IphoneStyles.js"

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
    }
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <IphoneColumn>
          <Title>iPhone App</Title>
          <Iphone />
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
        </ContentColumn>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: white;
  height: 900px;
  overflow: hidden; //Clip the overflow content
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 70px 0px 0px 0px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;

  //Switches to one column when small screen
  @media (max-width: 880px) {
    grid-template-columns: auto;
    gap: 10px;
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
  }
`

const Title = styled(H1)`
  margin: auto;
  color: black;

  @media (max-width: 742px) {
    font-size: 40px;
  }

  //Tablets
  @media (max-width: 588px) {
    font-size: 40px;
  }

  //Phones
  @media (max-width: 400px) {
    font-size: 40px;
  }
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
`

const Description = styled(MediumText)`
  //max-width: 847px;
  color: black;
  margin: auto;
  min-height: 125px;
  max-width: 700px;
  //padding: 30px;

  /* @media (max-width: 742px) {
    padding: 0px 20px 0px 20px;
  }

  @media (max-width: 400px) {
    min-height: 220px;
  } */
`

const BeaconImg = styled(BeaconDevice)``
