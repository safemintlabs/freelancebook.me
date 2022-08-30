import './styles.less'

import '@fontsource/inter'

import { Box, Button, Flex, Spacer, Checkbox } from '@chakra-ui/react'
import { BsTrash } from "react-icons/bs";
import { AddIcon } from '@chakra-ui/icons'

import React, { useEffect, useState } from 'react'

import {
  Skeleton,
  List,
  notification,
  Space,
  TimePicker,
  Switch
} from 'antd'
import { cloneDeep, isEqual } from 'lodash'
import moment from 'moment'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useProfile } from 'src/hooks/profiles'
import { useSchedule, TimeSlot, Day, DAYS } from 'src/hooks/schedule'

import './styles.less'
import { makeMoment } from './helpers'

const MainCardSchedule = () => {
  const { id } = useProfile()
  const { schedules, save, isLoading, isSaving } = useSchedule(id)
  const [data, setData] = useState<TimeSlot[]>([])

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
        active: true,
        time_start: moment(lastEnd * 1000).format('HH:mm'),
        time_end: moment(lastEnd * 1000)
          .add(1, 'hour')
          .format('HH:mm'),
        freelancer_id: id,
        id: `${(Date.now() + Math.random() * 1000) * -1}`,
        isNew: true,
      },
    ])
  }
  const handleSave = async () => {
    await save({ data, prev: schedules })
    notification.success({ message: 'Saved!' })
  }
  const hasConflicts = (newData, notif = true) => {
    if (!schedules) return false
    const conflictSchedule = cloneDeep(schedules).filter((row) => {
      return newData
        .filter((o) => o.id !== row.id && o.day === row.day)
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

    if (resultConflict && notif) {
      notification.error({
        message: 'Schedule not valid',
        description: 'Theres conflict on the selected schedule, please check',
      })
    }
    return resultConflict
  }

  const dataSource: {
    day: Day
    items: TimeSlot[]
    active: boolean
  }[] = DAYS.map((day) => {
    const slots = data
      ?.filter((slot) => slot.day === day)
      .sort((a, b) => {
        return makeMoment(a.time_start).unix() - makeMoment(b.time_start).unix()
      })
    return {
      day,
      items: !slots?.length
        ? [
            {
              day,
              active: false,
              time_start: '1:00',
              time_end: '2:00',
              freelancer_id: id,
            },
          ]
        : cloneDeep(slots),
      active: slots?.length > 0,
    }
  })

  useEffect(() => {
    if (!isLoading && schedules && !isSaving) {
      console.log({ schedules, isLoading, isSaving })
      setData(schedules)
    }
  }, [schedules, isLoading, isSaving])
  console.log({ data })
  return (
    <div className='main-card-component'>
      <div className='actual-card-schedule'>
        <Flex border='1px' borderColor='white' borderBottomColor='green.400'>
          <Box>
            <h2 className='header-schedule'>Set your schedule availability</h2>
          </Box>
          <Spacer />
          <Box>
            <Button
            className='view-schedule-button'
            colorScheme='green'
            variant='ghost'
            size='xs'
            fontWeight='normal'
            onClick={() => {navigate(routes.templatePageScheduleView())}}>
              VIEW SCHEDULE
            </Button>
          </Box>
       </Flex>
      {/*Sir Jason's Code*/}
        <>
          <MetaTags title="Schedulesetup" description="Schedulesetup page" />
          {!isSaving && !isLoading ? (
            <List
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
                            <div style={{ width: '50px' }}>
                              <Checkbox
                                isChecked={item.active}
                                onChange={(e) => {
                                  console.log(e.target.checked)
                                  if (e.target.checked) {
                                    setData((prev) => {
                                      const newData = cloneDeep(prev)
                                      newData.push({
                                        day: item.day,
                                        active: true,
                                        time_start: '1:00',
                                        time_end: '2:00',
                                        freelancer_id: id,
                                        id: `${
                                          (Date.now() + Math.random() * 1000) * -1
                                        }`,
                                        isNew: true,
                                      })
                                      return newData
                                    })
                                  } else {
                                    const newData = cloneDeep(data).filter(
                                      (o) => o.day !== item.day
                                    )
                                    console.log({ newData })
                                    setData(newData)
                                  }
                                }}
                                colorScheme='green'
                                size='sm'
                                className='checkbox-day'
                                borderColor='green.400'
                              >
                                {item.day}
                              </Checkbox>
                            </div>
                          )}
                          <TimePicker.RangePicker
                            disabled={!item.active}
                            style={
                              {borderColor: "#38A169",
                              borderRadius: "8px",
                              marginLeft: index > 0 ? 108 : 50,
                              width: "150px",
                              height: "32px",
                            }}
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
                          <Switch
                            size='small'
                            checked={slot.active}
                            onChange={(checked) => {
                              const newData = cloneDeep(data)
                              const i = newData.findIndex((o) => o.id === slot.id)
                              if (i > -1) {
                                newData[i].active = checked
                                if (hasConflicts(newData)) {
                                  return false
                                }
                                setData(newData)
                              }
                            }}
                          />
                          {index > 0 && (
                            <Button
                              disabled={!item.active}
                              onClick={() => {
                                setData((prev) => {
                                  const newData = cloneDeep(prev)
                                  const i = newData.findIndex(
                                    (o) => o.id === slot.id
                                  )
                                  if (i > -1) {
                                    newData.splice(i, 1)
                                  }
                                  return newData
                                })
                              }}
                              variant='ghost'
                              colorScheme='green'
                              color='black'
                              size='md'
                            >
                              <BsTrash />
                            </Button>
                          )}
                          <Button
                            className='add-new-interval-button'
                            onClick={handleAdd(slot.day)}
                            disabled={!item.active}
                            colorScheme='green'
                            variant='ghost'
                            size='12px'
                            leftIcon={<AddIcon/>}
                          >
                            Add New Interval
                          </Button>
                        </Space>
                      </List.Item>
                    )}
                  />
                </List.Item>
              )}
            />
          ) : (
            <Skeleton style={{ marginTop: 20 }} />
          )}
          <Button
            disabled={!notSaved || hasConflicts(cloneDeep(data), false)}
            onClick={handleSave}
            colorScheme='green'
            className='save-button'
            size='xs'
            fontWeight='normal'
            width='125px'
            height='31px'
          >
            SAVE
          </Button>
        </>
      </div>
    </div>
  )
}

export default MainCardSchedule
