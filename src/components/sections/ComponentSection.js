import React from "react"
import styled, { keyframes } from "styled-components"
import { H1, H3, MediumText } from "../styles/TextStyles"
import GithubButton from "../../components/buttons/GithubButton"

import CircuitButton from "../../components/buttons/CircuitButton"
import VideoButton from "../../components/buttons/VideoButton"
import { ComponentSectionText } from "../../components/constants.js"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export default function ComponentSection(props) {
  const { state, setState } = props

  const loadInfo = () => {
    if (state === 1) {
      return {
        title: "Beacon",
        description: ComponentSectionText.Beacon_description,
      }
    } else if (state === 2) {
      return {
        title: "API",
        description: ComponentSectionText.API_description,
      }
    } else if (state === 3) {
      return {
        title: "Shelf Circuit",
        description: ComponentSectionText.Circuit_description,
      }
    }
  }

  const loadButtons = () => {
    if (state === 1) {
      return (
        <ButtonWrapper>
          <VideoButton url="https://www.youtube.com/watch?v=etmvmL8-_Xg&list=PLZ5gmo-fqIUHvlW3LAPlnsw9Pe3Q2CQL9&index=2" />
        </ButtonWrapper>
      )
    } else if (state === 2) {
      return (
        <ButtonWrapper>
          <GithubButton
            type="light"
            url="https://github.com/wendellrodrigues/projectretail-server"
          />
        </ButtonWrapper>
      )
    } else if (state === 3) {
      return (
        <ThreeColumnButtonWrapper>
          <GithubButton
            type="light"
            url="https://github.com/wendellrodrigues/projectretail-arduino"
          />
          <VideoButton url="https://www.youtube.com/watch?v=etmvmL8-_Xg&list=PLZ5gmo-fqIUHvlW3LAPlnsw9Pe3Q2CQL9&index=2" />
          <CircuitButton url="https://www.flickr.com/photos/193053728@N06/albums/72157719217811691" />
        </ThreeColumnButtonWrapper>
      )
    }
  }

  const renderInfo = () => {
    return (
      <InfoWrapper>
        <ComponentTitle>{loadInfo().title}</ComponentTitle>
        <Description>{loadInfo().description}</Description>
        {loadButtons()}
      </InfoWrapper>
    )
  }

  return (
    <Wrapper id="component">
      <ContentWrapper>
        <Title>Other Components</Title>
        <BodyWrapper>
          <DeviceWrapper>
            <Device
              selected={state === 1}
              src="/images/devices/Beacon.svg"
              onClick={() => setState(1)}
            />
            <Device
              selected={state === 2}
              src="/images/devices/Server.svg"
              onClick={() => setState(2)}
            />
            <Device
              selected={state === 3}
              src="/images/devices/Circuit.svg"
              onClick={() => setState(3)}
            />
          </DeviceWrapper>
          {renderInfo()}
        </BodyWrapper>
        <Technologies src="/images/icons/Technologies.svg" className="icon" />
        <NextPageWrapper>
          <AnchorLink to="/#team">
            <NextPage>Meet the team</NextPage>
          </AnchorLink>
        </NextPageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const fadeIn = keyframes`
  0% { opacity: 0.1;  }
  100% { opacity: 1; }
`

const Wrapper = styled.div`
  background: white;
  height: auto;
  display: grid;
  margin: auto;
`

const ContentWrapper = styled.div`
  max-width: 847px;
  margin: auto;
  padding: 150px 30px 50px 30px;
  display: grid;
  gap: 100px;
  justify-content: center;

  @media (max-width: 847px) {
    padding: 70px 30px 50px 30px;
    gap: 70px;
  }

  @media (max-width: 744px) {
    gap: 30px;
  }

  @media (max-width: 500px) {
    gap: 20px;
  }

  @media (max-width: 400px) {
    gap: 20px;
  }
`

const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 100px;

  @media (max-width: 744px) {
    grid-template-columns: auto;
    justify-items: center;
  }

  @media (max-width: 500px) {
    gap: 30px;
  }

  @media (max-width: 400px) {
    gap: 30px;
  }
`

const InfoWrapper = styled.div`
  position: relative;
  display: grid;

  @media (max-width: 744px) {
    gap: 60px;
  }
`

const Title = styled(H1)`
  @media (max-width: 744px) {
    justify-self: center;
  }
`

const DeviceWrapper = styled.div`
  display: grid;
  gap: 60px;

  @media (max-width: 744px) {
    display: flex;
    margin-top: 20px;
    gap: 0px;
  }
`

const Device = styled.img`
  width: 100px;

  @media (max-width: 744px) {
    //width: 600px;
    width: 80px;
    max-height: 50px;
    margin-right: 45px;
    margin-left: 45px;
    //ustify-content: center;
    //align-content: space-around;
  }

  @media (max-width: 500px) {
    width: 50px;
    margin-right: 15px;
    margin-left: 15px;
  }

  opacity: ${props => (props.selected ? "1" : "0.5")};
  cursor: pointer;
  transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: translateY(-0.5px) scale(1.01);
    opacity: 0.7;
  }
`

const ComponentTitle = styled(H3)`
  @media (max-width: 744px) {
    justify-self: center;
  }
`
const Description = styled(MediumText)`
  margin-top: -30px;
`
const ButtonWrapper = styled.div`
  opacity: 0;
  align-self: end;
  animation: ${fadeIn} 1s 0.1s forwards;
  @media (max-width: 744px) {
    justify-self: center;
  }
`

const ThreeColumnButtonWrapper = styled.div`
  opacity: 0;
  align-self: end;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  justify-self: start;
  animation: ${fadeIn} 1s 0.1s forwards;

  @media (max-width: 744px) {
    justify-self: center;
  }

  @media (max-width: 500px) {
    justify-self: center;
    grid-template-columns: auto;
    gap: 15px;
  }
`

const Technologies = styled.img`
  margin-top: 100px;
  width: 100%;

  @media (max-width: 400px) {
    margin-top: 20px;
    width: 90%;
    margin: auto;
  }
`
const NextPageWrapper = styled.div`
  margin: auto;
  cursor: pointer;

  //Tablets
  @media (max-width: 588px) {
    margin-bottom: 10px;
  }
  //Phones
  @media (max-width: 400px) {
    margin-bottom: 30px;
    margin-top: -10px;
    margin: auto;
  }
`

const NextPage = styled(MediumText)`
  color: black;
`
