import { notification } from 'antd'
import { isEqual } from 'lodash'
import { Moment } from 'moment'
import { useMutation } from 'react-query'
import { useFilter, useRealtime } from 'react-supabase'

import { supabase } from 'src/supabaseClient'

export type Day = 'M' | 'T' | 'W' | 'TH' | 'F' | 'S' | 'SU'
export const DAYS: Day[] = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S']

export interface TimeSlot {
  id?: string
  day: Day
  active: boolean
  time_start: string | Moment
  time_end: string | Moment
  freelancer_id: string
  isNew?: boolean
}

export const saveSchedule = async ({
  data,
  prev,
}: {
  data: TimeSlot[]
  prev: TimeSlot[]
}) => {
  await Promise.all(
    data.map(async (row) => {
      if (
        !row.id ||
        !isEqual(
          row,
          prev.find((o) => o.id === row.id)
        )
      ) {
        if (row.isNew) {
          delete row.isNew
          delete row.id
        }
        const { error } = await supabase.from('timeslots').upsert(row, {
          returning: 'minimal', // Don't return the value after inserting
        })

        if (error) {
          throw error
        }
      }

      return true
    })
  )

  await Promise.all(
    prev.map(async (row) => {
      if (!data.find((o) => o.id === row.id)) {
        const { error } = await supabase
          .from('timeslots')
          .delete()
          .match({ id: row.id })

        if (error) {
          throw error
        }
      }

      return true
    })
  )
}

export const useSchedule = (userId: string) => {
  const filter = useFilter(
    (query) => query.eq('freelancer_id', userId),
    [userId]
  )
  const [result, reexecute] = useRealtime(`timeslots`, {
    select: {
      columns: '*',
      filter,
    },
  })

  const { mutateAsync: save } = useMutation(saveSchedule, {
    onError: (err: any) => {
      notification.error({
        message: err.message || 'Something went wrong',
      })
    },
  })
  return {
    schedules: (result.data || []) as TimeSlot[],
    isLoading: result.fetching,
    reexecute,
    save,
  }
}
