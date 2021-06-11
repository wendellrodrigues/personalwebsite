import React from "react"
import styled from "styled-components"

import { iPadScreen, iPadTitle } from "../../../components/styles/IpadStyles.js"

import {
  PurpleButton,
  PurpleButtonText,
} from "../../../components/styles/ButtonStyles"

export default function IpadBeginScreen(props) {
  const { percentage } = props

  const renderScreen = () => {
    if (percentage > 0.8) {
      return (
        <ContentWrapper>
          <Title>Welcome</Title>
          {/* {loadOverlay ? <ScreenOverlay /> : ""} */}
          <ButtonWrapper onClick={() => props.changeScreen(2)}>
            <BeginButton>
              <ButtonText>Begin</ButtonText>
            </BeginButton>
          </ButtonWrapper>
        </ContentWrapper>
      )
    }
  }

  return <Screen>{renderScreen()}</Screen>
}

const Screen = styled(iPadScreen)``

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
  animation: opacityOn 1s normal forwards 1;
`

const Title = styled(iPadTitle)`
  top: 40%;
`

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 58%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: auto;

  @media (max-width: 742px) {
    top: 55%;
  }

  @media (max-width: 588) {
    top: 50%;
  }

  //Smaller phones
  @media (max-width: 400px) {
    top: 55%;
  }
`

const BeginButton = styled(PurpleButton)`
  opacity: 0;
  animation: opacityOn 1s normal forwards 1;
  /* animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: 1; */
  animation-delay: 0.5s;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.92);
    }
    100% {
      transform: scale(1);
    }
  }
`

const ButtonText = styled(PurpleButtonText)``

//const ScreenOverlay = styled(iPadScreenOverlay)`
//   animation: opacityOn 3s normal forwards 1;

//   @keyframes opacityOn {
//     0% {
//       opacity: 0;
//     }
//     30% {
//       opacity: 0.9;
//     }
//     100% {
//       opacity: 0;
//     }
//   }

//   @media (max-width: 588) {
//     opacity: 0;
//     animation: opacityOn 0s normal forwards 1;
//   }

//   //Smaller phones
//   @media (max-width: 400px) {
//     opacity: 0;
//     animation: opacityOn 0s normal forwards 1;
//   }
// `
