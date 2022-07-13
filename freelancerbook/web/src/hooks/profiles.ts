import { useQuery } from 'react-query'

import { supabase } from 'src/supabaseClient'

export interface IUser {
  avatar_url: string
  created_at: Date
  first_name: string
  id: string
  last_name: string
  updated_at: Date
  username: string
  website: string
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
      console.log({ err })
    },
  })
  return { data, isLoading }
}

export const useProfile = (username?: string) => {
  const { id } = supabase.auth.user() || {}
  const { data, isLoading } = useQuery(
    ['profiles', username],
    () =>
      username ? getProfileByUsername(username) : id && getProfileById(id),
    {
      onError: (err: any) => {
        console.log({ err })
      },
    }
  )
  return { data, isLoading }
}
