import React from 'react'
import styled from 'styled-components'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'

const NavDiv = styled.div`

  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  &a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;
  }

  &a:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &a.active {
    background: var(--color-primary);
    color: var(--color-bg);
  }
`

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#head')
  return (
    <NavDiv>
      <a href='#head' onClick={() => setActiveNav('#head')} className={activeNav === '#head' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#skillset' onClick={() => setActiveNav('#skillset')} className={activeNav === '#skillset' ? 'active' : ''}><BiBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </NavDiv>
  )
}

export default Nav