import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

//Screens for the iPad
import IpadBeginScreen from "../screens/ipad-screens/IpadBeginScreen.js"
import IpadSelectNameScreen from "../screens/ipad-screens/IpadSelectNameScreen.js"
import IpadProductScreen from "../screens/ipad-screens/IpadProductScreen.js"

//Styles
import { iPadDevice } from "../../components/styles/IpadStyles.js"

export default function Ipad(props) {
  //Initial state received from props. Can also be changed from buttons below (1..2..3)
  const { state } = props
  const { loads } = props

  //To flash the shelf on the next section on "Find my Size"
  const { setShelfFlash } = props

  //Scroll percentage of page (1 being dead center)
  const { percentage } = props

  //Conditionally renders the screen to the different iPad steps
  const renderScreen = () => {
    if (state == 1) {
      return (
        <IpadBeginScreen
          loads={loads}
          changeScreen={screen => {
            props.changeState(2)
          }}
          percentage={percentage}
        />
      )
    } else if (state == 2) {
      return (
        <IpadSelectNameScreen
          changeScreen={screen => {
            props.changeState(3)
          }}
          percentage={percentage}
        />
      )
    } else if (state == 3) {
      return (
        <IpadProductScreen
          changeScreen={screen => {
            props.changeState(screen)
          }}
          setShelfFlash={setShelfFlash}
          percentage={percentage}
        />
      )
    } else {
      return (
        <IpadBeginScreen
          changeScreen={screen => {
            props.changeState(2)
          }}
          percentage={percentage}
        />
      )
      props.changeState(1)
    }
  }

  return (
    <IpadWrapper>
      <IpadImg src="/images/devices/iPad.svg" alt="ipad" />
      <ScreenWrapper>{renderScreen()}</ScreenWrapper>
    </IpadWrapper>
  )
}

const IpadWrapper = styled.div`
  margin: auto;
  position: relative;
`

const IpadImg = styled(iPadDevice)``

const ScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -2px;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  opacity: 0;
  animation: opacityOn 3s normal forwards 1;

  @keyframes opacityOn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
