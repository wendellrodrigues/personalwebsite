import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { projectRetail_themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"
import { BeginButtonText } from "../../../components/styles/TextStyles"

import {
  iPadScreen,
  iPadTitle,
  iPadSubtitle,
  ProductBackground,
} from "../../../components/styles/IpadStyles.js"

import {
  PurpleButton,
  PurpleButtonText,
  FindMySizeButton,
  ExitRedButton,
} from "../../../components/styles/ButtonStyles"

export default function IpadProductScreen(props) {
  return (
    <Screen>
      <ContentWrapper>
        <ScreenBackground src="/images/components/ProductScreen.png" />
        <ButtonWrapper>
          <FindSizeButton>
            <ButtonText>Find my size</ButtonText>
          </FindSizeButton>
          <ExitButton onClick={() => props.changeScreen(1)}>
            <ButtonText>Exit</ButtonText>
          </ExitButton>
        </ButtonWrapper>
      </ContentWrapper>
    </Screen>
  )
}

const Screen = styled(iPadScreen)``

const ScreenBackground = styled(ProductBackground)``

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 52%;
  left: 14%;
  display: grid;
  grid-template-rows: auto auto;
  gap: 60px;

  @media (max-width: 742px) {
    width: 100%;
    position: absolute;
    top: 51%;
    left: 17%;
    gap: 50px;
  }

  @media (max-width: 588px) {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 14%;
    gap: 30px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 19%;
    gap: 20px;
  }
`

const FindSizeButton = styled(FindMySizeButton)`
  position: relative;
`

const ExitButton = styled(ExitRedButton)`
  position: relative;
`

const ButtonText = styled(PurpleButtonText)`
  @media (max-width: 400px) {
    font-size: 5px;
  }
`
