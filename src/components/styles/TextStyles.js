import styled from "styled-components"

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 50px;

  //Smaller Desktop
  @media (max-width: 880px) {
    font-size: 40px;
  }

  //Tablets
  @media (max-width: 588px) {
    font-size: 30px;
  }

  //Phones
  @media (max-width: 400px) {
    font-size: 20px;
  }
`

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 40px;
`

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 500px) {
    font-size: 30px;
  }

  //Phones
  @media (max-width: 400px) {
    font-size: 20px;
  }
`

export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
`

export const MediumText = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;

  @media (max-width: 588px) {
    font-size: 12px;
  }

  //Phones
  @media (max-width: 400px) {
    font-size: 12px;
  }
`

export const Caption = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
`

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`

export const ButtonText = styled.p`
  font-weight: 700;
  font-size: 13px;
`

export const DarkButtonText = styled.p`
  font-weight: 700;
  font-size: 13px;
  color: white;
`

export const BeginButtonText = styled.p`
  font-weight: 700;
  font-size: 13px;
  color: white;
`

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`
