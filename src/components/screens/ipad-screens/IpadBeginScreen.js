import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { projectRetail_themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"
import { BeginButtonText } from "../../../components/styles/TextStyles"

import { iPadScreen, iPadTitle } from "../../../components/styles/IpadStyles.js"

import {
  PurpleButton,
  PurpleButtonText,
} from "../../../components/styles/ButtonStyles"

export default function IpadBeginScreen(props) {
  return (
    <Screen>
      <ContentWrapper>
        <Title>Welcome</Title>
        <ButtonWrapper onClick={() => props.changeScreen(2)}>
          <BeginButton>
            <ButtonText>Begin</ButtonText>
          </BeginButton>
        </ButtonWrapper>
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
  top: 40%;
`

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 58%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: auto;

  @media (max-width: 742px) {
    top: 55%;
  }

  @media (max-width: 588) {
    top: 50%;
  }

  //Smaller phones
  @media (max-width: 400px) {
    top: 55%;
  }
`

const BeginButton = styled(PurpleButton)``

const ButtonText = styled(PurpleButtonText)``
