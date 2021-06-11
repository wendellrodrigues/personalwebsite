import React from "react"
import styled from "styled-components"
import { projectRetail_themes } from "../styles/ColorStyles"
import { H1 } from "../../components/styles/TextStyles"
import Profile from "../Profile.js"
import { ProfileText } from "../../components/constants.js"
import { Parallax } from "react-parallax"

export default function TeamSection(props) {
  let wendell = ProfileText.Wendell
  let chris = ProfileText.Chris
  let camille = ProfileText.Camille
  let kilho = ProfileText.Kilho

  return (
    <Wrapper id="team">
      <Parallax
        renderLayer={percentage => (
          <ContentWrapper
            style={{
              opacity: 1,
            }}
          >
            <Title>Team</Title>
            <ProfileWrapper>
              <Profile person={wendell} />
              <Profile person={chris} />
              <Profile person={kilho} />
              <Profile person={camille} />
            </ProfileWrapper>
          </ContentWrapper>
        )}
      ></Parallax>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 80px 0px 20px 0px;
  display: grid;
  background: ${projectRetail_themes.blue.background};
  height: auto;
  overflow: hidden; //Clip the overflow content

  @media (max-width: 1100px) {
    padding: 90px 0px 20px 0px;
  }

  //Switches to one column when small screen
  @media (max-width: 880px) {
    padding: 0px 0px 0px 0px;
  }
`

const ContentWrapper = styled.div`
  margin: auto;
  display: grid;
`

const Title = styled(H1)`
  position: relative;
  margin: auto;
  color: white;
  margin-bottom: 70px;

  @media (max-width: 880px) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`

const ProfileWrapper = styled.div`
  //max-width: 10000px;
  margin: auto;
  padding: 0px 0px 0px 0px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 100px;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    gap: 70px;
    grid-template-columns: auto auto;
  }

  //Switches to one column when small screen
  @media (max-width: 880px) {
    gap: 50px;
  }

  //Tablets
  @media (max-width: 588px) {
    grid-template-columns: auto;
    margin-bottom: 50px;
    gap: 40px;
  }

  @media (max-width: 400px) {
    gap: 30px;
    margin-bottom: 30px;
  }
`
