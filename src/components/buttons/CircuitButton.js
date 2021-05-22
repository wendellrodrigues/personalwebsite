import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonText } from "../../components/styles/TextStyles"
import {
  GithubButtonWhiteStyle,
  GithubButtonGrayStyle,
} from "../../components/styles/ButtonStyles"

export default function CircuitButton(props) {
  const { showModal } = props
  return (
    <Wrapper>
      <WhiteButton onClick={() => props.showModal()}>
        <Icon src="/images/icons/Circuit-Icon.svg" className="icon" />
        <Title>Circuit Images</Title>
      </WhiteButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
`

const WhiteButton = styled(GithubButtonWhiteStyle)`
  background: #c87e7e;
`
const Title = styled(ButtonText)`
  color: white;
`
