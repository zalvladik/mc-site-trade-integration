import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import Pp from 'src/services/api/Pp'
import type { PpParticleT } from 'src/services/api/Pp/types'

export const useCreatePp = () => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: Pp.postPpParticle,
    onSuccess: (data: PpParticleT) => {
      queryClient.setQueryData<PpParticleT[]>(CacheKeys.PP, effects => [
        ...(effects ?? []),
        data,
      ])

      toast.success({ message: ['Ефект добавлено', 'перезайдіть в гру!'] })
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, isLoading }
}
