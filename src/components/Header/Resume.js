import React from 'react'
import styled from 'styled-components'
import RESUME from '../../assets/Resume_지상범.pdf'

const ResumeDiv = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`

const Resume = () => {
    return (
        <ResumeDiv>
            <a href={RESUME} download className='btn'>Download Resume</a>
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </ResumeDiv>
    )
}

export default Resume