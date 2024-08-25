import { useModals } from 'src/contexts/ModalProvider/useModals'
import type { UserT } from 'src/contexts/UserProvider/types'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { useLogout } from 'src/hooks/useLogout'

import { Modals } from 'src/features/Modals/constants'

const useProfilePage = () => {
  const { user, updateUser } = useUser()
  const { onOpen } = useModals()

  const { mutate, isLoading } = useLogout()

  const openAdvancementsModal = (): void => {
    onOpen({ name: Modals.ADVANCEMENTS, data: { username: user.username } })
  }

  const afterSubmit = (user: UserT) => {
    updateUser(user)
  }

  const openVipModal = (): void => {
    onOpen({ name: Modals.VIP, data: { afterSubmit, user } })
  }

  const openEndModal = (): void => {
    onOpen({ name: Modals.END })
  }

  const openEffectsModal = (): void => {
    onOpen({ name: Modals.EFFECTS, data: { user } })
  }

  const logout = (): void => mutate()

  return {
    user,
    isLoading,
    logout,
    openAdvancementsModal,
    openEffectsModal,
    openVipModal,
    openEndModal,
  }
}

export default useProfilePage
