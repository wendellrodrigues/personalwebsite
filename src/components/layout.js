/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Parallax } from "react-parallax"

import Header from "./header"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
