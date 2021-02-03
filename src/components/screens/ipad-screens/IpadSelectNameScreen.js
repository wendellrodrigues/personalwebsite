import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { projectRetail_themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"
import { BeginButtonText } from "../../../components/styles/TextStyles"

import {
  iPadScreen,
  iPadTitle,
  iPadSubtitle,
} from "../../../components/styles/ScreenStyles.js"

export default function IpadSelectNameScreen(props) {
  return (
    <Screen>
      <ContentWrapper>
        <Title>Begin</Title>
        <Subtitle>Select your name below</Subtitle>
      </ContentWrapper>
    </Screen>
  )
}

const Screen = styled(iPadScreen)``

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

const Title = styled(iPadTitle)``

const Subtitle = styled(iPadSubtitle)``
