import { notification } from 'antd'
import { useMutation, useQuery } from 'react-query'

import { supabase } from 'src/supabaseClient'

export interface IUser {
  email: string
  avatar_url: string
  created_at: Date
  first_name: string
  id: string
  last_name: string
  updated_at: Date
  username: string
  website: string
  about: string
  service: string
  isActive: boolean
}

enum ErrorCodes {
  'err42501' = 'User already exists',
}

const getProfiles = async (): Promise<IUser[]> => {
  const { data, error, status } = await supabase.from('profiles').select('*')
  if (status === 200) {
    return data
  }
  throw error
}

const getProfileById = async (id): Promise<IUser> => {
  const { data, error, status } = await supabase
    .from('profiles')
    .select(`*`)
    .eq('id', id)
    .single()
  if (status === 200) {
    return data
  }
  throw error
}
const getProfileByUsername = async (username): Promise<IUser> => {
  const { data, error, status } = await supabase
    .from('profiles')
    .select(`*`)
    .eq('username', username)
    .single()
  if (status === 200) {
    return data
  }
  throw error
}

export const useProfiles = () => {
  const { data, isLoading } = useQuery('profiles', getProfiles, {
    onError: (err: any) => {
      notification.error({
        message: 'Something went wrong',
        description: ErrorCodes['err' + err.code],
      })
    },
  })
  return { data, isLoading }
}

export const updateProfile = async (profile: Partial<IUser>) => {
  const user = supabase.auth.user()

  const updates = {
    ...profile,
    id: user.id,
    updated_at: new Date(),
  }

  const { error } = await supabase.from('profiles').upsert(updates, {
    returning: 'minimal', // Don't return the value after inserting
  })

  if (error) {
    throw error
  }

  return true
}

export const useProfile = (username?: string) => {
  const { id } = supabase.auth.user() || {}
  const { data, isLoading, refetch } = useQuery(
    ['profiles', username],
    () =>
      username ? getProfileByUsername(username) : id && getProfileById(id),
    {
      onError: (err: any) => {
        notification.error({
          message: 'Something went wrong',
          description: ErrorCodes['err' + err.code],
        })
      },
    }
  )
  const { isLoading: isSaving, mutate: save } = useMutation(updateProfile, {
    onSuccess: () => refetch(),
    onError: (err: any) => {
      notification.error({
        message: 'Something went wrong',
        description: ErrorCodes['err' + err.code],
      })
    },
  })
  const keys =
    (data &&
      Object.keys(data).filter(
        (o) => !['id', 'updated_at', 'created_at', 'isActive'].includes(o)
      )) ||
    []
  const percentage = parseInt(
    (
      ((keys.reduce((value, key) => {
        return value + (`${data[key] || ''}`.length ? 1 : 0)
      }, 0) || 0) /
        keys.length) *
      100
    ).toFixed(0)
  )
  const isMe = data?.id === id

  return { data, isLoading, isSaving, save, percentage, isMe, id: data?.id }
}
