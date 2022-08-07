import { useEffect, useState } from 'react'

import { Button, Input, Col, Form, Row, Spin, Alert, Progress } from 'antd'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'
const { TextArea } = Input

const SetupPage = () => {
  const { data, save, isSaving, percentage = 0 } = useProfile()
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
    isActive,
  } = profile || {}
  const handleSave = () => {
    save({ ...profile, isActive: percentage === 100 })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }
  useEffect(() => setProfile(data), [data])
  return (
    <>
      <MetaTags title="Setup" description="Setup page" />
      <Form className="setup-form" layout="vertical">
        <Row>
          <Col>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Alert
                  style={{ margin: '15px 0', width: '100%' }}
                  message={
                    isActive ? 'Update Your Profile' : 'Complete your profile'
                  }
                  description={
                    <div>
                      {isSaving ? (
                        <>
                          Please wait while we save your profile.
                          <Spin />
                        </>
                      ) : (
                        <></>
                      )}
                      {!isActive && (
                        <Progress
                          percent={percentage as number}
                          status="active"
                        />
                      )}
                    </div>
                  }
                  type="success"
                />
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Avatar
                  url={avatar_url}
                  size={100}
                  onUpload={(url) => {
                    save({ ...profile, avatar_url: url })
                  }}
                />
              </Col>
              <Col flex="1 1 0%">
                <Form.Item label="Email:">
                  <Input
                    name="email"
                    placeholder="Email"
                    allowClear
                    onChange={handleChange}
                    // style={{ marginBottom: 8 }}
                    value={email}
                  />
                </Form.Item>
                <Form.Item label="Username:">
                  <Input
                    name="username"
                    placeholder="Username"
                    allowClear
                    onChange={handleChange}
                    value={username}
                  />
                </Form.Item>
                <Row gutter={[16, 16]}>
                  <Col span="12">
                    <Form.Item label="First Name:">
                      <Input
                        name="first_name"
                        placeholder="First Name"
                        allowClear
                        onChange={handleChange}
                        value={first_name}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Last Name:">
                      <Input
                        name="last_name"
                        placeholder="Last Name"
                        allowClear
                        onChange={handleChange}
                        value={last_name}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Website:">
                  <Input
                    name="website"
                    placeholder="Website"
                    allowClear
                    onChange={handleChange}
                    value={website}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Form.Item label="Service:">
                  <TextArea
                    name="service"
                    placeholder="Define your service offer here"
                    allowClear
                    onChange={handleChange}
                    value={service}
                    autoSize={{ minRows: 2 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Form.Item label="About:">
                  <TextArea
                    name="about"
                    placeholder="About you"
                    allowClear
                    onChange={handleChange}
                    value={about}
                    autoSize={{ minRows: 2 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col
                flex="1 1 0%"
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                {isActive && (
                  <Button
                    onClick={() => navigate(routes.profile())}
                    style={{ marginRight: 15 }}
                  >
                    Cancel
                  </Button>
                )}
                <Button disabled={isSaving} onClick={handleSave}>
                  Save
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default SetupPage
