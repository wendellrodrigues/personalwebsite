/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import "./layout.css"

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
