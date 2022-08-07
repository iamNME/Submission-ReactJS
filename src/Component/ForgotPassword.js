import React, { useContext, useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { useHistory } from "react-router"
import { Form, Input, Button } from 'antd';

const ForgotPassword = () => {
  let history = useHistory()
  const [input, setInput] = useState({ current_password: "", new_password: "", new_password_confirm: "" })

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(input)

    axios.post("https://backendexample.sanbersy.com/api/change-password", {
      current_password: input.current_password,
      new_password: input.new_password,
      new_password_confirm: input.new_password_confirm
    },
    {
      headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }).then(
      () => {
        history.push('/')
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
      <Form
        labelCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        id="form_login"
        style={{width: '40%', position: 'absolute', top: '50%', left: '45%', transform: 'translate(-50%, -45%)'}}
      >
        <Form.Item
          label="Current Password"
          // name="name"
          rules={[
            {
              required: true,
              message: 'Please input your current_password!',
            },
          ]}
        >
          <Input.Password name="current_password" value={input.current_password} onChange={handleChange} required />
        </Form.Item>
      
        <Form.Item
          label="New Password"
          // name="new_password"
          rules={[
            {
              required: true,
              message: 'Please input your new password!',
            },
          ]}
        >
          <Input.Password name="new_password" value={input.new_password} onChange={handleChange} required/>
        </Form.Item>
      
        <Form.Item
          label="New Password Confirm"
          // name="new_password_confirm"
          rules={[
            {
              required: true,
              message: 'Please input your new password confirm!',
            },
          ]}
        >
          <Input.Password name="new_password_confirm" value={input.new_password_confirm} onChange={handleChange} required/>
        </Form.Item>
      
        <Form.Item
          wrapperCol={{
            offset: 13,
            span: 16,
          }}
        >
          <Button style={{marginLeft: '20px'}} type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ForgotPassword