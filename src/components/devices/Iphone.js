import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

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
      <ScreenWrapper>{renderScreen()}</ScreenWrapper>
    </IphoneWrapper>
  )
}

const IphoneWrapper = styled.div`
  margin: auto;
  position: relative;
`

const ScreenWrapper = styled.div`
  margin: auto;
  position: relative;
  width: 100%;
  height: 100%;
  top: -5px;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`
