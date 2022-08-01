import React from 'react'

import { Button, Calendar, Col, Modal, Row } from 'antd'
import { CalendarMode } from 'antd/lib/calendar/generateCalendar'
import { Moment } from 'moment'

import { DAYS, TimeSlot } from 'src/hooks/schedule'
import { makeMoment } from 'src/pages/SchedulesetupPage/helpers'

const AppointmentForm = ({
  schedules,
  name,
  onBack,
  value,
  onChange,
}: {
  value: Moment
  onChange: (date: Moment) => void
  schedules: TimeSlot[]
  name: string
  onBack: () => void
}): JSX.Element => {
  const onPanelChange = (v: Moment, mode: CalendarMode) => {
    console.log(v.format('YYYY-MM-DD'), mode)
  }
  const availableSchedules = schedules.filter(
    (o) => DAYS.indexOf(o.day) === value.day()
  )
  console.log('SASAS', value.day())
  return (
    <>
      <Modal
        title={`Book an appointment for ${name}`}
        centered
        visible={true}
        onOk={onBack}
        onCancel={onBack}
      >
        <Row gutter={[8, 8]}>
          <Col span={15}>
            <Calendar
              fullscreen={false}
              onPanelChange={onPanelChange}
              value={value}
              onSelect={onChange}
              disabledDate={(date) => {
                return !schedules?.filter((o) => {
                  return DAYS.indexOf(o.day) === date.day()
                }).length
              }}
            />
          </Col>
          <Col span={3}>
            <Row gutter={[2, 2]} className="slots-selection-container">
              {availableSchedules.map((schedule) => (
                <Col key={`${schedule.id}`}>
                  <Button key={schedule.id} type="primary" ghost>
                    {makeMoment(schedule.time_start).format('hh:mm A')} -{' '}
                    {makeMoment(schedule.time_end).format('hh:mm A')}
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default AppointmentForm
