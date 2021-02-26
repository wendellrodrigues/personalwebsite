import React from "react"
import styled from "styled-components"

import {
  BigCircleButton,
  DarkBigCircleButton,
  SmallCircleStyle,
} from "../../components/styles/ButtonStyles.js"

export default function ProcessButton(props) {
  //Props it will receive is the number (step)
  const { type, number, state } = props

  if (type == "dark") {
    return (
      <DarkWrapper
        isSelected={state == number}
        onClick={() => props.changeButton()}
      >
        <DarkNumber>{number}</DarkNumber>
      </DarkWrapper>
    )
  } else {
    return (
      <Wrapper
        isSelected={state == number}
        onClick={() => props.changeButton()}
      >
        <Number>{number}</Number>
      </Wrapper>
    )
  }
}

const Wrapper = styled(BigCircleButton)``
const DarkWrapper = styled(DarkBigCircleButton)``

const Number = styled.div`
  font-size: 18px;
  font-weight: 700;
`

const DarkNumber = styled(Number)`
  color: white;
`
