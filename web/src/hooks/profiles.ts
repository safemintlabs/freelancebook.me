import { useState } from 'react'

import { notification } from 'antd'
import { useMutation, useQuery } from 'react-query'
import { useFilter, useRealtime } from 'react-supabase'

import { supabase } from 'src/supabaseClient'

export interface IUser {
  services: Array<string>
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
  'err1' = 'Please provide a username.',
  'err2' = 'Space and special characters are not allowed.',
  'err3' = 'Your username should be at least 3 characters, with a maximum of 20 characters.',
  'err23505' = 'User already exists',
}

const getProfiles = async (): Promise<IUser[]> => {
  const { data, error, status } = await supabase.from('profiles').select('*')
  if (status === 200) {
    return data
  }
  throw error
}

export const getProfileById = async (id): Promise<IUser> => {
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

// A function cheking if a username already exists.
// Returns IUser object if it exists. Returns null, otherwise.
// This function does not throw error on 0 database fetch results
export const checkIfUsernameExists = async (
  username: string
): Promise<boolean> => {
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('username', username)
    .neq('id', supabase.auth.user().id)

  // if data is empty, then the username does not exist
  return data.length !== 0
}

export const getProfileByUsername = async (username): Promise<IUser> => {
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

export const updateProfile = async (
  profile: Partial<IUser>
): Promise<boolean> => {
  const { username } = profile
  if (username.length === 0) {
    throw { code: 1 }
  }
  const alphanumeric = /^[a-z0-9]+$/i
  if (!alphanumeric.test(username)) {
    throw { code: 2 }
  }
  if (username.length < 3 || username.length > 20) {
    throw { code: 3 }
  }

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
  const [error, setError] = useState(null)
  const { id } = supabase.auth.user() || {}
  const filter = useFilter(
    (query) => {
      if (username) {
        query.eq('username', username)
      } else {
        query.eq('id', id)
      }
      return query
    },
    [username, id]
  )
  const [data, refetch] = useRealtime<IUser>(
    'profiles',
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
  const { isLoading: isSaving, mutateAsync: save } = useMutation(
    updateProfile,
    {
      onSuccess: () => refetch(),
      onError: (err: any) => {
        setError(ErrorCodes['err' + err.code])
        notification.error({
          message: 'Something went wrong',
          description: ErrorCodes['err' + err.code],
        })
      },
    }
  )
  const { isLoading: isChecking, mutateAsync: checkUsername } = useMutation(
    checkIfUsernameExists,
    {
      onError: (err: any) => {
        notification.error({
          message: 'Something went wrong',
          description: ErrorCodes['err' + err.code],
        })
      },
    }
  )
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
  const profile = data?.data?.[0]
  const isMe = profile?.id === id

  console.log({ data, profile })
  return {
    isChecking,
    checkUsername,
    profile,
    isSaving,
    save,
    percentage,
    isMe,
    id: profile?.id,
    error,
    isLoading: !profile,
  }
}

// A function checking if the IUser object is the auth user
export const isMe = (user: IUser) => {
  const { id } = supabase.auth.user() || {}
  if (user?.id === id) {
    return true
  }
  return false
}
