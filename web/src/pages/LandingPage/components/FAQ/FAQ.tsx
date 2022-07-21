import { Collapse } from 'antd';
import React from 'react';

const { Panel } = Collapse;

import './FAQ-styles.css'

const Q_A =
  [
    ["What is FreelanceBook?", "It is a platform all freelancers can maximize to kickstart their freelancing journey."],
    ["Why do I need this?", "FreelanceBook helps you create your own professional page to present to your leads. Through this platform, you can show your credibility without the need of tech experience. Enjoy hassle-free connections with your client by incorporating FreelanceBook's booking appointment system to your site."],
    ["How much will it cost me?", "Creating your site is 100% free. The developers are yet to figure out a good business model to make the platform sustainable."],
    ["In case of a problem, where can I ask for support?", "You can contact us by sending an email to support@freelancebook.so. Suggestions are also welcome."],
  ]

const FAQ = () => {
  return (
    <>
      <div className='FAQ'>
        <h2>Frequently Asked Questions</h2>
        <Collapse defaultActiveKey={['1']} ghost>
          <Panel header={Q_A[0][0]} key="1">
            <p>{Q_A[0][1]}</p>
          </Panel>
          <Panel header={Q_A[1][0]} key="2">
            <p>{Q_A[1][1]}</p>
          </Panel>
          <Panel header={Q_A[2][0]} key="3">
            <p>{Q_A[2][1]}</p>
          </Panel>
          <Panel header={Q_A[3][0]} key="4">
            <p>{Q_A[3][1]}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default FAQ;