import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './App'

// Importing the styles
import "./index.css"

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router } from "react-router-dom";

render(

  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)
