import React from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import animationData from "../../../lotties/radar"
import { iPhoneScreen } from "../../../components/styles/IphoneStyles.js"

export default function IphoneSearchingScreen(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMaxYMax slice",
    },
  }

  return (
    <ScreenWrapper>
      <Screen src="/images/components/IphoneSearchingScreen.png" />
      <Animation>
        <Lottie options={defaultOptions} />
      </Animation>
    </ScreenWrapper>
  )
}

const ScreenWrapper = styled.div`
  display: grid;
`

const Screen = styled(iPhoneScreen)``

const Animation = styled.div`
  top: 18%;
  left: 50%;
  height: 150px;
  width: 150px;
  margin-left: -75px;
  position: absolute;

  @media (max-width: 550px) {
    width: 286px;
    height: 215px;

    top: 18%;
    left: 50%;
    height: 75px;
    width: 75px;
    margin-left: -37.5px;
  }
`
