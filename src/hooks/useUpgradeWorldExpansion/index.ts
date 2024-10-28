import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import WorldExpansion from 'src/services/api/WorldExpansion'
import type { CreateWorldExpansionPaymentsProps } from 'src/services/api/WorldExpansion/types'
import type { WorldEnum } from 'src/types'

export const useUpgradeWorldExpansion = (
  worldType: WorldEnum,
  updateUserMoney: (value: number) => void,
  newMoney: number,
) => {
  const toast = useToast()
  const queryClient = useQueryClient()

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: CreateWorldExpansionPaymentsProps) =>
      WorldExpansion.createWorldExpansionPayments(payload),
    onSuccess: async () => {
      toast.success({ message: ['Успішне поповнення'] })

      updateUserMoney(newMoney)

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
