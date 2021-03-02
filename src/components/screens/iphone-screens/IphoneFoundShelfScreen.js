import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../../components/layout"
import Image from "../../../components/image"
import SEO from "../../../components/seo"
import { projectRetail_themes } from "../../styles/ColorStyles"
import { H1, MediumText } from "../../styles/TextStyles"
import { BeginButtonText } from "../../../components/styles/TextStyles"

import { iPhoneScreen } from "../../../components/styles/IphoneStyles.js"

import {
  PurpleButton,
  PurpleButtonText,
} from "../../../components/styles/ButtonStyles"

export default function IphoneFoundShelfScreen(props) {
  return <Screen src="/images/components/IphoneFoundShelfScreen.png" />
}

const Screen = styled(iPhoneScreen)``
