import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../../components/styles/TextStyles"

import Ipad from "../devices/Ipad.js"
import GithubButton from "../../components/buttons/GithubButton"
import ProcessButton from "../../components/buttons/ProcessButton"
import ThreeProcessButtonSet from "../../components/buttons/ThreeProcessButtonSet.js"

import { IpadSectionText } from "../../components/constants.js"

export default function IpadSection() {
  //Set state. State controls description and screen
  //State can be changed via screen and buttons
  const [state, setState] = useState(1)

  //Conditionally renders the description based on the state change passed from props
  const renderDescription = () => {
    if (state == 1) {
      return <Description>{IpadSectionText.state1_description}</Description>
    } else if (state == 2) {
      return <Description>{IpadSectionText.state2_description}</Description>
    } else if (state == 3) {
      return <Description>{IpadSectionText.state3_description}</Description>
    } else {
      setState(1)
    }
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>iPad App</Title>
        <Ipad state={state} changeState={state => setState(state)} />
        {renderDescription()}
        {/**Render buttons here */}
        <ThreeProcessButtonSet
          state={state}
          changeState={state => setState(state)}
        />
        <GithubButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${projectRetail_themes.blue.background};
  height: 1024px;
  overflow: hidden; //Clip the overflow content
`

const ContentWrapper = styled.div`
  max-width: 847px;
  margin: auto;
  padding: 100px 0px 0px 0px;
  display: grid;
  gap: 60px;

  @media (max-width: 530px) {
    gap: 30px;
  }
`

const Title = styled(H1)`
  margin: auto;
  color: ${projectRetail_themes.blue.text1};

  @media (max-width: 530px) {
    font-size: 50px;
  }
`

const Description = styled(MediumText)`
  //max-width: 847px;
  color: ${projectRetail_themes.blue.text1};
  margin: auto;
  min-height: 75px;

  @media (max-width: 846px) {
    padding: 0px 20px 0px 20px;
  }

  @media (max-width: 450px) {
    min-height: 75px;
  }
`

/**
    <Wrapper>
      <p>Hello</p>
      <BlueBackground />
    </Wrapper> */
