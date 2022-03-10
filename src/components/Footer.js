import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'

const Footerftr = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }
`
const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`
const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`
const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;

    :hover {
    background: transparent;
    color: var(--color-bg);
    border-color: var(--color-bg);
    }
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    margin-bottom: 2.6rem;
  }
`
const FooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`

const Footer = () => {
  return (
    <Footerftr>
      <FooterLogo href='#head' >SangBeomJI, 지상범</FooterLogo>

      <Permalinks>
        <li><a href='#head'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skillset'>Skillset</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </Permalinks>

      <FooterSocials>
        <a href='https://github.com/sangbeomji89' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href='https://velog.io/@johnnyji' target='_blank' rel="noopener noreferrer"><ImBlog /></a>
      </FooterSocials>

      <FooterCopyright>
        <small>&copy; sangbeomji. All rights reserved.</small>
      </FooterCopyright>
    </Footerftr>
  )
}

export default Footer