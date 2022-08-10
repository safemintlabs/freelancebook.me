import { useState } from 'react'

import { notification } from 'antd'
import moment from 'moment'
import { Moment } from 'moment'
import { useMutation } from 'react-query'
import { useFilter, useRealtime } from 'react-supabase'
import { Appointment } from 'types/appointments'

import { supabase } from 'src/supabaseClient'

export const saveApointment = async ({ data }: { data: Appointment }) => {
  const { error, data: result } = await supabase
    .from('appointments')
    .upsert(data, {
      returning: 'representation', // Don't return the value after inserting
    })

  if (error) {
    throw error
  }
  return result?.[0] as Appointment
}

export const useAppointments = (freelancerId: string, userId?: string) => {
  const [date, setDate] = useState<Moment>()
  const startDate = (date || moment()).clone().startOf('month').toISOString()
  const endDate = (date || moment()).clone().endOf('month').toISOString()
  const filter = useFilter(
    (query) => {
      if (freelancerId) query.eq('freelancer_id', freelancerId)
      else if (userId) query.eq('freelancer_id', userId)
      query.gte('schedule_date_time', startDate)
      query.lte('schedule_date_time', endDate)
      return query
    },
    [freelancerId, userId, startDate, endDate]
  )
  const [resultPublic, reexecutePublic] = useRealtime(
    'appointments_public',
    {
      select: {
        columns: '*',
        filter,
      },
    },
    (data, payload) => {
      console.log({ data, payload })
      return true
    }
  )
  const [result, reexecute] = useRealtime(
    'appointments',
    {
      select: {
        columns: '*',
        filter,
      },
    },
    (data, payload) => {
      console.log({ data, payload })
      return true
    }
  )

  const { mutateAsync: save, isLoading: isSaving } = useMutation(
    saveApointment,
    {
      onError: (err: any) => {
        notification.error({
          message: err.message || 'Something went wrong',
        })
      },
    }
  )
  const finalResult = freelancerId ? resultPublic : result
  return {
    appointments: (finalResult.data || []) as Appointment[],
    isLoading: finalResult.fetching,
    reexecute: freelancerId ? reexecutePublic : reexecute,
    save,
    setDate,
    date: date || moment(),
    isSaving: isSaving,
  }
}
