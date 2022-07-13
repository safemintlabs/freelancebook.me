import React from 'react'

import { Badge, Card, Rate } from 'antd'

import './styles.less'

const { Meta } = Card

interface IUser {
  avatar_url: string
  created_at: Date
  first_name: string
  id: string
  last_name: string
  updated_at: Date
  username: string
  website: string
}

interface IProps {
  user: IUser
}

const UserCard = ({ user }: IProps): JSX.Element => (
  <Badge.Ribbon text="Verified" color="green">
    <Card
      hoverable
      cover={<img alt={user.username} src={user.avatar_url} />}
      className="avatar-card"
    >
      <Meta
        title={`${user.first_name} ${user.last_name}`}
        description={user.username}
      />
      <Rate disabled defaultValue={5} />
    </Card>
  </Badge.Ribbon>
)

export default UserCard
