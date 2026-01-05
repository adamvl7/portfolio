import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// initialize EmailJS with public key from env (safe to call once)
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
if (EMAILJS_PUBLIC_KEY) {
  try {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  } catch (e) {
    // ignore - will use sendForm with explicit key if needed
  }
}

// Fix the marker icon issue
const defaultIcon = L.icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [2, -40],
})
L.Marker.prototype.options.icon = defaultIcon

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000);
  
  return () => clearTimeout(timer);
}, [])

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setSending(true)

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      setSent(true)
      setSending(false)
      // clear form
      e.target.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      alert('Failed to send the message, please try again')
      setSending(false)
    }
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Don't hesitate to reach out!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
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
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value={sending ? 'SENDING...' : sent ? 'SENT' : 'SEND'}
                    disabled={sending || sent}
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Adam Le,
          <br />
          University of California, Irvine
          <br />
          Irvine, CA 92697 <br />
          United States <br />
          <br />
          <span>adam.le.7184@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[33.6405, -117.8443]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.6405, -117.8443]}>
              <Popup>UCI - Where I study Computer Science</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
