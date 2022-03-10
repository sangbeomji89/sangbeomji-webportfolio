import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'
import { ImBlog } from 'react-icons/im'

const SocialsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    &::after {
        content: "";
        width: 1px;
        height: 2rem;
        background: var(--color-primary);
    }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Socials = () => {
    return (
        <SocialsDiv>
            <a href='https://github.com/sangbeomji89' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
            <a href='https://velog.io/@johnnyji' target='_blank' rel="noopener noreferrer"><ImBlog /></a>
        </SocialsDiv>
    )
}

export default Socials