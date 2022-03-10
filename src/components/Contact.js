import React from 'react'
import styled from 'styled-components'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  /* ===== MEDIA QUERIES (MEDIUM DEVICES) ===== */
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* ===== MEDIA QUERIES (SMALL DEVICES) ===== */
  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`
const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`
const ContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  .contact__option-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`
/* ===== FORM ===== */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input, textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-white);
  }
`
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v31h1jz', 'template_zfurjjs', form.current, '22S6reiescaS7ZfwM')
      .then((result) => {
        console.log(result.text);
        alert('메일 전송이 성공되었습니다.')
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <ContactContainer className='container'>
        <ContactOptions>
          <ContactOption>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sangbeomji@gmail.com</h5>
            <a href='mailto:sangbeomji@gmail.com' target='_blank' rel="noopener noreferrer">Send a message</a>
          </ContactOption>
          <ContactOption>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Phone Number</h4>
            <h5>010-5348-7688</h5>
          </ContactOption>
        </ContactOptions>
        {/* END OF CONTACT OPTIONS */}
        <Form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Email' required />
          <BtnContainer>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </BtnContainer>
        </Form>
      </ContactContainer>
    </section>
  )
}

export default Contact