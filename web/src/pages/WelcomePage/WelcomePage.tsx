import React from 'react'

import CreateUrlCard from 'src/components/CreateURLCard/CreateURLCard'

import '@fontsource/inter'
import './styles.less'

const WelcomePage = () => {
  return (
    <>
      <div className="welcome-page">
        <div className="welcome-message">
          <h2 className="welcome-text">Welcome to Freelancebook!</h2>
        </div>

        <CreateUrlCard />
      </div>
    </>
  )
}

export default WelcomePage
