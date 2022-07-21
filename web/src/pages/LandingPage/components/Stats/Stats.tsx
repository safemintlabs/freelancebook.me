import React, { useEffect, useState } from 'react'
import { Button} from 'antd'
import './Stats-styles.css'
import { Link, navigate, routes } from '@redwoodjs/router'

const Stats = () => {
  const numbers = [ ['200','Freelancers'], ['700k', 'Visits','/week'], ['18','Bookings','/week'] ]
  return (
    <>
      <div className='stats'>
          <div id='stats-left'>
            <h2>
              {numbers[0][0]}
            </h2>
            <p>
              {numbers[0][1]}
            </p>
          </div>
          <div id='stats-center'>
            <h2>
              {numbers[1][0]}
            </h2>
            <p>
              {numbers[1][1]}<span>{numbers[1][2]}</span>
            </p>
          </div>
          <div id='stats-right'>
            <h2>
              {numbers[2][0]}
            </h2>
            <p>
              {numbers[2][1]}<span>{numbers[1][2]}</span>
            </p>
          </div>
      </div>
    </>
  )
};

export default Stats;