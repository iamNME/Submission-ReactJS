import React, { useContext, useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { useHistory } from "react-router"
import { Form, Input, Button } from 'antd';

const Register = () => {
  let history = useHistory()
  const [input, setInput] = useState({ name: "", email: "", password: "" })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(input)

    axios.post("https://backendexample.sanbersy.com/api/register", {
      name: input.name,
      email: input.email,
      password: input.password
    }).then(
      () => {
        history.push('/login')
      }
    ).catch((err) => {
      alert(err)
    })
  }

  const handleChange = (event) => {
    let value = event.target.value
    let name = event.target.name

    setInput({ ...input, [name]: value })
  }

  return (
    <>
      {/* <div style={{ margin: "0 auto", width: "25%", padding: "50px" }}>
        <form onSubmit={handleSubmit} method="post">
          <label>name: </label>
          <input type="text" name="name" onChange={handleChange} value={input.name} />
          <br />
          <label>email: </label>
          <input type="email" name="email" onChange={handleChange} value={input.email} />
          <br />
          <label>Password: </label>
          <input type="password" name="password" onChange={handleChange} value={input.password} />
          <br />
          <button>Register</button>
        </form>
      </div> */}

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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input name="name" value={input.name} onChange={handleChange} />
        </Form.Item>
      
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
          <Input name="email" value={input.email} onChange={handleChange}/>
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
          wrapperCol={{
            offset: 13,
            span: 16,
          }}
        >
          <Button style={{marginLeft: '20px'}} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> */}

      <form
        id="form_register"
        style={{width: '40%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
        onSubmit={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input name="name" value={input.name} onChange={handleChange} style={{width: '95.7%', float: 'right'}} />
        </Form.Item>
      
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
          <Input type="email" name="email" value={input.email} onChange={handleChange} style={{width: '94.89%', float: 'right'}} />
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
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button style={{marginTop: '20px', marginLeft: '20px'}} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </form>
    </>
  )
}

export default Register