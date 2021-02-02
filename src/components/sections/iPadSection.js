import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../../components/styles/TextStyles"

import Ipad from "../devices/Ipad.js"
import GithubButton from "../../components/buttons/GithubButton"

export default function IpadSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>iPad App</Title>
        <Ipad />
        <Description>
          The iPad App accompanies the iPads that are placed on specific shelves
          around the clothing store, of which customers are able to approach.
          When a customer approaches a shelf, they become a nearby user, and
          when they select Begin, the iPad sends a request to display nearby
          users.
        </Description>
        <GithubButton url="https://github.com/wendellrodrigues/projectretail-storeClient" />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${projectRetail_themes.blue.background};
  height: 1024px;
  //overflow: hidden; //Clip the overflow content
`

const ContentWrapper = styled.div`
  max-width: 847px;
  margin: auto;
  padding: 100px 0px 0px 0px;
  display: grid;
  gap: 60px;
`

const Title = styled(H1)`
  margin: auto;
  color: ${projectRetail_themes.blue.text1};
`

const Description = styled(MediumText)`
  max-width: 847px;
  color: ${projectRetail_themes.blue.text1};
`

/**
    <Wrapper>
      <p>Hello</p>
      <BlueBackground />
    </Wrapper> */
