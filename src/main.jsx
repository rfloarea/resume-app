import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Experience from './Experience.jsx'
import Education from './Education.jsx'
import { PersonalInformation } from './PersonalInformation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonalInformation />
    <Experience />
    <Education />
  </React.StrictMode>,
)
