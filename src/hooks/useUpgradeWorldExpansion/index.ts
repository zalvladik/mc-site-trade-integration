import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import WorldExpansion from 'src/services/api/WorldExpansion'
import type { CreateWorldExpansionPaymentsProps } from 'src/services/api/WorldExpansion/types'
import type { WorldEnum } from 'src/types'

export const useUpgradeWorldExpansion = (
  worldType: WorldEnum,
  decrementUserMoney: (value: number | string) => void,
  value: string,
) => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: CreateWorldExpansionPaymentsProps) =>
      WorldExpansion.createWorldExpansionPayments(payload),
    onSuccess: async () => {
      toast.success({ message: ['Успішне поповнення'] })

      decrementUserMoney(value)

      queryClient.invalidateQueries([CacheKeys.WORLD_EXPANSION, worldType])
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return {
    mutate,
    isLoading,
  }
}
