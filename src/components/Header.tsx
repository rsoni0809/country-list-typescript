import React from 'react'
import logo from "../assets/cargill-logo.png";
import { HeaderWrapper } from "./styles";

const Header = () => {
  return (
      <HeaderWrapper><img src={ logo} alt = "cargil-logo" /></HeaderWrapper>
  )
}

export default Header