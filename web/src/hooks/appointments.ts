import { notification } from 'antd'
import moment from 'moment'
import { Moment } from 'moment'
import { useMutation } from 'react-query'
import { useFilter, useRealtime } from 'react-supabase'

import { supabase } from 'src/supabaseClient'

export enum AppointmentStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  CANCELLED = 'cancelled',
  ARCHIVED = 'archived',
  RESCHEDULED = 'rescheduled',
}

export interface Appointment {
  id?: string
  created_at: Date
  freelancer_id: string
  user_id: string
  schedule_date_time: Date
  reserved_date_time: Date
  status: AppointmentStatus
}

export const saveApointment = async ({ data }: { data: Appointment }) => {
  const { error } = await supabase.from('appointments').upsert(data, {
    returning: 'minimal', // Don't return the value after inserting
  })

  if (error) {
    throw error
  }
  return true
}

export const useAppointments = (
  freelancerId: string,
  userId?: string,
  date: Moment = moment()
) => {
  const filter = useFilter(
    (query) => {
      if (freelancerId) query.eq('freelancer_id', freelancerId)
      else query.eq('user_id', userId)
      query.gte('schedule_date_time', date.startOf('month').toISOString())
      query.lte('schedule_date_time', date.endOf('month').toISOString())
      return query
    },
    [freelancerId, userId, date]
  )
  const [result, reexecute] = useRealtime(`appointments`, {
    select: {
      columns: '*',
      filter,
    },
  })

  const { mutateAsync: save } = useMutation(saveApointment, {
    onError: (err: any) => {
      notification.error({
        message: err.message || 'Something went wrong',
      })
    },
  })
  return {
    appointments: (result.data || []) as Appointment[],
    isLoading: result.fetching,
    reexecute,
    save,
  }
}
