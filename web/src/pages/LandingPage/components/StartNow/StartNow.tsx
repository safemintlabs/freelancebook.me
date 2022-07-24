import React from 'react'

import { Button } from 'antd'

import './StartNow-styles.css'

const StartNow = () => {
  return (
    <>
      <div className="startNow">
        <div id="startNow-left">
          <h1 className="playfair">
            Save time building your own professional site.
          </h1>
          <p>
            Make a site with your portfolio and an appointment booking system.
            Clients can learn more about you and book a schedule to avail your
            professional services.
          </p>
          <Button id="claim" type="primary" size={'large'}>
            Create your FREE website now ⟶
          </Button>
        </div>
        <div id="startNow-right">
          <div id="animated-logo"></div>
        </div>
      </div>
    </>
  )
}

export default StartNow
