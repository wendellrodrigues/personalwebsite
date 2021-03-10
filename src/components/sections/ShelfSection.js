import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import GithubButton from "../../components/buttons/GithubButton"
import VideoButton from "../../components/buttons/VideoButton"

import { FindMySizeButton, PurpleButtonText } from "../styles/ButtonStyles.js"

import { ShelfSectionText } from "../../components/constants.js"

export default function ShelfSection(props) {
  const { flash, setFlash } = props

  let loadLitShelf = flash == 1

  return (
    <Wrapper id="shelf">
      <ContentWrapper>
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
          <GithubButton
            type="dark"
            url="https://github.com/wendellrodrigues/projectretail-storeClient"
          />
          <VideoButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
        </LinkButtons>
      </ContentWrapper>
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
  padding: 70px 0px 500px 0px;
  display: grid;
  gap: 70px;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 30px 0px 100px 0px;
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
  margin: auto;
  margin-top: 38px;
  opacity: 0;
  animation: ${flash};
  animation-duration: 1s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;
  width: 274px;

  @media (max-width: 400px) {
    margin-top: 19px;
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
