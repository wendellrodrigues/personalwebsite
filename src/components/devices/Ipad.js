import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

//Screens for the iPad
import IpadBeginScreen from "../screens/ipad-screens/IpadBeginScreen.js"

export default function Ipad(props) {
  //State passed to props to decide which screen component to display
  const [screen, setScreen] = useState(1)

  //Conditionally renders the screen to the different iPad steps
  const renderScreen = () => {
    if (screen == 1) {
      return <IpadBeginScreen changeScreen={screen => setScreen(screen)} />
    } else if (screen == 2) {
      return <div></div>
    } else {
      setScreen(1)
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

  @media (max-width: 530px) {
    width: 300px;
    height: 209px;
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
