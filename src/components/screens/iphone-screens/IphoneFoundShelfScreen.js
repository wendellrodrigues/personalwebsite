import React from "react"
import styled from "styled-components"
import { iPhoneScreen } from "../../../components/styles/IphoneStyles.js"

export default function IphoneFoundShelfScreen(props) {
  return (
    <ScreenWrapper>
      <Screen src="/images/components/IphoneFoundShelfScreen.png" />
      <FoundItem src="/images/components/ShelfItem.png" />
    </ScreenWrapper>
  )
}

const ScreenWrapper = styled.div`
  display: grid;
`

const Screen = styled(iPhoneScreen)``

const FoundItem = styled.img`
  position: absolute;
  width: 220px;
  height: 55px;
  top: 25%;
  left: 50%;
  margin-left: -110px;

  @media (max-width: 550px) {
    width: 110px;
    height: 27.5px;
    top: 25%;
    left: 50%;
    margin-left: -55px;
  }
`
