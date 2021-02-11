import React, { useState } from "react"
import styled from "styled-components"
import ProcessButton from "./ProcessButton.js"

import {
  BigCirleButton,
  SmallCircleStyle,
  ThreeProcessWrapper,
} from "../../components/styles/ButtonStyles.js"

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
          props.changeLoads(2)
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
          props.changeLoads(2)
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled(ThreeProcessWrapper)``

const SmallCircle = styled(SmallCircleStyle)``
