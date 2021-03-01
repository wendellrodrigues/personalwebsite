import React from "react"
import styled from "styled-components"

export const iPhoneDevice = styled.img`
  //Starting size
  width: 260px; //530
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

export const BeaconDevice = styled.img`
  //Starting size
  width: 100px; //530
  height: 100px; //370
  align-self: center;
  opacity: 0.1;

  margin-bottom: 50px;

  //Smaller Desktop
  @media (max-width: 880px) {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  //Tablets
  @media (max-width: 588px) {
    width: 30px;
    height: 30px;
  }

  //Phones
  @media (max-width: 400px) {
    width: 20px;
    height: 20px;
  }
`

export const BeaconPlaceholder = styled(BeaconDevice)`
  opacity: 0.1;
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
  width: 620px; //435px;
  height: 462px; //326px;
  background: black;
  opacity: 0.9;

  //Below Max Size
  @media (max-width: 742px) {
    margin-top: -3px;
    width: 442px; //300
    height: 334px; //209
  }

  //Tablets
  @media (max-width: 588px) {
    width: 289px;
    height: 218px;
  }

  //Phones
  @media (max-width: 400px) {
    width: 189px;
    height: 134px;
  }
`
