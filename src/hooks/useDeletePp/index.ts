import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import Pp from 'src/services/api/Pp'
import type { PpParticleT } from 'src/services/api/Pp/types'

export const useDeletePp = () => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { data, mutate, isLoading } = useMutation({
    mutationFn: Pp.deletePpParticle,
    onSuccess: (data: { uuid: string }) => {
      queryClient.setQueryData<PpParticleT[]>(
        CacheKeys.PP,
        effects => effects?.filter(item => item.uuid !== data.uuid) ?? [],
      )

      queryClient.invalidateQueries(CacheKeys.PP)

      toast.success({ message: ['Ефект видалено'] })
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, data, isLoading }
}
