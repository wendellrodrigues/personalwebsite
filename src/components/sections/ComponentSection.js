import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, H3, MediumText } from "../styles/TextStyles"
import GithubButton from "../../components/buttons/GithubButton"

import CircuitButton from "../../components/buttons/CircuitButton"
import VideoButton from "../../components/buttons/VideoButton"
import { FindMySizeButton, PurpleButtonText } from "../styles/ButtonStyles.js"
import { ComponentSectionText } from "../../components/constants.js"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function ComponentSection(props) {
  const { state, setState } = props

  const { show, showModal } = props

  const loadInfo = () => {
    if (state == 1) {
      return {
        title: "Beacon",
        description: ComponentSectionText.beacon_description,
      }
    } else if (state == 2) {
      return {
        title: "API",
        description: ComponentSectionText.beacon_description,
      }
    } else if (state == 3) {
      return {
        title: "ESP8266 NodeMCU",
        description: ComponentSectionText.beacon_description,
      }
    }
  }

  const loadButtons = () => {
    function sayHi() {
      console.log("hi")
    }

    if (state == 1) {
      return (
        <ButtonWrapper>
          <VideoButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
        </ButtonWrapper>
      )
    } else if (state == 2) {
      return (
        <ButtonWrapper>
          <GithubButton
            type="light"
            url="https://github.com/wendellrodrigues/projectretail"
          />
        </ButtonWrapper>
      )
    } else if (state == 3) {
      return (
        <ThreeColumnButtonWrapper>
          <GithubButton
            type="light"
            url="https://github.com/wendellrodrigues/projectretail"
          />
          <VideoButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
          <CircuitButton showModal={showModal} />
        </ThreeColumnButtonWrapper>
      )
    }
  }

  const renderInfo = () => {
    return (
      <InfoWrapper>
        <ComponentTitle>{loadInfo().title}</ComponentTitle>
        <Description>{loadInfo().description}</Description>
        {loadButtons()}
      </InfoWrapper>
    )
  }

  return (
    <Wrapper id="component">
      <ContentWrapper>
        <Title>Other Components</Title>
        <BodyWrapper>
          <DeviceWrapper>
            <Device
              selected={state == 1}
              src="/images/devices/Beacon.svg"
              onClick={() => setState(1)}
            />
            <Device
              selected={state == 2}
              src="/images/devices/Server.svg"
              onClick={() => setState(2)}
            />
            <Device
              selected={state == 3}
              src="/images/devices/NodeMCU.svg"
              onClick={() => setState(3)}
            />
          </DeviceWrapper>
          {renderInfo()}
        </BodyWrapper>
        <Technologies src="/images/icons/Technologies.svg" className="icon" />
        <NextPageWrapper>
          <AnchorLink to="projectretail/#component">
            <NextPage>Meet the team</NextPage>
          </AnchorLink>
        </NextPageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const fadeIn = keyframes`
  0% { opacity: 0.1;  }
  100% { opacity: 1; }
`

const Wrapper = styled.div`
  background: white;
  height: auto;
  display: grid;
  margin: auto;
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 150px 30px 50px 30px;
  display: grid;
  gap: 100px;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 70px 30px 50px 30px;
    gap: 70px;
  }

  @media (max-width: 744px) {
    gap: 30px;
  }

  @media (max-width: 500px) {
    gap: 20px;
  }

  @media (max-width: 400px) {
    gap: 20px;
  }
`

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;

  @media (max-width: 744px) {
    grid-template-columns: auto;
    justify-items: center;
  }

  @media (max-width: 500px) {
    gap: 30px;
  }

  @media (max-width: 400px) {
    gap: 30px;
  }
`

const InfoWrapper = styled.div`
  position: relative;
  display: grid;

  @media (max-width: 744px) {
    gap: 60px;
  }
`

const Title = styled(H1)`
  @media (max-width: 744px) {
    justify-self: center;
  }
`

const DeviceWrapper = styled.div`
  display: grid;
  gap: 60px;

  @media (max-width: 744px) {
    display: flex;
    margin-top: 20px;
    gap: 0px;
  }
`

const Device = styled.img`
  width: 100px;

  @media (max-width: 744px) {
    //width: 600px;
    width: 80px;
    max-height: 50px;
    margin-right: 45px;
    margin-left: 45px;
    //ustify-content: center;
    //align-content: space-around;
  }

  @media (max-width: 500px) {
    width: 50px;
    margin-right: 15px;
    margin-left: 15px;
  }

  opacity: ${props => (props.selected ? "1" : "0.5")};
  cursor: pointer;
  transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateY(-0.5px) scale(1.01);
    opacity: 0.7;
  }
`

const ComponentTitle = styled(H3)`
  @media (max-width: 744px) {
    justify-self: center;
  }
`
const Description = styled(MediumText)`
  margin-top: -30px;
`
const ButtonWrapper = styled.div`
  opacity: 0;
  align-self: end;
  animation: ${fadeIn} 1s 0.1s forwards;
  @media (max-width: 744px) {
    justify-self: center;
  }
`

const ThreeColumnButtonWrapper = styled.div`
  opacity: 0;
  align-self: end;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  justify-self: start;
  animation: ${fadeIn} 1s 0.1s forwards;

  @media (max-width: 744px) {
    justify-self: center;
  }

  @media (max-width: 500px) {
    justify-self: center;
    grid-template-columns: auto;
    gap: 15px;
  }
`

const Technologies = styled.img`
  margin-top: 100px;
  width: 100%;

  @media (max-width: 400px) {
    margin-top: 20px;
    width: 90%;
    margin: auto;
  }
`
const NextPageWrapper = styled.div`
  margin: auto;
  cursor: pointer;

  //Tablets
  @media (max-width: 588px) {
    margin-bottom: 10px;
  }
  //Phones
  @media (max-width: 400px) {
    margin-bottom: 30px;
    margin-top: -10px;
    margin: auto;
  }
`

const NextPage = styled(MediumText)`
  color: black;
`
