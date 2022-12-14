import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Login( {setUser} ) {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const stateCopy = {...loginCredentials}
    stateCopy[e.target.name] = e.target.value
    setLoginCredentials(stateCopy)
}

  const handleLoginSubmit = () => {
    const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginCredentials)
    }
    fetch('/login', config)
      .then((response) => response.json())
      .then(user => {
        console.log(user)
        setUser(user)
        navigate("/")
        setLoginCredentials({
          email: "",
          password: ""
        })
        // setUser(user)
        // navigate("/")
      })
  }

return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='loginEmail' type='email' name='email' value={loginCredentials.email} onChange={handleInputChange} size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='loginPassword' type='password' name='password' value={loginCredentials.password} onChange={handleInputChange} size="lg"/>

              <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleLoginSubmit}>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="/signup" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login