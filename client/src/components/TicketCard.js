import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function TicketCard({ ticket }) {
  function handleDelete() {
    fetch(`/tickets/${ticket.id}`, {
      method: "DELETE"
    })
    .then(response => {
      if(response.ok){
        response.json().then(console.log)
      } else {
        response.json().then(console.log)
      }
    })
  }
  
  console.log(ticket);
  return (
    


    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>{ticket.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Address: {ticket.address} </ListGroup.Item>
        <ListGroup.Item>City: {ticket.city} </ListGroup.Item>
        <ListGroup.Item>State: {ticket.state} </ListGroup.Item>
        <ListGroup.Item>Zip: {ticket.zip} </ListGroup.Item>
        <ListGroup.Item>Time: {ticket.time} </ListGroup.Item>
        <ListGroup.Item>Seat: {ticket.seat} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link>Update</Card.Link>
        <Card.Link onClick={handleDelete}>Delete</Card.Link>
      </Card.Body>
    </Card>

  );
}

export default TicketCard;
// <div>

//   {/* <h2>{ticket.name}</h2>
//   <h2>{ticket.address}</h2>
//   <h2>{ticket.city}</h2>
//   <h2>{ticket.state}</h2>
//   <h2>{ticket.zip}</h2>
//   <h2>{ticket.time}</h2>
//   <h2>{ticket.seat}</h2>
//   <br></br> */}
// </div>
