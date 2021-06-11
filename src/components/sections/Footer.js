import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, H3, MediumText } from "../styles/TextStyles"
import { FooterText } from "../../components/constants.js"

export default function Footer() {
  const url = "https://github.com/wendellrodrigues/personalwebsite"

  return (
    <Wrapper>
      <ContentWrapper>
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
  height: 150px;
  display: grid;
`

const ContentWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  margin-bottom: 30px;
`

const Description = styled(MediumText)`
  margin: auto;
  color: white;
`
