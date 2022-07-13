import React from 'react'

import { Badge, Card, Rate } from 'antd'

import './styles.less'

const { Meta } = Card

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
        style={{ textAlign: 'center' }}
      />
      <Rate disabled defaultValue={5} />
    </Card>
  </Badge.Ribbon>
)

export default UserCard
