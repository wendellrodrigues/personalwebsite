import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../../components/constants.js"
import MenuButton from "../buttons/MenuButton"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  //prevents default clicking behavior for menu button
  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  //Click outside of profile button to dismiss  dropdown
  //Use effect listens to every single state change

  return (
    <Wrapper>
      <Link to="/">
        <Logo src="/images/icons/Logo.svg" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) => (
          <MenuButton item={item} key={index} />
        ))}
        {/* <HamburgerWrapper>
          <MenuButton
            item={{
              title: "",
              icon: "/images/icons/hamburger.svg",
              link: "/",
            }}
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper> */}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 100px 100px 100px;
  align-items: center;

  @media (max-width: 850px) {
    display: none;
    grid-template-columns: auto;
    justify-content: space-around;
    margin: auto;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`

const Logo = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 1000px) {
    display: none;
  }
`

// const HamburgerWrapper = styled.div`
//   display: none;

//   @media (max-width: 900px) {
//     display: block;
//   }
// `
