import React from 'react';
import CreateUrlCard from 'src/components/CreateURLCard/CreateURLCard'

import '@fontsource/inter'
import './styles.less'


const WelcomePage = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="welcome-page">
        <div className='welcome-message'>
          <h2 id='welcome-text'>Welcome to Freelancebook!</h2>
        </div>

      <CreateUrlCard />

      </div>
    </>
  )
}

export default WelcomePage