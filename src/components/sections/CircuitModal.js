import React, { Component, useState } from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1, H3, MediumText } from "../styles/TextStyles"
import GithubButton from "../../components/buttons/GithubButton"

//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import CircuitButton from "../../components/buttons/CircuitButton"
import VideoButton from "../../components/buttons/VideoButton"
import { FindMySizeButton, PurpleButtonText } from "../styles/ButtonStyles.js"
import { ComponentSectionText } from "../../components/constants.js"
import { AnchorLink } from "gatsby-plugin-anchor-links"

//Images
import Schematic from "../../../static/images/components/Schematic.png"

export default function CircuitModal(props) {
  const { show, hideModal } = props

  //Settings for carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  if (props.show == false) {
    return null
  }

  //renderArrowPrev={false} renderArrowNext={false}

  return (
    <Wrapper>
      <ContentWrapper>
        <Icon
          src="/images/icons/Exit.svg"
          className="icon"
          onClick={() => props.hideModal()}
        />
        <CarouselWrapper>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
          >
            <CarouselImageWrapper>
              <img className="photo" src="/images/components/Shelf.jpeg" />
            </CarouselImageWrapper>
            <CarouselImageWrapper>
              <img src="/images/components/ShelfWithBox.jpeg" />
            </CarouselImageWrapper>
            <CarouselImageWrapper>
              <img src="/images/components/SolderedCircuit.jpeg" />
            </CarouselImageWrapper>
            <CarouselImageWrapper>
              <img src="/images/components/Schematic.png" />
            </CarouselImageWrapper>
          </Carousel>
        </CarouselWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const ExitButton = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background: black;
  opacity: 0.2;
`

const Icon = styled.img`
  position: absolute;
  top: 10%;
  right: 2%;
  width: 30px;
  height: 30px;
  cursor: pointer;

  :hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

//<Schematic src="/images/components/Schematic.png" />
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 100px 10px #ebf2fc;
  //border-radius: 20px;
`

const ContentWrapper = styled.div`
  //background: #cdd1ce;
  height: 110%;
  width: 100%;
  margin: auto;

  @media (max-width: 742px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`

const CarouselWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
  height: 130%;
  margin-top: 50px;

  @media (max-width: 742px) {
    height: 100%;
  }

  @media (max-width: 400px) {
    height: 100%;
  }
`

const CarouselImageWrapper = styled.div`
  max-height: 500px;
  margin-top: 70px;

  img {
    max-height: 100%;
    width: 100%;
  }
`
