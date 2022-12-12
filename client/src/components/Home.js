import { useContext } from 'react'
import React from 'react'
import NavBar from './NavBar/NavBar'
import { UserContext } from '../context/UserProvider'
import TicketCardContainer from './TicketCardContainer'
// import NavBar from './NavBar/NavBar'

function Home() {
    const { user } = useContext(UserContext)

    return (
        <div className='home'>
            <NavBar />
            <TicketCardContainer />
            {/* <h1>Welcome {user.user}!</h1> */}
        </div>
    );
}

export default Home