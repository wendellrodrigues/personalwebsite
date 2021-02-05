import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonText } from "../../components/styles/TextStyles"
import { GithubButtonWhiteStyle } from "../../components/styles/ButtonStyles"

export default function GithubButton(props) {
  const { url } = props

  return (
    <Wrapper>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <WhiteButton>
          <Icon src="/images/icons/github-icon.svg" className="icon" />
          <Title>View on GitHub</Title>
        </WhiteButton>
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

const Title = styled(ButtonText)``
