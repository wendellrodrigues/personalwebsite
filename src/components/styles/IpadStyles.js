import React from "react"
import styled from "styled-components"

export const iPadDevice = styled.img`
  //Starting size
  width: 742px; //530
  height: 518px; //370

  //Smaller Desktop
  @media (max-width: 742px) {
    width: 588px; //300
    height: 370px; //209
  }

  //Tablets
  @media (max-width: 588px) {
    width: 345px;
    height: 243px;
  }

  //Phones
  @media (max-width: 400px) {
    width: 250px;
    height: 150px;
  }
`

//White Screen of iPad
export const iPadScreen = styled.div`
  //Starting size
  width: 616px; //435px;
  height: 462px; //326px;
  background: white;

  //Below Max Size
  @media (max-width: 742px) {
    width: 442px; //300
    height: 330px; //209
  }

  //Tablets
  @media (max-width: 588px) {
    width: 286px;
    height: 215px;
  }

  //Phones
  @media (max-width: 400px) {
    width: 179px;
    height: 134px;
  }
`

export const iPadScreenOverlay = styled.div`
  //Starting size
  width: 616px; //435px;
  height: 462px; //326px;
  background: black;
  opacity: 0.9;

  //Below Max Size
  @media (max-width: 742px) {
    width: 442px; //300
    height: 330px; //209
  }

  //Tablets
  @media (max-width: 588px) {
    width: 286px;
    height: 215px;
  }

  //Phones
  @media (max-width: 400px) {
    width: 179px;
    height: 134px;
  }
`

//Background of product screen
export const ProductBackground = styled.img`
  //Starting size
  width: 616px; //435px;
  height: 462px; //326px;
  background: white;

  //Below Max Size
  @media (max-width: 742px) {
    width: 442px; //300
    height: 330px; //209
  }

  //Tablets
  @media (max-width: 588px) {
    width: 286px;
    height: 215px;
  }

  //Phones
  @media (max-width: 400px) {
    width: 179px;
    height: 134px;
  }
`

export const iPadTitle = styled.p`
  font-size: 45px;
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

  //Smaller desktop
  @media (max-width: 742px) {
    top: 20%;
    font-size: 30px;
  }

  //Tablet
  @media (max-width: 588px) {
    top: 20%;
    font-size: 20px;
  }

  //Phones
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
  top: 42%;
  left: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  @media (max-width: 742px) {
    top: 40%;
    font-size: 10px;
  }

  @media (max-width: 742px) {
    top: 35%;
    font-size: 10px;
  }

  @media (max-width: 742px) {
    top: 35%;
    font-size: 10px;
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
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-0.5px) scale(1.01);
    .icon {
      transform: scale(1.01);
    }
  }

    @media (max-width: 742px) {
      width: 65px;
      height: 20px;
      border-radius: 5px;
      top: 50%;
    }

    //Smaller phones
  @media (max-width: 400px) {
    width: 47px;
    height: 18px;
    top: 40%;
  }
`
