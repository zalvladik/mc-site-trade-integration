import { useAuction } from 'src/contexts/AuctionProvider/useAuction'

export const useAuctionControlletFilter = () => {
  const { filterListParams, updateFilterListParams, isFragment } = useAuction()

  const { didNeedIdentical, didNeedShulkers, didNeedUserLots, didPriceToUp } =
    filterListParams

  const getImgSelectForFilter = (isSelected: boolean) => {
    return isSelected
      ? '/assets/icons_for_ui/confirm.png'
      : '/assets/icons_for_ui/cancel.png'
  }

  const componentIsVanish =
    isFragment.isCreateLotFragment || isFragment.isUserLotsFragment

  const buttonFilterList = [
    {
      description: 'Шукати предмети в шалкерах?',
      urlImg: '/assets/shulkers/shulker_box.webp',
      isSelected: didNeedShulkers,
      onClick: () => {
        updateFilterListParams({
          didNeedShulkers: !didNeedShulkers,
        })
      },
    },
    {
      description: 'Показувати ваші лоти?',
      urlImg: '/assets/items_for_ui/player_head.png',
      isSelected: didNeedUserLots,
      onClick: () => {
        updateFilterListParams({
          didNeedUserLots: !didNeedUserLots,
        })
      },
    },
    {
      description: 'Пошук ідентичного предмета?',
      urlImg: '/assets/items_for_ui/zombie_chiken.webp',
      isSelected: didNeedIdentical,
      onClick: () => {
        updateFilterListParams({
          didNeedIdentical: !didNeedIdentical,
        })
      },
    },
  ]

  return {
    componentIsVanish,
    buttonFilterList,
    getImgSelectForFilter,
    didPriceToUp,
    updateFilterListParams,
  }
}
