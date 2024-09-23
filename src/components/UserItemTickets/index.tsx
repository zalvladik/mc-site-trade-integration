import InformationButton from 'src/components/InformationButton'
import Skeleton from 'src/components/Skeleton'
import { Container, TicketIdWrapper } from 'src/components/UserItemTickets/styles'
import { useUserItemTickets } from 'src/components/UserItemTickets/useUserItemTickets'

const UserItemTickets = (): JSX.Element => {
  const { data, isLoading, showInfo, openModal } = useUserItemTickets()

  return (
    <Container className={`itemTicket${data.length} heartbeat-outline`}>
      <Skeleton
        isDataExist={data.length}
        isLoading={isLoading}
        emptyText="Квитки відсутні"
      >
        {data.map(({ id }) => {
          return (
            <button
              key={id}
              onClick={() => openModal(id)}
              style={{
                backgroundImage: `url('/assets/item_ticket_vertical.png')`,
              }}
            >
              <TicketIdWrapper>
                <div>{id}</div>
              </TicketIdWrapper>
            </button>
          )
        })}

        <h1>{data.length}/5</h1>
      </Skeleton>
      <InformationButton
        onClick={showInfo}
        style={{ left: '50%', bottom: '-20%' }}
      />
    </Container>
  )
}

export default UserItemTickets
