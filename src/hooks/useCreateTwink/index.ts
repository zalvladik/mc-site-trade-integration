import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import Twink from 'src/services/api/Twink'
import type { TwinkResponse } from 'src/services/api/Twink/types'

export const useCreateTwink = (funcAfter: () => void) => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: Twink.createTwink,
    onSuccess: (data: TwinkResponse) => {
      queryClient.setQueryData<TwinkResponse[]>(CacheKeys.TWINKS, twinks => [
        ...(twinks ?? []),
        data,
      ])
      toast.success({ message: ['Твін успішно куплено !'] })

      funcAfter()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, isLoading }
}
