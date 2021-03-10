import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonText, DarkButtonText } from "../../components/styles/TextStyles"
import { VideoButtonStyle } from "../../components/styles/ButtonStyles"

export default function VideoButton(props) {
  const { type, url } = props

  return (
    <Wrapper>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <BlackButton>
          <Title>Watch Videos</Title>
        </BlackButton>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
`

const BlackButton = styled(VideoButtonStyle)`
  display: flex;
`

const Title = styled(DarkButtonText)``
