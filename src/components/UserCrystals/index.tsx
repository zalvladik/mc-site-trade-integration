import CrystalList from 'src/components/CrystalList'
import { useUserCrystals } from 'src/components/UserCrystals/useUserCrystals'

import PaginationTab from 'src/features/PaginationTab'

const UserCrystals = (): JSX.Element => {
  const { isLoading, itemListProps, paginationTabProps } = useUserCrystals()

  return (
    <div style={{ position: 'relative' }}>
      <CrystalList {...itemListProps} isLoading={isLoading} />
      <PaginationTab
        style={{
          opacity: paginationTabProps.maxPage > 1 ? 1 : 0,
          pointerEvents: paginationTabProps.maxPage > 1 ? 'auto' : 'none',
        }}
        {...paginationTabProps}
      />
    </div>
  )
}

export default UserCrystals
