import { Col, Row, Layout, Slider} from 'antd';
import React, {useState} from 'react';
import './HowItWorks-styles.css';
import type { SliderMarks } from 'antd/es/slider';

const marks: SliderMarks = {
  1: ' ',
  2: ' ',
  3: ' ',
};



const Slider_Box = () => {
  const [currentValue, setCurrentValue] = useState(1);
  const [currentTitle, setCurrentTitle] = useState("Create your profile");
  const [currentBody, setCurrentBody] = useState("Make a profile and describe your list of services so that customers can see at a quick look what your business is about.");
  return (
    <>
      <Row className='sliderbox'>
        <Col span={1.5}>
        <Row>
          <div className='ellipse'>
            {currentValue}
          </div>
        </Row>
        <Row>
          <div className="slider-scrollable">
            <Slider
            marks={marks}
            step={null}
            defaultValue={1}
            min={1}
            max={3}
            vertical={true}
            reverse={true}
            included={false}
            tooltipVisible={false}
            onChange={(value)=> {
              setCurrentValue(value);
              if (value == 1){
                setCurrentTitle("Create your profile");
                setCurrentBody("Make a profile and describe your list of services so that customers can see at a quick look what your business is about.");
              }
              else if (value == 2){
                setCurrentTitle("Setup your calendar");
                setCurrentBody("You don't have to worry about figuring out when your next available time is. Instead, you can make as many slots as you want and set their availability, so clients can pick a time that works for them.");
              }
              else if (value == 3){
                setCurrentTitle("Promote your site");
                setCurrentBody("Start promoting your website clients will able to land on your site view your projects and testimonials and easily book a discovery call with you.");
              }
            }}
            />
          </div>
        </Row>
        </Col>
        <Col span={18}>
        <div className="text-box">
          <h3 className="h3-1">{currentTitle}</h3>
          <p className="body-1">{currentBody}</p>
        </div>
        </Col>
      </Row>
    </>

  );
};

const HowItWorks = () => {
  return (
    <>
      <div className="howItWorks">

        <div className="how-it-works-text">
          <h2>How it works</h2>
        </div>
        <Slider_Box/>


      </div>

    </>
  );
}

export default HowItWorks



