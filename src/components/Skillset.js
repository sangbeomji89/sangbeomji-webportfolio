import React from 'react'
import styled from 'styled-components'
import { BsPatchCheckFill } from 'react-icons/bs'

const SkillsetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`
const SkillsetFrontBack = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`
const SkillsetContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  row-gap: 2rem;

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`
const SkillsetDetails = styled.article`
  display: flex;
  gap: 1rem ;

  .experience__defails-icon {
    margin-top: 6px;
    color: var(--color-primary);
  }
`

const blockChain = [
  {
    id: 1,
    skill: 'Web3js',
    level: 'Experienced',
  },
  {
    id: 2,
    skill: 'Caverjs',
    level: 'Experienced',
  },
  {
    id: 3,
    skill: 'Solidity',
    level: 'Experienced',
  },
  {
    id: 4,
    skill: 'Ganache',
    level: 'Experienced',
  },
  {
    id: 5,
    skill: 'Moralis',
    level: 'Basic',
  },
  {
    id: 6,
    skill: 'Hedera',
    level: 'Basic',
  },
]

const frontEnd = [
  {
    id: 1,
    skill: 'Reactjs',
    level: 'Experienced',
  },
  {
    id: 2,
    skill: 'Redux',
    level: 'Experienced',
  },
  {
    id: 3,
    skill: 'Zustand',
    level: 'Experienced',
  },
  {
    id: 4,
    skill: 'Javascript',
    level: 'Experienced',
  },
  {
    id: 5,
    skill: 'StyledComponent',
    level: 'Basic',
  },
  {
    id: 6,
    skill: 'Typescript',
    level: 'Basic',
  },
]

const backEnd = [
  {
    id: 1,
    skill: 'Nodejs',
    level: 'Experienced',
  },
  {
    id: 2,
    skill: 'Express',
    level: 'Experienced',
  },
  {
    id: 3,
    skill: 'MongoDB',
    level: 'Experienced',
  },
  {
    id: 4,
    skill: 'MySQL',
    level: 'Experienced',
  },
  {
    id: 5,
    skill: 'Python',
    level: 'Basic',
  },
  {
    id: 6,
    skill: 'Spring',
    level: 'Basic',
  },
]

const Skillset = () => {
  return (
    <section id='skillset'>
      <h5>What Skills I Have</h5>
      <h2>Tech Stack</h2>

      <SkillsetContainer className="container">
        <SkillsetFrontBack>
          <h3>BlockChain</h3>
          <SkillsetContent>
            {
              blockChain.map((el) => {
                return (
                  <SkillsetDetails key={el.id}>
                    <BsPatchCheckFill className='experience__defails-icon' />
                    <div>
                      <h4>{el.skill}</h4>
                      <small className='text-light'>{el.level}</small>
                    </div>
                  </SkillsetDetails>
                )
              })
            }
          </SkillsetContent>
        </SkillsetFrontBack>
        {/* END OF BLOCKCHAIN */}

        <SkillsetFrontBack>
          <h3>Frontend</h3>
          <SkillsetContent>
            {
              frontEnd.map((el) => {
                return (
                  <SkillsetDetails key={el.id}>
                    <BsPatchCheckFill className='experience__defails-icon' />
                    <div>
                      <h4>{el.skill}</h4>
                      <small className='text-light'>{el.level}</small>
                    </div>
                  </SkillsetDetails>
                )
              })
            }
          </SkillsetContent>
        </SkillsetFrontBack>
        {/* END OF FRONTEND */}

        <SkillsetFrontBack>
          <h3>Backend</h3>
          <SkillsetContent>
            {
              backEnd.map((el) => {
                return (
                  <SkillsetDetails key={el.id}>
                    <BsPatchCheckFill className='experience__defails-icon' />
                    <div>
                      <h4>{el.skill}</h4>
                      <small className='text-light'>{el.level}</small>
                    </div>
                  </SkillsetDetails>
                )
              })
            }
          </SkillsetContent>
        </SkillsetFrontBack>
        {/* END OF BACKEND */}

      </SkillsetContainer>
    </section>
  )
}

export default Skillset