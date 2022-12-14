import React from 'react'
import TicketCard from './TicketCard'
import { v4 as uuidv4 } from "uuid"
import { useContext } from 'react'
import { UserContext } from "../context/UserProvider"

function TicketCardContainer() {
    const { tickets } = useContext(UserContext)
  return (
    <div className='card-container'>
        {tickets.map((ticket) => {
            return (
                <TicketCard
                    key={uuidv4()}
                    ticket={ticket}
                />
            );
        })}
    </div>
  );
}

export default TicketCardContainer