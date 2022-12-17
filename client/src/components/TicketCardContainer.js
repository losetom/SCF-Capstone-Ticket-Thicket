import React from "react";
import TicketCard from "./TicketCard";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import "./CSS/TicketCardContainer.css";

function TicketCardContainer() {
  const { tickets } = useContext(UserContext);
  return (
    <>
      <h1 className="my-tickets-header">My Tickets</h1>
      <div className="card-container">
        {tickets.map((ticket) => {
          return <TicketCard key={uuidv4()} ticket={ticket} />;
        })}
      </div>
    </>
  );
}

export default TicketCardContainer;
