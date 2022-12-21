import React, { useState } from 'react'
import UserProvider, { UserContext } from '../context/UserProvider';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

function NewTicket() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zip, setZip] = useState("")
    const [time, setTime] = useState("")
    const [seat, setSeat] = useState("")
    const [price, setPrice] = useState("")
    const [errors, setErrors] = useState("")

    const { tickets, setTickets } = useContext(UserContext)
    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()
        const ticket = {
            name,
            address,
            city, 
            state,
            zip,
            time,
            seat,
            price
        }

        fetch('/tickets', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(ticket)
        })
        .then(response => {
            if(response.ok) {
                response.json().then((ticket) => {
                    const ticketsCopy = JSON.parse(JSON.stringify(tickets))
                    ticketsCopy.push(ticket)
                    setTickets(ticketsCopy)
                    navigate("/tickets")
                })
            } else {
                response.json().then(e => setErrors(errors))
            }
        })
    }

  return (
    <Form onSubmit={onSubmit}>
        <br></br>
        <header style={{color: "blue"}}><em><h1>Sell Ticket</h1></em></header>
        
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridConcertName">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Event Name..." value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>

        {/* <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Street Address</Form.Label>
        <Form.Control placeholder="1234 Address Street Drive" value={address} onChange={(e) => setAddress(e.target.value)}/>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

      {/* <Row className="mb-3"> */}
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder='City...' value={city} onChange={(e) => setCity(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e) => setState(e.target.value)}>
            <option>Choose...</option>
            <option>NY</option>
            <option>FL</option>
            <option>CA</option>
            <option>DE</option>
            <option>WV</option>
            <option>TX</option>
            <option>NJ</option>
            <option>NV</option>
            <option>CO</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder='Zip...' value={zip} onChange={(e) => setZip(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSeat">
          <Form.Label>Seat</Form.Label>
          <Form.Control placeholder='Seat #...' value={seat} onChange={(e) => setSeat(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Time</Form.Label>
          <Form.Control placeholder='Event Time...' value={time} onChange={(e) => setTime(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder='Ticket Price...' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </Form.Group>
      {/* </Row> */}

        <br></br>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I understand the terms of service" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default NewTicket