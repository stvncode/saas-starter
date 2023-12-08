import { useQuery } from '@tanstack/react-query'
import { app } from '../client'

export const getUser = app.auth.me.get

export const useGetUser = () =>
  useQuery({
    queryKey: [{}],
    queryFn: async () => {
      const response = await getUser()
      return response.data
    },
  })
