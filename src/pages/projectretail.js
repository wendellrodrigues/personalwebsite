import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IphoneSection from "../components/sections/IphoneSection"
import IpadSection from "../components/sections/IpadSection"
import ShelfSection from "../components/sections/ShelfSection"

function ProjectRetailPage() {
  //State for allowing the shelf to flash
  const [shelfFlash, setShelfFlash] = useState(0)

  return (
    <Layout>
      <SEO title="Home" />
      <IphoneSection />
      <IpadSection setShelfFlash={shelfFlash => setShelfFlash(shelfFlash)} />
      <ShelfSection
        flash={shelfFlash}
        setFlash={shelfFlash => setShelfFlash(shelfFlash)}
      />
    </Layout>
  )
}

export default ProjectRetailPage
