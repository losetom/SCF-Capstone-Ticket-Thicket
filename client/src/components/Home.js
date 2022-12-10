import React from 'react'
import NavBar from './NavBar/NavBar'
// import NavBar from './NavBar/NavBar'

function Home({user}) {
  return (
    <div>
        <NavBar />
        {/* <h1>Welcome {user.username}!</h1> */}
    </div>
  )
}

export default Home