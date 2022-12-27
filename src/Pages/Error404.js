import React from 'react'
import { useLocation } from 'react-router-dom'
import './style/Common_Style.css'
import './style/Error404.css'

function Error404() {

  return (
    <div className="error-page page">
      <div className="error-message">
        <span className="error-code">
          <h1>4</h1>
          <h1>0</h1>
          <h1>4</h1>
        </span>
        <h1 className="page-not-found">Page Not Found</h1>
      </div>
      <div className="error-sub-message">
        <p>Address <span>"{useLocation().pathname}"</span> Not Available.</p>
      </div>
    </div>
  )
}

export default Error404
