import React from "react"
import styled from "styled-components"

import {
  BigCircleButton,
  SmallCircleStyle,
} from "../../components/styles/ScreenStyles.js"

export default function ProcessButton(props) {
  //Props it will receive is the number (step)
  const { number, state } = props

  return (
    <Wrapper isSelected={state == number} onClick={() => props.changeButton()}>
      <Number>{number}</Number>
    </Wrapper>
  )
}

const Wrapper = styled(BigCircleButton)``

const Number = styled.div`
  font-size: 18px;
  font-weight: 700;
`
