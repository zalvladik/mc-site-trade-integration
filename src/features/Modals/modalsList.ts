import { Modals } from 'src/features/Modals/constants'
import ModalAdvancements from 'src/features/Modals/ModalAdvancements'
import ModalEffects from 'src/features/Modals/ModalEffects'
import ModalEnd from 'src/features/Modals/ModalEnd'
import ModalItemsInShulker from 'src/features/Modals/ModalItemsInShulker'
import ModalItemsInTicket from 'src/features/Modals/ModalItemsInTicket'
import ModalLot from 'src/features/Modals/ModalLot'
import ModalTwinks from 'src/features/Modals/ModalTwinks'
import ModalVip from 'src/features/Modals/ModalVip'

const modalsList = [
  { name: Modals.ADVANCEMENTS, component: ModalAdvancements },
  { name: Modals.LOT, component: ModalLot },
  { name: Modals.ITEM_TICKETS, component: ModalItemsInTicket },
  { name: Modals.SHULKER_ITEMS, component: ModalItemsInShulker },
  { name: Modals.VIP, component: ModalVip },
  { name: Modals.EFFECTS, component: ModalEffects },
  { name: Modals.END, component: ModalEnd },
  { name: Modals.TWINKS, component: ModalTwinks },
]

export default modalsList
