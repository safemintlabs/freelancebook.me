import { useEffect, useState } from 'react'

import { Button, Skeleton, Spin, Col, Descriptions, Row } from 'antd'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar'
import { useProfile } from 'src/hooks/profiles'

import './styles.less'

const ProfilePage = ({ username: u }: { username?: string }) => {
  const { data, isLoading, isMe } = useProfile(u)
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
  return (
    <Spin tip="Fetching user..." spinning={isLoading}>
      <MetaTags title="Profile" description="Profile page" />
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Avatar url={avatar_url} size="100%" />
        </Col>

        {isLoading ? (
          <Skeleton />
        ) : (
          <Col flex="1 1 0%">
            <Descriptions title="User Info" layout="vertical" column={2}>
              <Descriptions.Item label="Email">{email}</Descriptions.Item>
              <Descriptions.Item label="UserName">{username}</Descriptions.Item>
              <Descriptions.Item label="Name">
                {first_name} {last_name}
              </Descriptions.Item>
              <Descriptions.Item label="Website">{website}</Descriptions.Item>
            </Descriptions>
            <Descriptions title="Service">
              <Descriptions.Item>{service}</Descriptions.Item>
            </Descriptions>
            <Descriptions title="About">
              <Descriptions.Item>{about}</Descriptions.Item>
            </Descriptions>
          </Col>
        )}
      </Row>
      {isMe && (
        <Row>
          <Col
            flex="1 1 0%"
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <Button onClick={() => navigate(routes.setup())}>
              Edit Profile
            </Button>
          </Col>
        </Row>
      )}
    </Spin>
  )
}

export default ProfilePage
