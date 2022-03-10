import React from 'react'
import styled from 'styled-components'
import ME from '../assets/anonymous-mask-me.png'
import { SiEthereum } from 'react-icons/si'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const AboutDiv = styled.div`
  display: grid;
  grid-template-columns: 40% 50%;
  gap: 10%;

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`
const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
      45deg,
      transparent,
      var(--color-primary),
      transparent
  );
  display: grid;
  place-items: center;

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`
const AboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  animation: rotate_image 10s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image{
	100% {
    	transform: rotate(360deg);
  }
}
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);

    /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
    @media screen and (max-width: 1024px) {
      margin: 1rem 0 1.5rem;
    }

    /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
    @media screen and (max-width: 600px) {
      margin: 1.5rem 0;
    }
  }

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`
const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  &.about__icon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  &h5 {
    font-size: 0.95rem;
  }

  &small {
    font-size: 0.7rem;
    color: var(--color-light);
  }
`
const AboutDescription = styled.div`
  margin-bottom: 1rem;
`
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutDiv className="container">
        <AboutMe>
          <AboutMeImage>
            <img src={ME} alt='profile' />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutCards>
            <AboutCard>
              <SiEthereum className='about__icon' />
              <h5>To BlockChain</h5>
              <small>From Embedded</small>
            </AboutCard>

            <AboutCard>
              <AiOutlineFundProjectionScreen className='about__icon' />
              <h5>Project Based</h5>
              <small>Engineer</small>
            </AboutCard>


          </AboutCards>

          <div>
            <SiEthereum className='about__icon' /> 새로 접한 분야에 대한 호기심과 도전정신
            <AboutDescription>
              처음 Blockchain을 접했을 때, 무관심과 두려움이 아닌 어떤 기술이고 어떻게 활용될 수 있을지에 대해 호기심을 가지게 되었습니다. 전문 지식과 프로젝트 경험을 찾기 위해 CodeStates Blockchain Bootcamp 과정에 참여하여 Blockchain 개발자로서 성장하였습니다.
            </AboutDescription>
            <AiOutlineFundProjectionScreen className='about__icon' /> 프로젝트 기반 개발 경험
            <AboutDescription>
              이론 내용에 대한 학습에 그치지 않고, 개인 프로젝트를 통해 배운 내용을 습득하고 활용방안을 검토하는 활동을 했습니다. 개인 프로젝트는 Github에 업로드하고 있습니다.
            </AboutDescription>
          </div>

          <BtnContainer>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </BtnContainer>
        </AboutContent>
      </AboutDiv>
    </section>
  )
}

export default About