import React from 'react'
import ReactDOM from 'react-dom/client'
import PersonalInfo from './PersonalInfo.jsx'
import './style.css'
import Experience from './Experience.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonalInfo />
    <Experience />
  </React.StrictMode>,
)
