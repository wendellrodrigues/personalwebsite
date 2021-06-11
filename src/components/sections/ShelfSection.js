import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import ArduinoButton from "../../components/buttons/ArduinoButton"
import VideoButton from "../../components/buttons/VideoButton"
import { Parallax } from "react-parallax"

import { FindMySizeButton, PurpleButtonText } from "../styles/ButtonStyles.js"

import { ShelfSectionText } from "../../components/constants.js"

import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function ShelfSection(props) {
  const { flash, setFlash } = props
  const { componentState, setComponent } = props

  let loadLitShelf = flash == 1

  return (
    <Wrapper id="shelf">
      <Parallax
        renderLayer={percentage => (
          <ContentWrapper
            style={{
              opacity: 1,
            }}
          >
            <Title>Shelf System</Title>
            <ShelfWrapper>
              <Shelf src="/images/components/Shelf.svg" />
              {loadLitShelf ? (
                <LitShelf
                  onAnimationEnd={() => setFlash(0)}
                  src="/images/components/LitShelf.svg"
                />
              ) : (
                ""
              )}
            </ShelfWrapper>
            <FindSizeButton
              onClick={() => {
                setFlash(1)
              }}
            >
              <ButtonText>Find my size</ButtonText>
            </FindSizeButton>
            <Description>{ShelfSectionText.description}</Description>
            <LinkButtons>
              <AnchorLink
                onAnchorLinkClick={() => {
                  setComponent(3)
                }}
                to="/#component"
              >
                <ArduinoButton />
              </AnchorLink>
              <VideoButton url="https://www.youtube.com/playlist?list=PLZ5gmo-fqIUHvlW3LAPlnsw9Pe3Q2CQL9" />
            </LinkButtons>
            <NextPageWrapper>
              <AnchorLink to="/#component">
                <NextPage>Other Components</NextPage>
              </AnchorLink>
            </NextPageWrapper>
          </ContentWrapper>
        )}
      ></Parallax>
    </Wrapper>
  )
}

//Fade in/out animation
const flash = keyframes`
  0% { opacity: 0;  }
  50% { opacity: 1; }
  100 { opacity: 0; }
`

const Wrapper = styled.div`
  background: black;
  height: auto;
`

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 70px 0px 30px 0px;
  display: grid;
  gap: 70px;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 30px 0px 30px 0px;
    gap: 30px; //300
  }
`

const Title = styled(H1)`
  margin: auto;
  color: white;
`

const ShelfWrapper = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`

const Shelf = styled.img`
  width: 300px;

  @media (max-width: 400px) {
    width: 150px; //300
  }
`

const LitShelf = styled.img`
  position: absolute;
  top: 170px;
  opacity: 0;
  animation: ${flash};
  animation-duration: 1s;
  animation-iteration-count: 2;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  width: 274px;

  @media (max-width: 400px) {
    top: 86px;
    width: 136px; //300
  }
`

const FindSizeButton = styled(FindMySizeButton)`
  position: relative;
  margin: auto;
  margin-top: -20px;

  @media (max-width: 742px) {
    width: 160px; //120px;
    height: 35px; //30px;
  }

  //iPad
  @media (max-width: 588px) {
    width: 160px; //120px;
    height: 35px; //30px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 100px; //120px;
    height: 20px; //30px;
    border-radius: 5px;
    margin-top: 0px;
  }
`

const ButtonText = styled(PurpleButtonText)`
  @media (max-width: 742px) {
    font-size: 17px;
  }

  @media (max-width: 588px) {
    font-size: 17px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  }
`

const Description = styled(MediumText)`
  color: ${projectRetail_themes.blue.text1};
  margin: auto;
  min-height: 100px;
  padding: 30px;
  margin-bottom: -30px;
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
  color: white;
`
