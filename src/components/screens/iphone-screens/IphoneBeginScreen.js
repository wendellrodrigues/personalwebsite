import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { projectRetail_themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"
import { BeginButtonText } from "../../../components/styles/TextStyles"

import { iPhoneScreen } from "../../../components/styles/IphoneStyles.js"

import {
  PurpleButton,
  PurpleButtonText,
} from "../../../components/styles/ButtonStyles"

export default function IphoneBeginScreen(props) {
  //Scroll percentage of page (1 being dead center)
  const { percentage } = props

  const renderScreen = () => {
    if (percentage > 0.8) {
      return (
        <ScreenWrapper>
          <Screen src="/images/components/IphoneBeginScreen.png" />
          <ButtonWrapper onClick={() => props.changeScreen(2)}>
            <SignInButton src="/images/components/SignInButton.png" />
          </ButtonWrapper>
        </ScreenWrapper>
      )
    }
  }

  return <div>{renderScreen()}</div>
}
const ScreenWrapper = styled.div`
  display: grid;
  animation: opacityOn 1s normal forwards 1;
`
const Screen = styled(iPhoneScreen)``

const ButtonWrapper = styled.div`
  opacity: 0;
  animation: opacityOn 1s normal forwards 1;
  /* animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: 1; */
  animation-delay: 0.5s;
`

const SignInButton = styled.img`
  position: absolute;
  width: 234px; //width: 246px;
  height: 44px; //height: 46px;
  top: 405px;
  left: 12.5px;
  cursor: pointer;

  :hover {
    filter: hue-rotate(4deg) brightness(110%);
    transform: scale(1.01);
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  //Tablets
  @media (max-width: 550px) {
    top: 200px;
    left: 6px;
    width: 117px;
    height: 22px;
  }
`
