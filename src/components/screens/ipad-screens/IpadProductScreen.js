import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import {
  iPadScreen,
  ProductBackground,
} from "../../../components/styles/IpadStyles.js"

import {
  PurpleButtonText,
  FindMySizeButton,
  ExitRedButton,
} from "../../../components/styles/ButtonStyles"

export default function IpadProductScreen(props) {
  const { setShelfFlash } = props

  return (
    <Screen>
      <ContentWrapper>
        <ScreenBackground src="/images/components/ProductScreen.png" />
        <ButtonWrapper>
          <AnchorLink to="/#shelf">
            <FindSizeButton
              onClick={() => {
                setShelfFlash(1)
              }}
            >
              <ButtonText>Find my size</ButtonText>
            </FindSizeButton>
          </AnchorLink>
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
  top: 55%;
  left: 14%;
  display: grid;
  grid-template-rows: auto auto;
  gap: 60px;

  @media (max-width: 742px) {
    width: 100%;
    position: absolute;
    top: 55%;
    left: 17%;
    gap: 50px;
  }

  @media (max-width: 588px) {
    width: 100%;
    position: absolute;
    top: 53%;
    left: 14%;
    gap: 30px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 100%;
    position: absolute;
    top: 54%;
    left: 19%;
    gap: 15px;
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
