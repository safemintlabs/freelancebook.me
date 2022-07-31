import React, { useEffect, useState } from 'react'

import {
  DeleteOutlined,
  LeftOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, List, notification, Space, TimePicker } from 'antd'
import { cloneDeep, isEqual } from 'lodash'
import moment from 'moment'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useProfile } from 'src/hooks/profiles'
import { useSchedule, TimeSlot, Day } from 'src/hooks/schedule'

import './styles.less'
import { makeMoment } from './helpers'

const SchedulesetupPage = () => {
  const { id } = useProfile()
  const { schedules, save, isLoading } = useSchedule(id)
  const [data, setData] = useState<TimeSlot[]>([])
  const days: Day[] = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S']

  const notSaved = !isEqual(data, schedules)
  const handleAdd = (day) => async () => {
    const lastEnd = Math.max(
      ...data
        .filter((o) => o.day === day)
        .map((o) => makeMoment(o.time_end).unix())
    )
    setData((prev) => [
      ...prev,
      {
        day,
        active: false,
        time_start: moment(lastEnd * 1000).format('HH:mm'),
        time_end: moment(lastEnd * 1000)
          .add(1, 'hour')
          .format('HH:mm'),
        freelancer_id: id,
      },
    ])
  }
  const handleSave = async () => {
    await save({ data, prev: schedules })
    notification.success({ message: 'Saved!' })
  }
  const hasConflicts = (newData) => {
    const conflictSchedule = schedules.filter((row, i1) => {
      return newData
        .filter((o, i) => i1 !== i && o.day === row.day)
        .some((row2) => {
          // check day intersection
          return (
            makeMoment(row.time_start).unix() <
              makeMoment(row2.time_end).unix() &&
            makeMoment(row.time_end).unix() > makeMoment(row2.time_start).unix()
          )
        })
    })
    const resultConflict = conflictSchedule.length > 0
    if (resultConflict) {
      console.log({ conflictSchedule, newData })
      notification.error({
        message: 'Schedule not valid',
        description: 'Theres conflict on the selected schedule, please check',
      })
    }
    return resultConflict
  }

  useEffect(() => {
    if (!isLoading) setData(cloneDeep(schedules))
    console.log({ isLoading })
  }, [schedules, isLoading])

  const dataSource: {
    day: Day
    items: TimeSlot[]
    active: boolean
  }[] = days.map((day) => {
    const slots = data
      .filter((slot) => slot.day === day)
      .sort((a, b) => {
        return makeMoment(a.time_start).unix() - makeMoment(b.time_start).unix()
      })
    return {
      day,
      items: !slots.length
        ? [
            {
              day,
              active: false,
              time_start: '1:00',
              time_end: '2:00',
              freelancer_id: id,
            },
          ]
        : slots,
      active: slots.length > 0,
    }
  })
  return (
    <>
      <MetaTags title="Schedulesetup" description="Schedulesetup page" />
      <Button
        type="primary"
        shape="circle"
        className="edit-schedule"
        onClick={() => {
          navigate(routes.schedule())
        }}
      >
        <LeftOutlined />
      </Button>
      <List
        header={
          <div className="list-header">
            <span>Your schedule for today</span>
            <Button
              shape="circle"
              disabled={!notSaved || hasConflicts(data)}
              onClick={handleSave}
            >
              <SaveOutlined />
            </Button>
          </div>
        }
        style={{ flex: '1 1 0%', marginLeft: 16 }}
        itemLayout="horizontal"
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item>
            <List
              dataSource={item.items}
              key={item.day}
              renderItem={(slot, index) => (
                <List.Item>
                  <Space direction="horizontal">
                    {index === 0 && (
                      <div style={{ width: '30px' }}>
                        <Checkbox
                          checked={item.active}
                          onChange={(e) => {
                            console.log(e.target.checked)
                            if (e.target.checked) {
                              setData((prev) => {
                                const newData = [...prev]
                                const lastEnd = Math.max(
                                  ...item.items.map((o) =>
                                    makeMoment(o.time_end).unix()
                                  )
                                )
                                console.log({
                                  lastEnd: moment(lastEnd * 1000).format(
                                    'HH:mm'
                                  ),
                                })
                                newData.push({
                                  day: item.day,
                                  active: false,
                                  time_start: moment(lastEnd * 1000).format(
                                    'HH:mm'
                                  ),
                                  time_end: moment(lastEnd * 1000)
                                    .add(1, 'hour')
                                    .format('HH:mm'),
                                  freelancer_id: id,
                                  id: `${
                                    (Date.now() + Math.random() * 1000) * -1
                                  }`,
                                  isNew: true,
                                })
                                return newData
                              })
                            } else {
                              setData((prev) => {
                                const newData = [...prev]
                                return newData.filter((o) => o.day !== item.day)
                              })
                            }
                          }}
                        />
                      </div>
                    )}
                    <TimePicker.RangePicker
                      disabled={!item.active}
                      style={{ marginLeft: index > 0 ? 38 : 0 }}
                      format="HH:mm"
                      minuteStep={15}
                      onChange={(time) => {
                        // check conflict
                        const newData = cloneDeep(data)
                        const i = newData.findIndex((o) => o.id === slot.id)
                        if (i > -1) {
                          newData[i].time_start =
                            time?.[0]?.format('HH:mm') || '1:00'
                          newData[i].time_end =
                            time?.[1]?.format('HH:mm') || '2:00'
                          if (hasConflicts(newData)) {
                            return false
                          }
                          setData(newData)
                        }
                      }}
                      value={[
                        makeMoment(slot.time_start),
                        makeMoment(slot.time_end),
                      ]}
                    />
                    {index > 0 && (
                      <Button
                        disabled={!item.active}
                        shape="circle"
                        onClick={() => {
                          setData((prev) => {
                            const newData = [...prev]
                            const i = newData.findIndex((o) => o.id === slot.id)
                            if (i > -1) {
                              newData.splice(i, 1)
                            }
                            return newData
                          })
                        }}
                      >
                        <DeleteOutlined />
                      </Button>
                    )}
                    <Button
                      shape="circle"
                      onClick={handleAdd(slot.day)}
                      disabled={!item.active}
                    >
                      <PlusOutlined />
                    </Button>
                  </Space>
                </List.Item>
              )}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default SchedulesetupPage
