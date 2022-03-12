import React from 'react'
import styled from 'styled-components'
import EST from '../assets/E-SPORTS TOWN.gif'
import HRN from '../assets/HedeRightNow.gif'
import DEX from '../assets/DEX SAMPLE.gif'
import "react-shields-badge/dist/react-shields-badge.css";
import styledWr from "@emotion/styled";

export const BadgeWrapper = styledWr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  img {
    border-radius: 0.2rem;
    width: 100px;
    height: 25px;
  }
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`
const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  h2,p {
    margin: 1.2rem;
  }
`
const PortfolioItemImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`
const PortfolioItemResume = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  justify-content: center;
`

const portfolio = [
  {
    id: 1,
    image: EST,
    title: 'E-SPORTS TOWN',
    description: '게임 NFT Minting 및 단일/공동 구매 플렛폼',
    github: 'https://github.com/sangbeomji89/E-SPORTS-TOWN',
    skillset: [
      "https://img.shields.io/static/v1?label=Reactjs&message=FE&color=inactive",
      "https://img.shields.io/static/v1?label=Zustand&message=FE&color=inactive",
      "https://img.shields.io/static/v1?label=Expressjs&message=BE&color=inactive",
      "https://img.shields.io/static/v1?label=MongoDB&message=DB&color=inactive",
      "https://img.shields.io/static/v1?label=Solidity&message=BC&color=inactive",
      "https://img.shields.io/static/v1?label=Web3js&message=BC&color=inactive",
      "https://img.shields.io/static/v1?label=Ethersjs&message=BC&color=inactive",
      "https://img.shields.io/static/v1?label=Ganache&message=BC&color=inactive",
    ],
  },
  {
    id: 2,
    image: HRN,
    title: 'HedeRightNow',
    description: 'Hedera Wallet 및 Explorer',
    github: 'https://github.com/codestates/HederightNow',
    skillset: [
      "https://img.shields.io/static/v1?label=Reactjs&message=FE&color=inactive",
      "https://img.shields.io/static/v1?label=Spring&message=BE&color=inactive",
      "https://img.shields.io/static/v1?label=Hedera&message=BC&color=inactive",
    ],
  },
  {
    id: 3,
    image: DEX,
    title: 'DEX',
    description: '1Inch Defi/DEX API 활용한 DEX 서비스',
    github: 'https://github.com/sangbeomji89/DexSample',
    skillset: [
      "https://img.shields.io/static/v1?label=HTML&message=FE&color=inactive",
      "https://img.shields.io/static/v1?label=CSS&message=FE&color=inactive",
      "https://img.shields.io/static/v1?label=Javascript&message=FE&color=inactive",
      "https://img.shields.io/static/v1?label=morails&message=BC&color=inactive",
      "https://img.shields.io/static/v1?label=bootstrap&message=FE&color=inactive",
    ],
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <PortfolioContainer className="container">
        {
          portfolio.map(({ id, image, title, description, github, skillset }) => {
            return (
              <PortfolioItem key={id} >
                <PortfolioItemImage>
                  <img src={image} alt={title} />
                </PortfolioItemImage>
                <h2>{title}</h2>
                <p>{description}</p>
                <BadgeWrapper>
                  {skillset.map((el) => {
                    return (
                      <img src={el} />
                    )
                  })}
                </BadgeWrapper>
                <PortfolioItemResume>
                  <a href={github} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Github</a>
                </PortfolioItemResume>
              </PortfolioItem>
            )
          })
        }
      </PortfolioContainer>
    </section>
  )
}

export default Portfolio