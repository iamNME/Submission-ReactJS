import axios from "axios"
import Cookies from "js-cookie"
import React, { useContext, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { UserContext } from "../Context/userContext2"
import { Form, Input, Button, Checkbox } from 'antd';

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
    console.log(input)

    axios.post("https://backendexample.sanbersy.com/api/user-login", {
        email: input.email,
        password: input.password
    }).then(
        (res) => {
            console.log(res)

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
        {/* <form method='post' style={{ width: "100%", margin: "auto" }} onSubmit={handleSubmit}>
          <label>Email : </label>
          <br />
          <input type="text" name="email" value={input.email} onChange={handleChange} />
          <br />
          <label>Password : </label>
          <br />
          <input type="password" name="password" value={input.password} onChange={handleChange} />
          <br />
          <br />
          <Link to='/register'>Register</Link>
          <input type="submit" value='Submit'/>
        </form> */}

        {/* <Form
          labelCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          id="form_login"
          style={{width: '40%', position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -45%)'}}
          onSubmit={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input name="email" value={input.email} onChange={handleChange} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password name="password" value={input.password} onChange={handleChange}/>
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 13,
              span: 16,
            }}
          >
            <Link to='/register'>Register</Link>
            <Button style={{marginLeft: '20px'}} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> */}

        <form
          id="form_login"
          style={{width: '30%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          onSubmit={handleSubmit}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input type="email" name="email" value={input.email} onChange={handleChange} style={{width: '92.6%', float: 'right'}} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password name="password" value={input.password} onChange={handleChange}/>
          </Form.Item>

          {/* <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 5,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Link to='/register'>Register</Link>
            <Button style={{marginTop: '30px', marginLeft: '30px'}} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </form>
      </>
    )
}

export default Login