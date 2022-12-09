import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: "" });
    const [tickets, setTickets]= useState([]);
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const fetchTickets = () => {
        fetch("/tickets").then((response) => {
            if(response.ok) {
                response.json().then((tickets) => {
                    setTickets([...tickets])
                    // navigate("/")
                });
            } else {
                response.json().then(({ errors }) => {
                    setErrors([...errors])
                });
            }
        });
    }

    useEffect(() => {
        fetch("/me").then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                   setUser({ ...user })
                   fetchTickets()
                });
          } else {
            response.json().then(({errors}) => {
              setErrors([...errors])
              navigate("/login")
              });
            }
        });
      }, []);

      const onUserLogin = (credentials) => {
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        };
        fetch("/login", config).then((resp) => {
          if (resp.ok) {
            resp.json().then((user) => {
              setUser({ ...user });
              fetchTickets()
            });
          } else {
            resp.json().then(({ errors }) => {
              setErrors([...errors]);
            });
          }
        });
      };

return( 
      <UserContext.Provider 
        value={{user, setUser, tickets, setTickets, errors, setErrors, onUserLogin }} 
      >
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;