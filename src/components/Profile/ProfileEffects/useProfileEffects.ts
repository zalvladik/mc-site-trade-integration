import { useState } from 'react'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useCreatePp } from 'src/hooks/useCreatePp'
import { useDeletePp } from 'src/hooks/useDeletePp'
import { useGetPp } from 'src/hooks/useGetPp'

export const useProfileEffects = () => {
  const [isCreateEffect, setIsCreateEffect] = useState(false)

  const [effectStyle, setEffectStyle] = useState<string>('')
  const [selectedEffect, setSelectedEffect] = useState<string>('')

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

  return {
    user,
    data,
    isLoading,
    deleteEffect,
    isLoadingDeletePp,
    isCreateEffect,
    setIsCreateEffect,
    effectStyle,
    selectedEffect,
    setEffectStyle,
    setSelectedEffect,
    addEffect,
    isLoadingCreatePpp,
  }
}
