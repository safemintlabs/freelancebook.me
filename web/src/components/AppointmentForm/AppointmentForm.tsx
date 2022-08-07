import React, { useState } from 'react'

import {
  Alert,
  Button,
  Calendar,
  Col,
  Form,
  Modal,
  Row,
  Skeleton,
  Steps,
  Typography,
} from 'antd'
import { CalendarMode } from 'antd/lib/calendar/generateCalendar'
import TextArea from 'antd/lib/input/TextArea'
import { Moment } from 'moment'
import moment from 'moment'
import { Appointment } from 'types/appointments'

import { DAYS, TimeSlot } from 'src/hooks/schedule'
import { makeMoment } from 'src/pages/SchedulesetupPage/helpers'

const AppointmentForm = ({
  schedules,
  name,
  onBack,
  value,
  onChange,
  onSubmit,
  isSaving,
  appointments,
}: {
  isSaving: boolean
  value: Moment
  onChange: (date: Moment) => void
  onSubmit: (data: Appointment) => Promise<void>
  schedules: TimeSlot[]
  name: string
  onBack: () => void
  appointments: Appointment[]
}): JSX.Element => {
  const [data, setData] = useState<Appointment | null>(null)
  const [step, setStep] = useState(0)
  const onPanelChange = (v: Moment, mode: CalendarMode) => {
    console.log(v.format('YYYY-MM-DD'), mode)
  }
  const availableSchedules =
    schedules?.filter((o) => DAYS.indexOf(o.day) === value.day()) || []
  const handleSelectSchedule = (id) => () => {
    setData((prev) => ({ ...prev, slot_id: id }))
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      metadata: { ...prev?.metadata, [name]: value },
    }))
  }
  const getStep = () => {
    switch (step) {
      case 2:
        return (
          <Alert
            message="You have successfully requested for appointment"
            type="success"
            showIcon
            action={
              <Button size="small" type="text" danger>
                Cancel Request
              </Button>
            }
            closable
          />
        )
      case 1:
        return (
          <Form className="setup-form" layout="vertical">
            <Row gutter={[8, 8]} style={{ marginBottom: 16 }}>
              <Col span={24}>
                <Typography.Text>
                  To help you with the upcoming meeting kindly answer the
                  initial questions
                </Typography.Text>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Form.Item label="1. What do you expect from this meeting?">
                  <TextArea
                    name="expectation"
                    placeholder="add details"
                    allowClear
                    onChange={handleChange}
                    value={data?.metadata?.expectation}
                    autoSize={{ minRows: 2 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Form.Item label="2. What is your current pain points?">
                  <TextArea
                    name="pain"
                    placeholder="add details"
                    allowClear
                    onChange={handleChange}
                    value={data?.metadata?.pain}
                    autoSize={{ minRows: 2 }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="1 1 0%">
                <Form.Item label="3. What is this random questions?">
                  <TextArea
                    name="random"
                    placeholder="add details"
                    allowClear
                    onChange={handleChange}
                    value={data?.metadata?.random}
                    autoSize={{ minRows: 2 }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )
      default:
        return (
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
                {availableSchedules.map((schedule) => {
                  const isSelected = data?.slot_id === schedule.id

                  return (
                    <Col key={`${schedule.id}`}>
                      <Button
                        onClick={handleSelectSchedule(schedule.id)}
                        key={schedule.id}
                        type={isSelected ? 'dashed' : 'primary'}
                        ghost={!isSelected}
                        className={isSelected ? 'selected' : ''}
                        disabled={
                          appointments.filter(
                            (o) =>
                              o.slot_id === schedule.id &&
                              value.isSame(moment(o.schedule_date_time), 'date')
                          ).length > 0
                        }
                      >
                        {makeMoment(schedule.time_start).format('hh:mm A')} -{' '}
                        {makeMoment(schedule.time_end).format('hh:mm A')}
                      </Button>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        )
    }
  }
  const handleNextStep = async () => {
    if (step === 1) {
      await onSubmit(data)
    }
    if (step < 2) setStep((prev) => prev + 1)
    else onBack()
  }
  const steps = [
    {
      title: 'Choose Date',
    },
    {
      title: 'Add Details',
    },
    {
      title: 'Confirmation',
    },
  ]
  return (
    <>
      <Modal
        title={`Book an appointment for ${name}`}
        centered
        visible={true}
        onOk={handleNextStep}
        onCancel={onBack}
        okButtonProps={{ disabled: isSaving || (step === 0 && !data?.slot_id) }}
        cancelButtonProps={{ disabled: step === 2 }}
        okText={['Next', 'Send Request', 'Close'][step]}
        cancelText={['Cancel', 'Back', ''][step]}
      >
        <Steps current={step} style={{ marginBottom: 20 }}>
          {steps.map((item) => (
            <Steps.Step key={item.title} title={item.title} />
          ))}
        </Steps>
        {isSaving ? <Skeleton /> : getStep()}
      </Modal>
    </>
  )
}

export default AppointmentForm
