import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../../components/styles/TextStyles"

import Ipad from "../devices/Ipad.js"
import GithubButton from "../../components/buttons/GithubButton"
import VideoButton from "../../components/buttons/VideoButton"
import ProcessButton from "../../components/buttons/ProcessButton"
import ThreeProcessButtonSet from "../../components/buttons/ThreeProcessButtonSet.js"

import { AnchorLink } from "gatsby-plugin-anchor-links"

import { IpadSectionText } from "../../components/constants.js"

export default function IpadSection(props) {
  //Set state. State controls description and screen
  //State can be changed via screen and buttons
  const [state, setState] = useState(1)
  const [loads, setLoads] = useState(1) //To make sure animation is not being reloaded

  const { setShelfFlash } = props

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
    <Wrapper id="ipad">
      <ContentWrapper>
        <Title>iPad App</Title>
        <Ipad
          state={state}
          loads={loads}
          changeState={state => setState(state)}
          setShelfFlash={setShelfFlash}
        />
        {renderDescription()}
        {/**Render buttons here */}
        <ThreeProcessButtonSet
          type="light"
          state={state}
          changeState={state => setState(state)}
          changeLoads={loads => setLoads(loads)}
        />
        <LinkButtons>
          <GithubButton
            type="dark"
            url="https://github.com/wendellrodrigues/projectretail-storeClient"
          />
          <VideoButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
        </LinkButtons>
        <NextPageWrapper
          onClick={() => {
            setShelfFlash(1)
          }}
        >
          <AnchorLink to="projectretail/#shelf">
            <NextPage>Find my size</NextPage>
          </AnchorLink>
        </NextPageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${projectRetail_themes.blue.background};
  height: auto;
  overflow: hidden; //Clip the overflow content
`

const ContentWrapper = styled.div`
  max-width: 847px;
  margin: auto;
  padding: 50px 0px 0px 0px;
  display: grid;
  gap: 30px;

  @media (max-width: 742px) {
  }

  //Phones
  @media (max-width: 400px) {
    padding: 30px 0px 0px 0px;
  }
`

const Title = styled(H1)`
  margin: auto;
  color: ${projectRetail_themes.blue.text1};
  margin-bottom: 20px;
`

const Description = styled(MediumText)`
  //max-width: 847px;
  color: ${projectRetail_themes.blue.text1};
  margin: auto;
  min-height: 175px;
  padding: 30px;
  margin-bottom: -30px;

  @media (max-width: 742px) {
    padding: 0px 20px 0px 20px;
    min-height: 130px;
    margin-bottom: auto;
  }

  @media (max-width: 400px) {
    min-height: 130px;
  }
`
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

  cursor: pointer;

  //Tablets
  @media (max-width: 588px) {
    margin-bottom: 30px;
  }

  //Phones
  @media (max-width: 400px) {
    margin-bottom: 30px;
    margin-top: -10px;
  }
`
const NextPage = styled(MediumText)`
  color: ${projectRetail_themes.blue.text1};
`
