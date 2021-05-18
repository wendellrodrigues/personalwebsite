import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, H3, MediumText } from "../styles/TextStyles"
import GithubButton from "../../components/buttons/GithubButton"

import CircuitButton from "../../components/buttons/CircuitButton"
import VideoButton from "../../components/buttons/VideoButton"
import { FindMySizeButton, PurpleButtonText } from "../styles/ButtonStyles.js"
import { ComponentSectionText } from "../../components/constants.js"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function CircuitModal(props) {
  const { show, hideModal } = props

  if (props.show == false) {
    return null
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <button type="button" onClick={() => props.hideModal()}>
          Close
        </button>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const ContentWrapper = styled.div`
  border-radius: 20px;
  border-color: black;
  background: black;
  opacity: 0.2;
  height: 100%;
  width: 100%;
`
