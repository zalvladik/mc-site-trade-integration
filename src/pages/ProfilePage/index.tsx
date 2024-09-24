import { Container } from 'src/pages/ProfilePage/styles'
import { useProfilePage } from 'src/pages/ProfilePage/useProfilePage'
import { ProfilePartsEnum } from 'src/types'

import NavBarTop from 'src/components/NavBarTop'
import {
  ProfileComponent,
  ProfileEffects,
  ProfileTwinks,
  ProfileVip,
} from 'src/components/Profile'

const ProfilePage = (): JSX.Element => {
  const { navType, setNavType, showInfoText, navTypes, buttons } = useProfilePage()

  return (
    <>
      <NavBarTop
        {...{
          navType,
          setNavType,
          buttons,
          navTypes,
          showInfoText,
        }}
      />
      <Container>
        {navType === ProfilePartsEnum.FRIENDS && <ProfileComponent />}
        {navType === ProfilePartsEnum.ADVANCEMENT && <ProfileComponent />}
        {navType === ProfilePartsEnum.EFFECTS && <ProfileEffects />}
        {navType === ProfilePartsEnum.VIP && <ProfileVip />}
        {navType === ProfilePartsEnum.TWINKS && <ProfileTwinks />}
      </Container>
    </>
  )
}

export default ProfilePage
