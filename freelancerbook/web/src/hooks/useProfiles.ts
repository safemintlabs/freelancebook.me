import { useQuery } from 'react-query'

import { supabase } from 'src/supabaseClient'

interface IUser {
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

export const useProfiles = () => {
  const { data, isLoading } = useQuery('profiles', getProfiles, {
    onError: (err: any) => {
      console.log({ err })
    },
  })
  return { data, isLoading }
}
