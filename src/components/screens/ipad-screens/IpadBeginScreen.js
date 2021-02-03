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
} from "../../../components/styles/ScreenStyles.js"

export default function IpadBeginScreen(props) {
  return (
    <Screen>
      <ContentWrapper>
        <Title>Welcome</Title>
        <ButtonWrapper onClick={() => props.changeScreen(2)}>
          <PurpleButton>
            <ButtonText>Begin</ButtonText>
          </PurpleButton>
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
  top: 52%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: auto;

  @media (max-width: 530px) {
    top: 55%;
  }

  //Smaller phones
  @media (max-width: 400px) {
    top: 60%;
  }
`

const PurpleButton = styled.div`
  width: 120px;
  height: 30px;
  position: absolute;
  top: 60%;
  background: #6a80fb;
  border-radius: 8px;
  display: grid;
  justify-content: center;
  align-items: center;
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); \
  }
  :hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-0.5px) scale(1.01);
    .icon {
      transform: scale(1.01);
    }
  }

    @media (max-width: 530px) {
      width: 68px.;
      height: 25px;
      border-radius: 5px;
    }

    //Smaller phones
  @media (max-width: 400px) {
    width: 47px;
    height: 18px;

  }
`

const ButtonText = styled(BeginButtonText)`
  @media (max-width: 530px) {
    font-size: 8px;
  }

  //Smaller phones
  @media (max-width: 400px) {
  }
`
