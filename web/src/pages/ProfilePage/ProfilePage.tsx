import { useEffect, useState } from 'react'

import { Col, Descriptions, Row } from 'antd'

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
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Avatar url={avatar_url} size={200} />
        </Col>
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
      </Row>
    </>
  )
}

export default ProfilePage
