import React from "react"
import styled from "styled-components"
import { MediumText } from "../styles/TextStyles"
import { FooterText } from "../../components/constants.js"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function Footer() {
  const url = "https://github.com/wendellrodrigues/personalwebsite"

  return (
    <Wrapper>
      <ContentWrapper>
        <AnchorWrapper>
          <AnchorLink to="/#title">
            <Logo src="/images/icons/Logo.svg" />
          </AnchorLink>
        </AnchorWrapper>
        <Description>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Description>{FooterText.line1}</Description>
          </a>
        </Description>
        <Description>{FooterText.line2}</Description>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: black;
  height: auto;
  display: grid;
`

const ContentWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  margin-bottom: 30px;
`

const Description = styled(MediumText)`
  margin: auto;
  margin-bottom: 8px;
  color: white;
`

const Logo = styled.img`
  height: 50px;
  width: 50px;
  margin: auto;
  margin-bottom: 20px;
`

const AnchorWrapper = styled.div`
  margin: auto;
`
