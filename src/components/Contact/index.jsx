import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const position = [32.58157743683187, 71.53610859844494]
    const [viewport, setViewport]= useState({
      latitude : 37.7577 ,
    longitude : -122.4376 ,
    zoom : 3.5,
    width:"100vw",
    height:"100vw"
    })
   
  const [letterClass, setLetterClass] = useState('text-animate')
  const func_t = () => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }
  const form = useRef()

  useEffect(() => {
    func_t();
},[])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_y3kp91z', form.current, 'Oa-UQcNhbqZSwxga6')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact-page">
        <div className="review">
        <div className="contact-text-zone">
            <div className="headings">
           
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
         
          </div>
          <p >
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="input-field">
                <li className="half">
                    
                  <input placeholder='Name'  type="text" name="name" required />
 
                </li>
                <li className="half">
                   
                  <input
                    placeholder='Email'
                    type="email"
                    name="email"
                    required
                  /> 
                </li>
                <li>
                   
                  <input
                   placeholder='Subject'
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  
                  <textarea
                    placeholder='Message'
                    rows="4"
                    name="message"
                    required
                  ></textarea>
                </li>
                </div>
                <li>
                  <button type="submit" className="flat-button">SEND</button>
                </li>

              </ul>
            </form>
          </div>
        <div className="info-map">
          Bilal Javaid,
          <br />
          Pakistan,
          <br />
          House no.A-411 Gulistan Colony, <br />
          Wah Cantt <br />
          <br />
          <span>bilalj3940@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[33.7390023417459, 72.79684375768554]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.7390023417459, 72.79684375768554]}>
              <Popup>bilal lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Contact