import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { MenuButtonText } from "../../components/styles/TextStyles"

export default function MenuButton(props) {
  const { item } = props

  return (
    <Wrapper>
      <AnchorLink to={item.link}>
        <MenuItem title={item.title}>{item.title}</MenuItem>
      </AnchorLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
`

const MenuItem = styled(MenuButtonText)`
  cursor: pointer;
  color: white;
    :hover {
      filter: hue-rotate(4deg) brightness(70%);
      transform: scale(1.01);
      transition: 1s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
`
