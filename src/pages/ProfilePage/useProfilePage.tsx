import { useState } from 'react'
import { GiFrostfire } from 'react-icons/gi'
import { MdPeopleOutline, MdSwitchAccount } from 'react-icons/md'
import { RiMedal2Line, RiVipCrownLine } from 'react-icons/ri'
import { ProfilePartsEnum } from 'src/types'

export const useProfilePage = (): any => {
  const [navType, setNavType] = useState<ProfilePartsEnum>(ProfilePartsEnum.FRIENDS)

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
      iconComponent: <MdPeopleOutline size={46} />,
      navType: ProfilePartsEnum.FRIENDS,
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
    ProfilePartsEnum.FRIENDS,
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
  }
}
