import React from 'react'
import ReactDOM from 'react-dom/client' // The ReactDOM object provides methods that can be used to interact with the DOM
import App from './App.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)