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
  const loadInfo = () => {
    return (
      <InfoWrapper>
        <ComponentTitle>Beacon</ComponentTitle>
        <Description>{ComponentSectionText.beacon_description}</Description>
        <ButtonWrapper>
          <VideoButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
        </ButtonWrapper>
      </InfoWrapper>
    )
  }

  return (
    <Wrapper id="component">
      <ContentWrapper>
        <Title>Other Components</Title>
        <BodyWrapper>
          <DeviceWrapper>
            <Device src="/images/devices/Beacon.svg" />
            <Device src="/images/devices/Server.svg" />
            <Device src="/images/devices/NodeMCU.svg" />
          </DeviceWrapper>
          {loadInfo()}
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
`

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;
  margin: auto;

  @media (max-width: 744px) {
    grid-template-columns: auto;
    justify-items: center;
  }

  @media (max-width: 500px) {
    gap: 50px;
  }

  @media (max-width: 400px) {
    gap: 40px;
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
    justify-content: center;
  }

  @media (max-width: 500px) {
    gap: 30px;
  }

  @media (max-width: 400px) {
    gap: 20px;
  }
`

const Device = styled.img`
  width: 100px;

  @media (max-width: 500px) {
    width: 70px;
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
