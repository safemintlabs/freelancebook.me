import React, { useEffect, useState, useRef } from 'react'
import { Carousel } from 'antd'
import './FeaturedProfiles-styles.css'
import { Link, navigate, routes } from '@redwoodjs/router'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'

const FeaturedProfiles = () => {

  // convert to hooks
  const profiles = [
    {
      name: 'John Doe',
      title: 'Physician',
      image: 'john'
    },
    {
      name: 'James Doe',
      title: 'UI/UX Designer',
      image: 'james'
    },
    {
      name: 'Jennifer Doe',
      title: 'Cartoonist',
      image: 'jennifer'
    },
    {
      name: 'Joan Doe',
      title: 'Make-up Artist',
      image: 'joan'
    },
    {
      name: 'Jimboy Doe',
      title: 'Events Coordinator',
      image: 'jimboy'
    },
    {
      name: 'Jaclyn Doe',
      title: 'Freelance Actress',
      image: 'jaclyn'
    },
    {
      name: 'Joshua Doe',
      title: 'Software Developer',
      image: 'joshua'
    },
    {
      name: 'Jose Doe',
      title: 'Propagandist/Novelist',
      image: 'jose'
    },
  ]

  const [numItems, setNumItems] = useState(3);
  const width = window.innerWidth;

  useEffect(() => {
    if (width > 1200) {
        setNumItems(3.85);
    } else if (width > 900) {
        setNumItems(2.85)
    } else if (width > 600) {
      setNumItems(2.25)
    } else if (width > 480) {
      setNumItems(1.85)
    }
    else {
        setNumItems(1);
    }
  }, [width])

  return (
    <>
      <div id="featuredProfiles">
        <h2> Featured Profiles </h2>
        <Carousel dots={false} autoplay slidesToShow={numItems} slidesToScroll={1} arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined/>}>
          {
            profiles.map((value, index) => (
              <>
              <div className='profileCard'>
                <img className='profilePhoto' src={require("./profiles/" + value.image + ".jpg")} alt={value.image} />

                <div className='profileInfo'>
                  {/* <div> */}
                  <h3>{value.name} </h3>
                  {/* </div> */}
                  {/* <div> */}
                  <p> {value.title} </p>
                  {/* </div> */}
                </div>
              </div>
              </>
            ))
          }
        </Carousel>
      </div>
    </>
  )
};

export default FeaturedProfiles;

