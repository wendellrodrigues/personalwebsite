import React from "react"
import styled from "styled-components"

import { ButtonText } from "../../components/styles/TextStyles"
import { GithubButtonWhiteStyle } from "../../components/styles/ButtonStyles"

export default function ArduinoButton(props) {
  return (
    <Wrapper>
      <WhiteButton>
        <Icon src="/images/icons/Arduino-Icon.svg" className="icon" />
        <Title>View Circuit</Title>
      </WhiteButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
`

const WhiteButton = styled(GithubButtonWhiteStyle)`
  background-color: #9ed5d1;
`
const Title = styled(ButtonText)`
  color: #1fa7ac;
`
