import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

import { iPhoneDevice } from "../../components/styles/IphoneStyles.js"

import IphoneBeginScreen from "../screens/iphone-screens/IphoneBeginScreen.js"
import IphoneSearchingScreen from "../screens/iphone-screens/IphoneSearchingScreen.js"
import IphoneFoundShelfScreen from "../screens/iphone-screens/IphoneFoundShelfScreen.js"

export default function Iphone(props) {
  const { state } = props
  const { loads } = props

  const renderScreen = () => {
    if (state == 1) {
      return (
        <IphoneBeginScreen
          loads={loads}
          changeScreen={screen => {
            props.changeState(2)
          }}
        />
      )
    } else if (state == 2) {
      return <IphoneSearchingScreen />
    } else if (state == 3) {
      return <IphoneFoundShelfScreen />
    }
  }
  return (
    <IphoneWrapper>
      <IphoneImg src="/images/devices/iPhone.svg" />
      <ScreenWrapper>{renderScreen()}</ScreenWrapper>
    </IphoneWrapper>
  )
}

const IphoneWrapper = styled.div`
  justify-self: center;
  position: relative;
  width: 260px; //530
  height: 518px; //370

  @media (max-width: 550px) {
    width: 130px;
    height: 256px;
  }

  //Phones
  @media (max-width: 400px) {
    width: 130px;
    height: 256px;
  }
`

const ScreenWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
`

const IphoneImg = styled(iPhoneDevice)`
  position: absolute;
`
