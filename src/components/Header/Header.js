import React from 'react'
import styled from 'styled-components'
import ME from '../../assets/ironman-me.png'
import Resume from './Resume'
import Socials from './Socials'

const Headerhdr = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    height: 100vh;
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`

const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`
const MeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Me = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`
const ScrollDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Header = () => {
  return (
    <Headerhdr id='head'>
      <HeaderContainer className="container">
        <h3>안녕하세요.</h3>
        <h1>지상범 지원자입니다.</h1>
        <h4 className='text-light'>BlockChain Developer</h4>
        <Resume />
        <Socials />
        <MeContainer>
          <Me>
            <img src={ME} alt='profile' />
          </Me>
        </MeContainer>

        <ScrollDown href='#contact' >Scroll Down</ScrollDown>
      </HeaderContainer>
    </Headerhdr>
  )
}

export default Header