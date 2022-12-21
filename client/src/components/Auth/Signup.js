import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import { UserContext } from '../../context/UserProvider';
import { useContext } from 'react'

function Signup({ setUser }) {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    
    const { handleFormSubmit, errors } = useContext(UserContext)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const stateCopy = {...userData}
        stateCopy[e.target.name] = e.target.value
        setUserData(stateCopy)
    }

    // const handleFormSubmit = () => {
    //     const config = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(userData)
    //     }

    //     fetch("/signup", config)
    //         .then(response => response.json())
    //         .then(user => {
    //             navigate("/")
    //             setUser(user)
    //         })
    //         .catch(err => console.log(err))
    // }
    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{height: "100vh", backgroundImage: 'url(https://media.istockphoto.com/id/479882058/photo/tickets.jpg?s=612x612&w=0&k=20&c=f99i-RnFVbI-URmhGBWZV9A6l5wtRbZ-dXKogBGC2s0=)'}}>
          <div className='mask gradient-custom-3'>{errors.map(err => <p style={{backgroundColor: "red"}}>{err}</p>)}</div>
          <MDBCard className='m-5' style={{maxWidth: '600px'}}>
            <MDBCardBody className='px-5'>
              <b><em><h2 className="text-uppercase text-center mb-5">Create an account</h2></em></b>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' value={userData.username} name='username' onChange={handleInputChange} required/>
              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' value={userData.email} name='email' onChange={handleInputChange} required/>
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' value={userData.password} name='password' onChange={handleInputChange} required/>
              <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' value={userData.password_confirmation} name='password_confirmation' onChange={handleInputChange} required/>
              <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
              </div>
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={() => handleFormSubmit(userData)}>Register</MDBBtn>

              <div>
                <p className="mb-0">
                  Already have an account?{" "}
                  <Link to="/login" >
                    Login
                  </Link>
                </p>
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      );
}

export default Signup