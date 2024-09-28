import { Container } from 'src/pages/ProfilePage/styles'
import { useProfilePage } from 'src/pages/ProfilePage/useProfilePage'
import { ProfilePartsEnum } from 'src/types'

import AdvancementsMap from 'src/components/AdvancementsMap'
import NavBarTop from 'src/components/NavBarTop'
import {
  ProfileComponent,
  ProfileEffects,
  ProfileTwinks,
  ProfileVip,
} from 'src/components/Profile'

const ProfilePage = (): JSX.Element => {
  const { navType, setNavType, showInfoText, navTypes, buttons, username } =
    useProfilePage()

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
      <Container
        style={
          navType === ProfilePartsEnum.ADVANCEMENT
            ? {
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(20,20,20,0.7)',
              }
            : {}
        }
      >
        {navType === ProfilePartsEnum.PROFILE && <ProfileComponent />}
        {navType === ProfilePartsEnum.ADVANCEMENT && (
          <AdvancementsMap username={username} />
        )}
        {navType === ProfilePartsEnum.EFFECTS && <ProfileEffects />}
        {navType === ProfilePartsEnum.VIP && <ProfileVip />}
        {navType === ProfilePartsEnum.TWINKS && <ProfileTwinks />}
      </Container>
    </>
  )
}

export default ProfilePage
