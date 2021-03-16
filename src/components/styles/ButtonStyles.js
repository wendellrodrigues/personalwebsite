import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../../components/styles/TextStyles"
import { projectRetail_themes } from "../styles/ColorStyles"

//Circle Button that goes into process buttons
export const BigCircleButton = styled.div`
  background: ${props => (props.isSelected ? "#ffffff" : "#A6A9F0")};
  width: 62px;
  height: 62px;
  box-shadow: 0px 10px 20px rgba(182, 153, 255, 0.3);
  border-radius: 50%; //Circle
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  //Larger Phones
  @media (max-width: 742px) {
    width: 50px;
    height: 50px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
  }

  :hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-0.5px) scale(1.01);
  }
`

export const DarkBigCircleButton = styled(BigCircleButton)`
  background: ${props =>
    props.isSelected ? "black" : projectRetail_themes.blue.background};
`

//Small Circle (Not button, that goes in between the big circle process buttons)
export const SmallCircleStyle = styled.div`
  width: 10px;
  height: 10px;
  background: #ffffff;
  top: 40%;
  border-radius: 50%; //Circle
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  //Larger Phones
  @media (max-width: 742px) {
    width: 5px;
    height: 5px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 5px;
    height: 5px;
  }
`

export const DarkSmallCircleStyle = styled(SmallCircleStyle)`
  background: black;
`

export const ThreeProcessWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, auto);
  gap: 20px;
  justify-content: center;
  align-content: center;
  position: relative;

  //Larger Phones
  @media (max-width: 742px;) {
    gap: 8px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    gap: 8px;
  }
`

export const PurpleButton = styled.div`
  width: 175px; //120px;
  height: 42px; //30px;
  position: absolute;
  top: 60%;
  background: #6a80fb;
  border-radius: 12px;
  display: grid;
  justify-content: center;
  align-items: center;
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); \
  }
  :hover {
    filter: hue-rotate(4deg) brightness(110%);
    //background: #516afb;
    cursor: pointer;
    transform: translateY(-0.5px) scale(1.01);
    .icon {
      transform: scale(1.01);
    }
  }

  //Smaller Desktop
  @media (max-width: 742px) {
    width: 100px;
    height: 30px;
    border-radius: 10px;
  }

  //iPad
  @media (max-width: 588px) {
    width: 80px;
    height: 25px;
    border-radius: 10px;
  }

    //Smaller phones
  @media (max-width: 400px) {
    width: 47px;
    height: 18px;
     border-radius: 5px;
  }
`

export const FindMySizeButton = styled(PurpleButton)`
  width: 160px; //120px;
  height: 35px; //30px;

  @media (max-width: 742px) {
    width: 118px;
    height: 27px;
    border-radius: 10px;
  }

  //iPad
  @media (max-width: 588px) {
    width: 80px;
    height: 20px;
    border-radius: 8px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 46px;
    height: 13px;
    border-radius: 5px;
  }
`

export const ExitRedButton = styled.div`

  width: 160px; //120px;
  height: 35px; //30px;
  position: absolute;
  top: 60%;
  background: #fb776a;
  border-radius: 12px;
  display: grid;
  justify-content: center;
  align-items: center;
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); \
  }
  :hover {
    filter: hue-rotate(4deg) brightness(110%);
    //background: #516afb;
    cursor: pointer;
    transform: translateY(-0.5px) scale(1.01);
    .icon {
      transform: scale(1.01);
    }
  }

  @media (max-width: 742px) {
    width: 118px;
    height: 27px;
    border-radius: 10px;
  }

  //iPad
  @media (max-width: 588px) {
    width: 80px;
    height: 20px;
    border-radius: 8px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 46px;
    height: 13px;
    border-radius: 5px;
  }
`

export const PurpleButtonText = styled.p`
  font-weight: 700;
  font-size: 17px;
  color: white;

  @media (max-width: 742px) {
    font-size: 14px;
  }

  @media (max-width: 588px) {
    font-size: 10px;
  }

  @media (max-width: 400px) {
    font-size: 8px;
  }
`

export const GithubButtonWhiteStyle = styled.div`
 width: 175px;
  height: 41px;
  background: white;
  border-radius: 15px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 15px;
  color: black;

  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); \
  }
  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-0.5px) scale(1.01);
    .icon {
      transform: scale(1.01);
    }
  }
  `

export const GithubButtonGrayStyle = styled(GithubButtonWhiteStyle)`
  background: #d9d9d9;
`

export const VideoButtonStyle = styled(GithubButtonWhiteStyle)`
  background: #2d2d2d;
`
