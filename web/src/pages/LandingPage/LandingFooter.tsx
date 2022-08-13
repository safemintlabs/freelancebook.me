import React from 'react'

import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  MailFilled,
} from '@ant-design/icons'
import { Image, Layout, Menu, Button } from 'antd'

import { Link, routes } from '@redwoodjs/router'

import './LandingFooter-styles.css'
const { Footer } = Layout

const LandingFooter = () => {
  return (
    <>
      <Footer className="landingFooter">
        <div id="footer-left">
          <h3> Website </h3>
          <div className="landingBotMenu">
            <Menu mode="horizontal">
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="services">Services</Menu.Item>
              <Menu.Item key="team">Team</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
              <Menu.Item key="blog">Blog</Menu.Item>
            </Menu>
          </div>
        </div>
        <div id="footer-right">
          <h3> Follow us </h3>

          <Button
            id="facebook"
            type="default"
            shape="circle"
            size={'large'}
            icon={<FacebookFilled />}
          />
          <Button
            id="twitter"
            type="default"
            shape="circle"
            size={'large'}
            icon={<TwitterSquareFilled />}
          />
          <Button
            id="instagram"
            type="default"
            shape="circle"
            size={'large'}
            icon={<InstagramFilled />}
          />
          <Button
            id="linkedin"
            type="default"
            shape="circle"
            size={'large'}
            icon={<LinkedinFilled />}
          />
          <Button
            id="newsletter"
            type="default"
            shape="circle"
            size={'large'}
            icon={<MailFilled />}
          />
        </div>
      </Footer>
      <div id="remark">
        <Link className="bot-logo" to={routes.landing()}>
          <Image
            height={75}
            src="/images/logos/inlinestyle/05-freelancebook-inlinestyle-tagline-inverted.svg"
            preview={false}
          />
        </Link>
        <p>Copyright © 2022. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default LandingFooter
