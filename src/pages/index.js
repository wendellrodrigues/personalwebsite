import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IphoneSection from "../components/sections/IphoneSection"
import TitleSection from "../components/sections/TitleSection"
import IpadSection from "../components/sections/IpadSection"
import ShelfSection from "../components/sections/ShelfSection"
import ComponentSection from "../components/sections/ComponentSection"
import TeamSection from "../components/sections/TeamSection"
import Footer from "../components/sections/Footer"
import { Parallax } from "react-parallax"

const IndexPage = () => {
  //State for allowing the shelf to flash
  const [shelfFlash, setShelfFlash] = useState(0)
  const [componentState, setComponentState] = useState(1)

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <TitleSection />
        <IphoneSection />
        <IpadSection setShelfFlash={shelfFlash => setShelfFlash(shelfFlash)} />
        <ShelfSection
          flash={shelfFlash}
          setFlash={shelfFlash => setShelfFlash(shelfFlash)}
          componentState={componentState}
          setComponent={componentState => setComponentState(3)}
        />
        <ComponentSection
          state={componentState}
          setState={componentState => setComponentState(componentState)}
        />
        <TeamSection />
        <Footer />
      </Wrapper>
    </Layout>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 70%;
  width: 70%;
  margin-left: -35%;
  margin-top: -20%;
`

const Wrapper = styled.div`
  //Blur on modal
  filter: ${props => (props.show == true ? "blur(8px)" : "none")};
  transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
`

export default IndexPage
