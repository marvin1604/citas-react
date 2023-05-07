import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logoMarvin.png'

const Header = () => {

  return (
      <Nav>
        <Imagen src={logo}><a href="https://marvin1604-portafolio.netlify.app/"><img src={logo}></img></a></Imagen>
        <Rigth>
            <a href='/'>Inicio sesion</a>
            <a href='/'>Cuenta</a>
            <a href='/'>Cerrar Sesion</a>
        </Rigth>
      </Nav>
  )
}
const Nav= styled.div`
    margin-top:0;
    max-width: 1350px;
    position:fixed;
    display: flex;
    height: 75px;
    width: calc(100% - 30px);
    [padding]:15px;
    backdrop-filter: blur(10px);
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`
const Imagen=styled.div`
img{
  margin-left: 20px;
  width:150px;
}
`
const Rigth= styled.div`
  display:flex;
  gap:20px;
  color: #112DAB;
  font-weight:bold;
  font-size:16px;

  a{
    text-decoration:none;
  }

  @media (max-width: 600px) {
    display: none;
    background:yellow;
  }
`
export default Header
