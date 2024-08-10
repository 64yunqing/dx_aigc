import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const RootEle = () => {
  const [show, setShow] = useState(true)
  
  return (
    <>
      {
        show?<App />:<></>
      }
    </>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootEle>
   
    </RootEle>
  </React.StrictMode>,
)
