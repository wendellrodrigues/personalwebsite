import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"

import { iPhoneDevice } from "../../components/styles/IphoneStyles.js"

export default function Iphone(props) {
  return (
    <IphoneWrapper>
      <IphoneImg src="/images/devices/iPhone.svg" alt="iPhone" />
    </IphoneWrapper>
  )
}

const IphoneWrapper = styled.div`
  margin: auto;
  position: relative;
`

const IphoneImg = styled(iPhoneDevice)``
