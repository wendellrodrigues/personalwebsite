import React from "react"
import styled from "styled-components"
import { H3, MediumText } from "./styles/TextStyles"

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
const Name = styled(H3)`
  color: white;
  margin: auto;
  position: relative;
`
const Description = styled(MediumText)`
  color: white;
  margin: auto;
  position: relative;

  //Tablets
  @media (max-width: 588px) {
    text-align: center;
  }
`
