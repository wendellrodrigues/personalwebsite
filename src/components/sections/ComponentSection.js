import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, H3, MediumText } from "../styles/TextStyles"
import GithubButton from "../../components/buttons/GithubButton"
import VideoButton from "../../components/buttons/VideoButton"
import { FindMySizeButton, PurpleButtonText } from "../styles/ButtonStyles.js"
import { ComponentSectionText } from "../../components/constants.js"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function ComponentSection(props) {
  const { state, setState } = props

  const loadInfo = () => {
    console.log(state)

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
    if (state == 1) {
      return (
        <ButtonWrapper>
          <VideoButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
        </ButtonWrapper>
      )
    } else if (state == 2) {
    } else if (state == 3) {
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
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: white;
  height: auto;
  display: grid;
  margin: auto;
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 150px 30px 150px 30px;
  display: grid;
  gap: 100px;
  justify-content: center;

  @media (max-width: 1000px) {
    padding: 70px 30px 150px 30px;
    gap: 70px;
  }

  @media (max-width: 744px) {
    padding: 70px 30px 150px 30px;
    gap: 30px;
  }

  @media (max-width: 500px) {
    padding: 70px 30px 150px 30px;
    gap: 20px;
  }

  @media (max-width: 400px) {
    padding: 70px 30px 150px 30px;
    gap: 20px;
  }
`

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
  //margin: auto;

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
    //width: 600px;
    display: flex;
    margin-top: 20px;
    gap: 0px;
    //justify-content: center;
    //align-content: space-around;
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
  animation: fadeIn ease 3s;

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
  align-self: end;
  @media (max-width: 744px) {
    justify-self: center;
  }
`
