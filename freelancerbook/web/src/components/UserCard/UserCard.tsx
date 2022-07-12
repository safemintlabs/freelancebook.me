import React from 'react'

import { Card, Rate } from 'antd'

import './styles.less'

const { Meta } = Card

const UserCard: React.FC = () => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
    className="avatar-card"
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    <Rate disabled defaultValue={5} />
  </Card>
)

export default UserCard
