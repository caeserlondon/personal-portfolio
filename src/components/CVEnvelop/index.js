import React from 'react'
import './index.scss'

const Envelop = () => {
  return (
    <div className="letter-image">
      <div className="animated-mail">
        <div className="back-fold"></div>
        <div className="letter">
          <div className="letter-border"></div>
          <div className="letter-title"></div>
          <div className="letter-context">
            <p>DOWNLOAD MY C.V.</p>
          </div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner">
              <p>Caeser</p>
            </div>
          </div>
        </div>
        <div className="top-fold"></div>
        <div className="body"></div>
        <div className="left-fold"></div>
      </div>
      <div className="shadow"></div>
    </div>
  )
}

export default Envelop
