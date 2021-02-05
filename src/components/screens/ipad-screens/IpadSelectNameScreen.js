import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { projectRetail_themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"

import {
  iPadScreen,
  iPadTitle,
  iPadSubtitle,
} from "../../../components/styles/IpadStyles.js"

import {
  PurpleButton,
  PurpleButtonText,
} from "../../../components/styles/ButtonStyles"

export default function IpadSelectNameScreen(props) {
  return (
    <Screen>
      <ContentWrapper>
        <Title>Begin</Title>
        <Subtitle>Select your name below</Subtitle>
        <NameButtonWrapper>
          <NameColumnWrapper>
            <NameButton onClick={() => props.changeScreen(3)}>
              <ButtonText>Wendell</ButtonText>
            </NameButton>
            <NameButton onClick={() => props.changeScreen(3)}>
              <ButtonText>Camille</ButtonText>
            </NameButton>
          </NameColumnWrapper>
          <NameColumnWrapper>
            <NameButton onClick={() => props.changeScreen(3)}>
              <ButtonText>Chris</ButtonText>
            </NameButton>
            <NameButton onClick={() => props.changeScreen(3)}>
              <ButtonText>Kilho</ButtonText>
            </NameButton>
          </NameColumnWrapper>
        </NameButtonWrapper>
      </ContentWrapper>
    </Screen>
  )
}

const Screen = styled(iPadScreen)``

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

const Title = styled(iPadTitle)`
  //Smaller desktop
  @media (max-width: 742px) {
    top: 30%;
    font-size: 30px;
  }

  //Tablet
  @media (max-width: 588px) {
    top: 30%;
    font-size: 20px;
  }

  //Phones
  @media (max-width: 400px) {
    top: 30%;
    font-size: 18px;
  }
`

const Subtitle = styled(iPadSubtitle)``

const NameButton = styled(PurpleButton)`
  position: relative;
`

const NameButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: grid;
  margin: auto;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 25px;

  @media (max-width: 742px) {
    top: 40%;
    gap: 15px;
  }

  @media (max-width: 588px) {
    top: 40%;
    gap: 15px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    top: 45%;
    gap: 8px;
  }
`

const NameColumnWrapper = styled.div`
  display: grid;
  gap: 18px;

  @media (max-width: 742px) {
    gap: 20px;
  }

  @media (max-width: 588px) {
    gap: 15px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    gap: 8px;
  }
`

const ButtonText = styled(PurpleButtonText)``
