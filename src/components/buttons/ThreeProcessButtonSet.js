import React from "react"
import styled from "styled-components"
import ProcessButton from "./ProcessButton.js"

import {
  SmallCircleStyle,
  DarkSmallCircleStyle,
  ThreeProcessWrapper,
} from "../../components/styles/ButtonStyles.js"

export default function ThreeProcessButtonSet(props) {
  const { type, state } = props

  if (type === "dark") {
    return (
      <Wrapper>
        <ProcessButton
          type={type}
          number={1}
          state={state}
          changeButton={state => {
            props.changeState(1)
          }}
        />
        <DarkSmallCircle />
        <DarkSmallCircle />
        <DarkSmallCircle />
        <ProcessButton
          type={type}
          number={2}
          state={state}
          changeButton={state => {
            props.changeState(2)
            props.changeLoads(2)
          }}
        />
        <DarkSmallCircle />
        <DarkSmallCircle />
        <DarkSmallCircle />
        <ProcessButton
          type={type}
          number={3}
          state={state}
          changeButton={state => {
            props.changeState(3)
            props.changeLoads(2)
          }}
        />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <ProcessButton
          type={type}
          number={1}
          state={state}
          changeButton={state => {
            console.log(type)
            props.changeState(1)
          }}
        />
        <SmallCircle />
        <SmallCircle />
        <SmallCircle />
        <ProcessButton
          type={type}
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
          type={type}
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
}

const Wrapper = styled(ThreeProcessWrapper)``
const SmallCircle = styled(SmallCircleStyle)``
const DarkSmallCircle = styled(DarkSmallCircleStyle)``
