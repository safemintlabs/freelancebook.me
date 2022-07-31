import React, { useEffect, useState } from 'react'

import {
  DeleteOutlined,
  LeftOutlined,
  PlusOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import {
  Button,
  Checkbox,
  List,
  notification,
  Space,
  Switch,
  TimePicker,
} from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import { cloneDeep, isEqual } from 'lodash'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useProfile } from 'src/hooks/profiles'
import { useSchedule, TimeSlot, Day } from 'src/hooks/schedule'

import './styles.less'
import { makeMoment } from './helpers'

const CheckboxGroup = Checkbox.Group

const SchedulesetupPage = () => {
  const { id } = useProfile()
  const { schedules, save } = useSchedule(id)
  const [data, setData] = useState<TimeSlot[]>(schedules)

  const notSaved = !isEqual(data, schedules)
  const handleAdd = async () => {
    if (notSaved) {
      await save({ data, prev: schedules })
      notification.success({ message: 'Saved!' })
    } else {
      setData((prev) => [
        ...prev,
        {
          day: [],
          active: false,
          time_start: '1:00',
          time_end: '2:00',
          freelancer_id: id,
        },
      ])
    }
  }
  const hasConflicts = (newData) => {
    const conflictSchedule = data
      .map((row, i1) => {
        return row.day.some((day) => {
          return newData.some((row2, i2) => {
            // check day intersection
            return (
              i1 !== i2 &&
              row2.day.some((day2) => {
                return (
                  day === day2 &&
                  makeMoment(row.time_start).unix() <
                    makeMoment(row2.time_end).unix() &&
                  makeMoment(row.time_end).unix() >
                    makeMoment(row2.time_start).unix()
                )
              })
            )
          })
        })
          ? row.day
          : undefined
      })
      .filter((o) => !!o)
    const resultConflict = conflictSchedule.length > 0
    if (resultConflict) {
      notification.error({
        message: 'Schedule not valid',
        description: 'Theres conflict on the selected schedule, please check',
      })
    }
    return resultConflict
  }
  const onChange = (index: number) => (list: CheckboxValueType[]) => {
    const newData = cloneDeep(data)
    newData[index].day = list as Day[]
    // check conflict
    if (hasConflicts(newData)) {
      return false
    }
    setData(newData)
  }

  useEffect(() => {
    setData(cloneDeep(schedules))
  }, [schedules])

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
            <Button shape="circle" onClick={handleAdd}>
              {notSaved ? <SaveOutlined /> : <PlusOutlined />}
            </Button>
          </div>
        }
        style={{ flex: '1 1 0%', marginLeft: 16 }}
        itemLayout="horizontal"
        dataSource={data.sort((a, b) => {
          return (
            makeMoment(a.time_start).unix() - makeMoment(b.time_start).unix()
          )
        })}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Space direction="horizontal">
                  <CheckboxGroup
                    options={[
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                    ]}
                    value={item.day}
                    onChange={onChange(index)}
                  />
                  <TimePicker.RangePicker
                    format="HH:mm"
                    // disabledTime={() => ({
                    //   disabledHours: () =>
                    //     Array.from(Array(24).keys()).filter((o) => {
                    //       return !data
                    //         .filter((o, i) => i !== index)
                    //         .every((slot) => {
                    //           return (
                    //             slot.day.some((day) => {
                    //               return item.day.includes(day)
                    //             }) &&
                    //             makeMoment(item.time_start).unix() <
                    //               makeMoment(slot.time_end).unix() &&
                    //             makeMoment(
                    //               `${padStart(`${o}`, 2, '0')}:00`
                    //             ).unix() > makeMoment(slot.time_start).unix()
                    //           )
                    //         })
                    //     }),
                    //   disabledMinutes: (hour) => {
                    //     const strHour = padStart(`${hour}`, 2, '0')
                    //     const filterMinutes = Array.from(
                    //       Array(60).keys()
                    //     ).filter((o) => {
                    //       const strMinute = padStart(`${o}`, 2, '0')
                    //       return data
                    //         .filter((o, i) => i !== index)
                    //         .every((slot) => {
                    //           return (
                    //             slot.day.some((day) => {
                    //               return item.day.includes(day)
                    //             }) &&
                    //             makeMoment(`${strHour}:${strMinute}`).unix() <=
                    //               makeMoment(slot.time_start).unix() &&
                    //             makeMoment(`${strHour}:${strMinute}`).unix() >
                    //               makeMoment(slot.time_end).unix()
                    //           )
                    //         })
                    //     })
                    //     console.log({ filterMinutes })
                    //     return filterMinutes
                    //   },
                    // })}
                    minuteStep={15}
                    onChange={(time) => {
                      // check conflict
                      const newData = cloneDeep(data)
                      newData[index].time_start =
                        time?.[0]?.format('HH:mm') || '1:00'
                      newData[index].time_end =
                        time?.[1]?.format('HH:mm') || '2:00'
                      if (hasConflicts(newData)) {
                        return false
                      }
                      setData(newData)
                    }}
                    value={[
                      makeMoment(item.time_start),
                      makeMoment(item.time_end),
                    ]}
                  />
                  <Switch
                    checkedChildren="Enabled"
                    unCheckedChildren="Disabled"
                    checked={item.active}
                    onChange={(checked) => {
                      setData((prev) => {
                        const newData = [...prev]
                        newData[index].active = checked
                        return newData
                      })
                    }}
                  />
                  <Button
                    shape="circle"
                    onClick={() => {
                      setData((prev) => {
                        const newData = [...prev]
                        newData.splice(index, 1)
                        return newData
                      })
                    }}
                  >
                    <DeleteOutlined />
                  </Button>
                </Space>
              }
              description=""
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default SchedulesetupPage
