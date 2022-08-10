import React from 'react'

import { PlusOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Skeleton } from 'antd'
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

import { Appointment, AppointmentStatus } from '../../../../types/appointments'

const SchedulePage = ({ username, action }) => {
  const { isMe, id, data: profile } = useProfile(username)
  const { id: userId } = useProfile()
  const { schedules, isLoading } = useSchedule(id)
  const {
    appointments: myAppointments,
    date,
    setDate: setMyDate,
  } = useAppointments(null, userId)
  const {
    appointments,
    setDate: setProfileDate,
    save,
    isSaving,
  } = useAppointments(id, userId)

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
  const handleChangeDate = (date: Moment): void => {
    console.log({ date: date.format() })
    setMyDate(date.clone())
    setProfileDate(date.clone())
  }
  const handleSubmit = async (data: Appointment) => {
    const selected = schedules?.find((o) => o.id === data.slot_id)
    await save({
      data: {
        ...data,
        freelancer_id: id,
        user_id: userId,
        status: AppointmentStatus.PENDING,
        schedule_date_time: moment(
          `${date.format('YYYY-MM-DD')} ${selected.time_start}`,
          'YYYY-MM-DD HH:mm'
        ).toDate(),
        reserved_date_time: moment().toDate(),
      },
    })
  }

  console.log({ isLoading, myAppointments, appointments })
  return (
    <>
      <MetaTags title="Schedule" description="Schedule page" />

      <Row gutter={[16, 16]}>
        <Col flex="1 1 0%">
          <h1>View your schedule</h1>
          {isLoading ? (
            <Skeleton />
          ) : (
            <Calendar
              value={date}
              onSelect={handleChangeDate}
              // onChange={handleChangeDate}
              dateCellRender={dateCellRender}
              monthCellRender={monthCellRender}
              disabledDate={(date) =>
                !schedules?.filter((o) => {
                  return DAYS.indexOf(o.day) === date?.day()
                }).length
              }
            />
          )}
        </Col>
        <Col span={8} style={{ display: 'flex', flexDirection: 'row' }}>
          <Divider type="vertical" style={{ height: '100%' }} />
          {isLoading ? <Skeleton /> : <ScheduleList />}
        </Col>
        <Button
          type="primary"
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
          {isMe
            ? 'Edit Schedule'
            : `Book for ${
                date?.isSame(moment(), 'date')
                  ? 'Today'
                  : date?.clone().format('MMM DD, YYYY')
              }`}
        </Button>
      </Row>
      {action === 'new' && (
        <AppointmentForm
          appointments={appointments}
          schedules={schedules}
          name={`${profile?.first_name} ${profile?.last_name}`}
          onBack={() => {
            navigate(routes.publicSchedule({ username }))
          }}
          value={date}
          onChange={handleChangeDate}
          onSubmit={handleSubmit}
          isSaving={isSaving}
        />
      )}
    </>
  )
}

export default SchedulePage
