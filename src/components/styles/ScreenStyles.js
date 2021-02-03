import React from "react"
import styled from "styled-components"

export const iPadScreen = styled.div`
  width: 435px;
  height: 326px;
  background: white;

  //Larger Phones
  @media (max-width: 530px) {
    width: 247px;
    height: 174px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    width: 176px;
    height: 124px;
  }
`

export const iPadTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  width: 100%;
  //height: 100%;
  position: absolute;
  top: 30%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  //Larger Phones
  @media (max-width: 530px) {
    top: 20%;
    font-size: 20px;
  }

  //Smaller phones
  @media (max-width: 400px) {
    font-size: 18px;
  }
`

export const iPadSubtitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  color: #545353;
  //height: 100%;
  position: absolute;
  top: 40%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  @media (max-width: 530px) {
    top: 32%;
    font-size: 10px;
  }
`

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

  ${BigCircleButton}:hover & {
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
  *,
  & {
    transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); \
  }

   :hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-0.5px) scale(1.01);
`

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
  position: relative; //Makes sure its children's positions defaults
`
