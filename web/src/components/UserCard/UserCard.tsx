import React from 'react'

import { Badge, Card, Rate } from 'antd'

import { navigate, routes } from '@redwoodjs/router'

import './styles.less'
import { IUser } from 'src/hooks/profiles'

import Avatar from '../Avatar'

const { Meta } = Card

interface IProps {
  user: IUser
}

const UserCard = ({ user }: IProps): JSX.Element => (
  <Badge.Ribbon text="Verified" color="green">
    <Card
      hoverable
      cover={<Avatar url={user.avatar_url} size={150} />}
      className="avatar-card"
      onClick={() =>
        navigate(routes.publicProfile({ username: user.username }))
      }
    >
      <Meta
        title={`${user.first_name} ${user.last_name}`}
        description={user.username}
        style={{ textAlign: 'center' }}
      />
      <Rate disabled defaultValue={5} />
    </Card>
  </Badge.Ribbon>
)

export default UserCard
