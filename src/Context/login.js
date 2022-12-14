import axios from "axios"
import Cookies from "js-cookie"
import React, { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "./userContext"

const Login = () => {
    let history = useHistory()
    const { setLoginStatus } = useContext(UserContext)

    const [input, setInput] = useState({
        email: "",
        password: ""

    })

    const handleChange = (event) => {
        let typeOfInput = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfInput })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post("https://backendexample.sanbersy.com/api/user-login", {
            email: input.email,
            password: input.password
        }).then(
            (res) => {
                var user = res.data.user
                var token = res.data.token
                Cookies.set('user', user.name, {expires: 1})
                Cookies.set('email', user.email, {expires: 1})
                Cookies.set('token', token, {expires: 1})
                history.push('/')
                setLoginStatus(true)
            }
        ).catch((err) => {
            alert(err)
        })
    }

    return (
        <>
            <form method='post' style={{ width: "100%", margin: "auto" }} onSubmit={handleSubmit}>
                <label>Email : </label>
                <br />
                <input type="text" name="email" value={input.email} onChange={handleChange} />
                <br />
                <label>Password : </label>
                <br />
                <input type="password" name="password" value={input.password} onChange={handleChange} />
                <br />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Login