import { useEffect, useState } from 'react'

import { Col, Form, Row } from 'antd'

// import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'

const ProfilePage = ({ username: u }: { username?: string }) => {
  const { data, isLoading } = useProfile(u)
  const [profile, setProfile] = useState(data)
  const {
    email,
    username,
    avatar_url,
    first_name,
    last_name,
    about,
    service,
    website,
  } = profile || {}
  useEffect(() => setProfile(data), [data])
  console.log({ data, profile, isLoading })
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />
      <Form className="setup-form">
        <Row>
          <Col>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Avatar url={avatar_url} size={200} />
              </Col>
              <Col flex="1 1 0%">
                <Form.Item label="Email:">{email}</Form.Item>
                <Form.Item label="Username:">{username}</Form.Item>
                <Row gutter={[16, 16]}>
                  <Col span="48">
                    <Form.Item label="First Name:">
                      {first_name} {last_name}
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Website:">{website}</Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Form.Item label="Service:">{service}</Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Form.Item label="About:">{about}</Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default ProfilePage
