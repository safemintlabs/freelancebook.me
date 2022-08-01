import React, { useState } from 'react'

import { PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { BadgeProps, Button, Col, Divider, Row } from 'antd'
import { Badge, Calendar } from 'antd'
import type { Moment } from 'moment'
import moment from 'moment'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AppointmentForm from 'src/components/AppointmentForm/AppointmentForm'
import ScheduleList from 'src/components/ScheduleList/ScheduleList'
import { useAppointments } from 'src/hooks/appointments'
import { useProfile } from 'src/hooks/profiles'
import { DAYS, useSchedule } from 'src/hooks/schedule'

const SchedulePage = ({ username, action }) => {
  const [date, setDate] = useState(moment())
  const { isMe, id, data: profile } = useProfile(username)
  const { id: userId } = useProfile()
  const { schedules, isLoading } = useSchedule(id)
  const { appointments: myAppointments } = useAppointments(null, userId, date)
  const { appointments } = useAppointments(id, userId, date)

  const monthCellRender = () => {
    return (
      <div className="notes-month">
        <section>{1}</section>
        <span>Backlog number</span>
      </div>
    )
  }

  const dateCellRender = (value: Moment) => {
    const available = schedules?.filter(
      (o) => DAYS.indexOf(o.day) === value.day()
    ).length
    return (
      <ul className="events">
        <Badge
          status="success"
          text={available > 0 ? `${available} available` : ''}
        ></Badge>
      </ul>
    )
  }

  console.log({
    schedules,
    isLoading,
    myAppointments,
    appointments,
    date,
  })

  return (
    <>
      <MetaTags title="Schedule" description="Schedule page" />

      <Row gutter={[16, 16]}>
        <Col flex="1 1 0%">
          <h1>View your schedule</h1>
          <Calendar
            value={date}
            onSelect={setDate}
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
            disabledDate={(date) =>
              !schedules?.filter((o) => {
                return DAYS.indexOf(o.day) === date.day()
              }).length
            }
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
            navigate(
              isMe
                ? routes.scheduleEdit({ action: 'edit' })
                : routes.publicAppointment({ action: 'new', username })
            )
          }}
        >
          {isMe ? <SettingOutlined /> : <PlusOutlined />}
        </Button>
      </Row>
      {action === 'new' && (
        <AppointmentForm
          schedules={schedules}
          name={`${profile?.first_name} ${profile?.last_name}`}
          onBack={() => {
            navigate(routes.publicSchedule({ username }))
          }}
          value={date}
          onChange={setDate}
        />
      )}
    </>
  )
}

export default SchedulePage
