import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ButtonText } from "../../components/styles/TextStyles"

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

const WhiteButton = styled.div`
  width: 175px;
  height: 41px;
  background: #ffffff;
  border-radius: 15px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 15px;

  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); \
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

const Title = styled(ButtonText)`
  color: black;
`
