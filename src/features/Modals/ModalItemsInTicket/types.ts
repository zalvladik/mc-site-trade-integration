import type { ModalDialogProps } from 'src/features/Modals/types'

export type ModalItemsInTicketProps = {
  data: { itemTicketId: number }
} & ModalDialogProps

export type StyledDeleteItemTicketProps = {
  isLoading: boolean
}
