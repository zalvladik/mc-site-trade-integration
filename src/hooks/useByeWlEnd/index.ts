import { useMutation, useQueryClient } from 'react-query'
import { CacheKeys } from 'src/constants'
import { useModals } from 'src/contexts/ModalProvider/useModals'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import WlEnd from 'src/services/api/WlEnd'
import type { WlEndT } from 'src/services/api/WlEnd/types'

export const useByeWlEnd = () => {
  const { onClose } = useModals()

  const queryClient = useQueryClient()

  const toast = useToast()

  const { mutate, isLoading } = useMutation({
    mutationFn: () => WlEnd.postWlEnd(),
    onSuccess: async (data: WlEndT) => {
      toast.success({ message: ['Доступ успішно куплено!'] })

      queryClient.setQueryData<WlEndT[]>(CacheKeys.WL_END, users => [
        ...(users ?? []),
        data,
      ])
      onClose()
    },
    onError: (error: Error) => {
      toast.error({ message: [error.message] })
    },
  })

  return { mutate, isLoading }
}
