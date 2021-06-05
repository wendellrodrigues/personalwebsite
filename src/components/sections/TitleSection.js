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

import { IntroductionText } from "../../components/constants.js"
import { Parallax } from "react-parallax"

export default function TitleSection(props) {
  return (
    <Wrapper id="title">
      <ContentWrapper>
        <Title src="/images/icons/ProjectRetailTitle.png" />
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/etmvmL8-_Xg"
            title="YouTube video player"
            frameborder="0"
            class="video"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Description>{IntroductionText}</Description>
        <NextPageWrapper>
          <AnchorLink to="/#iphone">
            <NextPage>Learn More</NextPage>
          </AnchorLink>
        </NextPageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: black;
  height: auto;
  overflow: hidden;
`
const ContentWrapper = styled.div`
  margin: auto;
  display: grid;
  gap: 50px;

  @media (max-width: 742px) {
  }

  //Phones
  @media (max-width: 400px) {
    //padding: 30px 0px 0px 0px;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 0px;
  width: 735px;
  height: 413px;

  .video {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const Title = styled.img`
  margin: auto;
  width: 500px;
  margin-top: 150px;
`

const Description = styled(MediumText)`
  //max-width: 847px;
  color: white;
  margin: auto;
  min-height: 175px;
  max-width: 900px;
  text-align: center;
  padding: 30px;
  margin-bottom: -70px;

  @media (max-width: 742px) {
    padding: 0px 20px 0px 20px;
    min-height: 130px;
    margin-bottom: auto;
  }

  @media (max-width: 400px) {
    min-height: 130px;
  }
`

const NextPageWrapper = styled.div`
  margin: auto;
  margin-bottom: 50px;

  cursor: pointer;

  //Tablets
  @media (max-width: 588px) {
    margin-bottom: 30px;
  }

  //Phones
  @media (max-width: 400px) {
    margin-bottom: 30px;
    margin-top: -10px;
  }
`
const NextPage = styled(MediumText)`
  color: ${projectRetail_themes.blue.text1};
`
