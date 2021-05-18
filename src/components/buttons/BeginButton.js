import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonText } from "../styles/ColorStyles"
import { projectRetail_themes } from "../../components/styles/TextStyles"

export default function BeginButton(params) {
  return (
    <Wrapper>
      <PurpleButton>
        <Title>Begin</Title>
      </PurpleButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: -10px;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  margin: auto;
`

const PurpleButton = styled.div`
  width: 100px;
  height: 30px;
  background: #6a80fb
  border-radius: 15px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 15px;
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); 
  }
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-0.5px) scale(1.01);
    .icon {
      transform: scale(1.01);
    }
  }
`

const Title = styled.div`
  color: white;
`
