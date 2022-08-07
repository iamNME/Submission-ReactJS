import Cookies from "js-cookie";
import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";
import { useHistory } from "react-router";
const Header = () => {
  const { setLoginStatus } = useContext(UserContext)
  let history = useHistory()
  const handleLogout = () => {
    setLoginStatus(false)
    Cookies.remove('user')
        Cookies.remove('email')
        Cookies.remove('token')
    history.push('/login')
  }
  return (
    <header>
      <ul>
        {
          Cookies.remove('token') !== undefined &&
          <>
            <li>
              <span style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</span>
            </li>
          </> 
        }
        {Cookies.remove('token') === undefined && (
          <>
          <li>
            <Link to="/login">Login </Link>
          </li>
          <li>
            <Link to="/register">Register </Link>
          </li>
          </>
        )}
      </ul>
    </header>
  )
}
export default Header