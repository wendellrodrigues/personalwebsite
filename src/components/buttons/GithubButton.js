import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonText } from "../../components/styles/TextStyles"
import {
  GithubButtonWhiteStyle,
  GithubButtonGrayStyle,
} from "../../components/styles/ButtonStyles"

export default function GithubButton(props) {
  const { type, url } = props

  const renderButton = () => {
    if (type == "light") {
      return (
        <BlueButton>
          <Icon src="/images/icons/github-icon.svg" className="icon" />
          <Title>View on GitHub</Title>
        </BlueButton>
      )
    } else {
      return (
        <WhiteButton>
          <Icon src="/images/icons/github-icon.svg" className="icon" />
          <Title>View on GitHub</Title>
        </WhiteButton>
      )
    }
  }

  return (
    <Wrapper>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {renderButton()}
      </a>
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

const WhiteButton = styled(GithubButtonWhiteStyle)``
const BlueButton = styled(GithubButtonGrayStyle)``

const Title = styled(ButtonText)``
