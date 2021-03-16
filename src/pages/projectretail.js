import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IphoneSection from "../components/sections/IphoneSection"
import TitleSection from "../components/sections/TitleSection"
import IpadSection from "../components/sections/IpadSection"
import ShelfSection from "../components/sections/ShelfSection"
import ComponentSection from "../components/sections/ComponentSection"
import { Parallax } from "react-parallax"

function ProjectRetailPage() {
  //State for allowing the shelf to flash
  const [shelfFlash, setShelfFlash] = useState(0)
  const [componentState, setComponentState] = useState(1)

  return (
    <Layout>
      <SEO title="Home" />
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
    </Layout>
  )
}

export default ProjectRetailPage
