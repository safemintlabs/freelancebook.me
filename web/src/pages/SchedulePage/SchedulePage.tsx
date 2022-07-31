import React from 'react'

import { PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { BadgeProps, Button, Col, Divider, Row } from 'antd'
import { Badge, Calendar } from 'antd'
import type { Moment } from 'moment'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ScheduleList from 'src/components/ScheduleList/ScheduleList'
import { useProfile } from 'src/hooks/profiles'

const getListData = (value: Moment) => {
  let listData
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ]
      break
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ]
      break
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ]
      break
    default:
  }
  return listData || []
}

const getMonthData = (value: Moment) => {
  if (value.month() === 8) {
    return 1394
  }
}
const SchedulePage = ({ username }) => {
  const { isMe } = useProfile(username)
  const monthCellRender = (value: Moment) => {
    const num = getMonthData(value)
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null
  }

  const dateCellRender = (value: Moment) => {
    const listData = getListData(value)
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps['status']}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <>
      <MetaTags title="Schedule" description="Schedule page" />

      <Row gutter={[16, 16]}>
        <Col flex="1 1 0%">
          <h1>View your schedule</h1>
          <Calendar
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
          />
        </Col>
        <Col span={8} style={{ display: 'flex', flexDirection: 'row' }}>
          <Divider type="vertical" style={{ height: '100%' }} />
          <ScheduleList />
        </Col>
        <Button
          type="primary"
          shape="circle"
          className="edit-schedule"
          onClick={() => {
            navigate(routes.scheduleEdit({ action: 'edit' }))
          }}
        >
          {isMe ? <SettingOutlined /> : <PlusOutlined />}
        </Button>
      </Row>
    </>
  )
}

export default SchedulePage
