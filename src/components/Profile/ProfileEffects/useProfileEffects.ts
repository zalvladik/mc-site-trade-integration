import { useState } from 'react'
import { useToast } from 'src/contexts/ToastProvider/useToast'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useCreatePp } from 'src/hooks/useCreatePp'
import { useDeletePp } from 'src/hooks/useDeletePp'
import { useGetPp } from 'src/hooks/useGetPp'

export const useProfileEffects = () => {
  const toast = useToast()
  const [effectStyle, setEffectStyle] = useState<string>('')
  const [selectedEffect, setSelectedEffect] = useState<string>('')
  const [ppEffectsPage, setPpEffectsPage] = useState<number>(1)

  const changePpEffectsPage = (newPage: number) => {
    if (newPage <= 0 || newPage >= 5) return

    setPpEffectsPage(newPage)
  }

  const { user } = useUser()

  const { data, isLoading } = useGetPp()
  const { mutate: mutateDeletePp, isLoading: isLoadingDeletePp } = useDeletePp()

  const { mutate: mutateCreatePp, isLoading: isLoadingCreatePpp } = useCreatePp()

  const deleteEffect = (uuid: string) => {
    mutateDeletePp(uuid)
  }

  const addEffect = () => {
    mutateCreatePp({ style: effectStyle, effect: selectedEffect })
  }

  const showInfo = () => {
    toast.info({
      message: [
        'Ви можете вибрати собі ефект.',
        'Можна накладати не більш 3 ефектів.',
        'Створення ефекти здійснюється автоматично,',
        'не потрібно перезаходити на серверу/гру.',
      ],
      autoHideDuration: 8,
      fontSize: 20,
    })
  }

  return {
    user,
    data,
    isLoading,
    deleteEffect,
    isLoadingDeletePp,
    showInfo,
    effectStyle,
    selectedEffect,
    setEffectStyle,
    setSelectedEffect,
    addEffect,
    isLoadingCreatePpp,
    ppEffectsPage,
    changePpEffectsPage,
  }
}
