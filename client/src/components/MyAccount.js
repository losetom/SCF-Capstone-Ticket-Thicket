import React, { useState } from 'react'
import { UserContext } from '../context/UserProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function MyAccount() {
    const { user } = useContext(UserContext)
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        password_confirmation: ""
    })
    const navigate = useNavigate()

    function handleUpdate(e){
        e.preventDefault()
        const config = {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(userData)
        }
        fetch(`/users/${user.id}`, config)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    console.log(user)
    function handleDeleteClick(){
        const config = {
            method: "DELETE"
        }
        fetch(`/users/${user.id}`, config)
        navigate('/login')

    }
  return (
    <div>
        <form onSubmit={handleUpdate}>
            <input type="text" name='name' value={userData.username} onChange={(e) => setUserData(e.target.value)}></input>
            <input type="submit"></input>
        </form>
        <button onClick={handleDeleteClick} style={{backgroundColor: "red"}}>Delete My Account</button>
    </div>
    
  )
}

export default MyAccount