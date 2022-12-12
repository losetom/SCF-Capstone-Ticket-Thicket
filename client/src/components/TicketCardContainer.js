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
                <h1></h1>
            );
        })}
    </div>
  );
}

export default TicketCardContainer