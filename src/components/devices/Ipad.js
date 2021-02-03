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

export default function Ipad(props) {
  //Initial state received from props. Can also be changed from buttons below (1..2..3)
  const { state } = props

  //Conditionally renders the screen to the different iPad steps
  const renderScreen = () => {
    if (state == 1) {
      return (
        <IpadBeginScreen
          changeScreen={screen => {
            props.changeState(2)
          }}
        />
      )
    } else if (state == 2) {
      return <IpadSelectNameScreen />
    } else if (state == 3) {
      props.changeState(1)
    } else {
      return (
        <IpadBeginScreen
          changeScreen={screen => {
            props.changeState(2)
          }}
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

const IpadImg = styled.img`
  width: 530px;
  height: 370px;

  //Larger phones
  @media (max-width: 530px) {
    width: 300px;
    height: 209px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 250px;
    height: 150px;
  }
`

const ScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`
