import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { projectRetail_themes } from "./styles/ColorStyles"
import { H2, MediumText } from "./styles/TextStyles"

export default function Profile(props) {
  const { person } = props

  const renderProfile = () => {
    return (
      <ProfileWrapper>
        <ProfilePhoto src={person.photo} />
        <Name>{person.name}</Name>
        <Description>{person.description}</Description>
      </ProfileWrapper>
    )
  }

  return (
    <Wrapper>
      <a href={person.link} target="_blank" rel="noopener noreferrer">
        {renderProfile()}
      </a>
    </Wrapper>
  )
}

const ProfileWrapper = styled.div`
  margin: auto;
  max-width: 200px;
  display: grid;
  gap: 20px;
`

const Wrapper = styled.div`
  border-radius: 20px;
  padding: 20px 20px 20px 20px;
  :hover {
    /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5); */
    //filter: hue-rotate(-10deg) brightness(120%);
    transform: translateY(-0.5px) scale(1.05);
    transition: 2s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const ProfilePhoto = styled.img`
  margin: auto;
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 200px;

  //Switches to one column when small screen
  @media (max-width: 880px) {
    height: 150px;
    width: 150px;
  }

  //Tablets
  @media (max-width: 588px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 400px) {
    height: 70px;
    width: 70px;
  }
`
const Name = styled(H2)`
  color: white;
  margin: auto;
  position: relative;
`
const Description = styled(MediumText)`
  color: white;
  margin: auto;
  position: relative;
`
