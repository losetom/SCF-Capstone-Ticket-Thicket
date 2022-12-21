import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { v4 as uuidv4 } from "uuid";

function Login({ setUser }) {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { errors, setErrors, handleLoginSubmit } = useContext(UserContext);

  const handleInputChange = (e) => {
    const stateCopy = { ...loginCredentials };
    stateCopy[e.target.name] = e.target.value;
    setLoginCredentials(stateCopy);
  };

  // const handleLoginSubmit = () => {
  //   const config = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(loginCredentials),
  //   };
  //   fetch("/login", config).then((response) => {

  //     if (response.ok) {
  //       response.json().then((user) => {
  //         setUser(user);
  //         navigate("/");
  //       });
  //     } else {
  //       response.json().then((errors) => {
  //         setErrors(errors);
  //         setTimeout(() => setErrors([errors]), 3000)
  //       });
  //     }
  //     setLoginCredentials({
  //       email: "",
  //       password: "",
  //     });
  //   });
  // };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{height: "100vh", backgroundImage: 'url(https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/boardwalk_carnival.ashx?mw=620&mh=408)'}}>
      <MDBRow className="d-flex justify-content-center align-items-center h-100" >
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="loginEmail"
                type="email"
                name="email"
                value={loginCredentials.email}
                onChange={handleInputChange}
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="loginPassword"
                type="password"
                name="password"
                value={loginCredentials.password}
                onChange={handleInputChange}
                size="lg"
              />

              <p className="small mb-3 pb-lg-2">
                <a className="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
                onClick={() => handleLoginSubmit(loginCredentials)}
              >
                Login
              </MDBBtn>

              {errors.map((err) => <div key={uuidv4()} style={{color: "red"}}>{err}</div>)}

              <br></br>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link to="/signup" >
                    Sign Up
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
