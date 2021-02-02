import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

import BeginButton from "../buttons/BeginButton.js"

import IpadBeginScreen from "../screens/ipad-screens/IpadBeginScreen.js"

export default function Ipad(props) {
  const {} = props

  return (
    <IpadWrapper>
      <IpadImg src="/images/devices/iPad.svg" alt="ipad" />
      <ScreenWrapper>
        <IpadBeginScreen />
      </ScreenWrapper>
    </IpadWrapper>
  )
}

const IpadWrapper = styled.div`
  margin: auto;
  position: relative;
`

const IpadImg = styled.img`
  width: 530px;
  height: 369px;
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
