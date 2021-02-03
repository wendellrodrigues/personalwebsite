import React, { useState } from "react"
import styled from "styled-components"
import ProcessButton from "./ProcessButton.js"

import {
  BigCirleButton,
  SmallCircleStyle,
} from "../../components/styles/ScreenStyles.js"

export default function ThreeProcessButtonSet(props) {
  const { state } = props

  return (
    <Wrapper>
      <ProcessButton
        number={1}
        state={state}
        changeButton={state => {
          props.changeState(1)
        }}
      />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <ProcessButton
        number={2}
        state={state}
        changeButton={state => {
          props.changeState(2)
        }}
      />
      <SmallCircle />
      <SmallCircle />
      <SmallCircle />
      <ProcessButton
        number={3}
        state={state}
        changeButton={state => {
          props.changeState(3)
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, auto);
  gap: 20px;
  justify-content: center;
  align-content: center;
  position: relative;
`

const SmallCircle = styled(SmallCircleStyle)``
