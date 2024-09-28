import { useState } from 'react'
import { FaRegAddressCard } from 'react-icons/fa'
import { GiFrostfire } from 'react-icons/gi'
import { MdSwitchAccount } from 'react-icons/md'
import { RiMedal2Line, RiVipCrownLine } from 'react-icons/ri'
import { useUser } from 'src/contexts/UserProvider/useUser'
import { ProfilePartsEnum } from 'src/types'

export const useProfilePage = (): any => {
  const { user } = useUser()
  const [navType, setNavType] = useState<ProfilePartsEnum>(ProfilePartsEnum.PROFILE)

  const buttons = [
    {
      iconComponent: <RiMedal2Line size={46} />,
      navType: ProfilePartsEnum.ADVANCEMENT,
    },
    {
      iconComponent: <GiFrostfire size={46} />,
      navType: ProfilePartsEnum.EFFECTS,
    },
    {
      iconComponent: <FaRegAddressCard size={46} />,
      navType: ProfilePartsEnum.PROFILE,
    },
    { iconComponent: <RiVipCrownLine size={46} />, navType: ProfilePartsEnum.VIP },
    {
      iconComponent: <MdSwitchAccount size={46} />,
      navType: ProfilePartsEnum.TWINKS,
    },
  ]

  const navTypes = [
    ProfilePartsEnum.ADVANCEMENT,
    ProfilePartsEnum.EFFECTS,
    ProfilePartsEnum.PROFILE,
    ProfilePartsEnum.VIP,
    ProfilePartsEnum.TWINKS,
  ]

  const showInfoText = ['Ці розділи позволять робити зміни,', 'з вашим аккаунтом']

  return {
    navType,
    setNavType,
    showInfoText,
    navTypes,
    buttons,
    username: user.username,
  }
}
