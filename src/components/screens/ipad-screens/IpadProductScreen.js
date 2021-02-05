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
  ProductPageButtons,
} from "../../../components/styles/ButtonStyles"

export default function IpadProductScreen(props) {
  return (
    <Screen>
      <ContentWrapper>
        <ScreenBackground src="/images/components/ProductScreen.svg" />
        <FindSizeButtonWrapper>
          <FindSizeButton>
            <ButtonText>Find my size</ButtonText>
          </FindSizeButton>
        </FindSizeButtonWrapper>
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

const FindSizeButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 55%;
  left: 14%;
  flex-direction: column;
  display: flex;

  @media (max-width: 742px) {
    width: 100%;
    position: absolute;
    top: 55%;
    left: 17%;
  }

  @media (max-width: 588px) {
    width: 100%;
    position: absolute;
    top: 54%;
    left: 14%;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 100%;
    position: absolute;
    top: 55%;
    left: 19%;
  }
`

const FindSizeButton = styled(ProductPageButtons)``

const ButtonText = styled(PurpleButtonText)`
  @media (max-width: 400px) {
    font-size: 5px;
  }
`
