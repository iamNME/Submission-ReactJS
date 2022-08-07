import React, { useContext } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./login"
import Register from "./register"
import Cookies from "js-cookie";
import Header from "./Header";
import { UserContext, UserProvider } from "./userContext";
const Main = () => {
const { loginStatus } = useContext(UserContext)
const LoginRoute = ({...props}) => {
       if(Cookies.get('token') !== undefined){
           return <Redirect  to="/" />
       }else{
           return <Route {...props} />
       }
}
  return (
    <>
      <Router>
        <UserProvider>
          <Header />
          <Switch>
            <Route path="/"  exact   >
              <h1>Ini component Home dan {loginStatus === undefined ? <p>Belum Login</p> : <p>Sudah Login</p>}</h1>
            </Route>
            <LoginRoute exact path="/login" component={Login} />
            <LoginRoute exact path="/register" component={Register} />
          </Switch>
        </UserProvider>
      </Router>
    </>
  )
}
export default Main