import React from "react"
import { Link } from "gatsby"
import IpadSection from "../components/sections/IpadSection.js"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IpadSection />
  </Layout>
)

export default IndexPage
