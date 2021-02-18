import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IphoneSection from "../components/sections/IphoneSection"
import IpadSection from "../components/sections/IpadSection"
import ShelfSection from "../components/sections/ShelfSection"

function ProjectRetailPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <IphoneSection />
      <IpadSection />
      <ShelfSection />
    </Layout>
  )
}

export default ProjectRetailPage
