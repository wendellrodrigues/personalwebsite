import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../../components/styles/TextStyles"

export default function ShelfSection() {
  return <Wrapper id="shelf"></Wrapper>
}

const Wrapper = styled.div`
  background: black;
  height: 1500px;
  overflow: hidden; //Clip the overflow content
`
