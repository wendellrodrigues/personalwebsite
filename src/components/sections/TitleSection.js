import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../../components/styles/TextStyles"

import Ipad from "../devices/Ipad.js"
import GithubButton from "../../components/buttons/GithubButton"
import VideoButton from "../../components/buttons/VideoButton"
import ProcessButton from "../../components/buttons/ProcessButton"
import ThreeProcessButtonSet from "../../components/buttons/ThreeProcessButtonSet.js"

import { AnchorLink } from "gatsby-plugin-anchor-links"

import { IpadSectionText } from "../../components/constants.js"
import { Parallax } from "react-parallax"

export default function TitleSection(props) {
  return <Wrapper></Wrapper>
}

const Wrapper = styled.div`
  background: black;
  height: 2000px;
  overflow: hidden;
`
