import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MdAlternateEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { GiRotaryPhone } from 'react-icons/gi'
import { BiMailSend } from 'react-icons/bi'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs
      .sendForm(
        process.env.REACT_APP_MY_SERVICE_ID,

        process.env.REACT_APP_MY_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_MY_PUBLIC_KEY
      )

      .then(
        () => {
          alert('Message Successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Faild to send the message, Please try again!')
        }
      )
  }

  return (
    <>
      <div className="hero contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact  me  .'.split('')}
              index={15}
            />
          </h1>
          <p>
            I'm open to full time job offers or freelance opertunities. if you
            have any question or request, Please don't hasitate to contact me.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="contact-options">
          <article className="contact-card">
            <h4>Email</h4>
            <h5>
              <MdAlternateEmail /> caeserlondon@gmail.com
            </h5>
            <BiMailSend />
            <a className="flat-button" href="mailto:caeserlondon@gmail.com">
              Send me a message
            </a>
          </article>

          <article className="contact-card">
            <h4>My Mobile</h4>

            <h5>
              <GiRotaryPhone /> 078 6886 3113
            </h5>
            <BsWhatsapp />
            <a
              className="flat-button"
              href="https://api.whatsapp.com/send?phone=4407868863113"
            >
              WhatsApp call or text
            </a>
          </article>

          <article className="contact-card">
            <h4>My Mobile</h4>

            <h5>
              <GiRotaryPhone /> 075 626 77052
            </h5>
            <BsWhatsapp />
            <a
              className="flat-button"
              href="https://api.whatsapp.com/send?phone=4407562677052"
            >
              WhatsApp call or text
            </a>
          </article>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Contact
