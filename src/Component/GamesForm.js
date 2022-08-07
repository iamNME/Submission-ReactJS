import React, {useEffect, useContext} from 'react';
import { GameContext } from '../Context/gameContext';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Typography, Form, Input, InputNumber, Button } from 'antd';

const GamesForm = () => {
  let {id} = useParams()

    const { Title } = Typography;
   
    const { input, setInput, currentId, setCurrentId, functions } = useContext(GameContext)
    const { functionSubmit, functionUpdate, fetchDataById  } = functions

    let history = useHistory();

    useEffect(() => {
        if(id !== undefined){
            fetchDataById(id)
        }
    },[])

    const handleClick = () => {
      history.push('/gamesList')
    }

    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfValue })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        if (currentId === -1) {
            functionSubmit()
        } else {
            functionUpdate(currentId)
        }

        setInput({
            name: '',
            genre: '',
            singlePlayer: 0,
            multiplayer: 0,
            platform: '',
            release: '',
            image_url: ''
        })
        setCurrentId(-1)
    }
  return (
    <>
      <div className="h1-form">
        <Title style={{padding: '0', marginTop: '20px', width: '100%', textAlign: 'center'}}>Form Games</Title>
      </div>
      {/* <div className="form">
      	<form onSubmit={handleSubmit}>
      	  <div className="form-control">
      	    <label for="Name">Name:</label>
      	    <input type="text" id="Name" name="name" value={input.name} onChange={handleChange} required/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Genre">Genre:</label>
      	    <input type="text" id="Genre" name="genre" value={input.genre} onChange={handleChange} required/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Singleplayer">Singleplayer:</label>
      	    <input type="number" id="Singleplayer" name="singlePlayer" value={input.singlePlayer} onChange={handleChange} required min="0" max="1"/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Multiplayer">Multiplayer:</label>
      	    <input type="number" id="Multiplayer" name="multiplayer" value={input.multiplayer} onChange={handleChange} required min="0" max="1"/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Platform">Platform:</label>
      	    <input type="text" id="Platform" name="platform" value={input.platform} onChange={handleChange} required/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Release">Release:</label>
      	    <input type="text" id="Release" name="release" value={input.release} onChange={handleChange} required/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Image_URL">Image_URL:</label>
      	    <input type="text" id="Image_URL" name="image_url" value={input.image_url} onChange={handleChange} required/>
      	  </div>
      	  <button type="submit" value="Submit" className="action">Submit</button>
      	</form>

        <button style={{float: "left", width: "16%"}} className="btn action" onClick={handleClick}>
          Kembali Ke Tabel
        </button>
      </div> */}

      <form
        name="Form_Games"
        onSubmit={handleSubmit}
        style={{width: '50%', marginBottom: '10%', marginLeft: 'auto', marginRight: 'auto'}}
      >
        <Form.Item 
          label="Name"
          // name="name"
          rules={[
            {
              required: true,
              message: 'Name is required!',
            },
          ]}
        >
          <Input style={{width: '94.5%', float: 'right'}} name="name" onChange={handleChange} value={input.name} required />
        </Form.Item>
        <Form.Item
          label="Genre"
          // name="genre"
          rules={[
            {
              required: true,
              message: 'Genre is required!',
            },
          ]}
        >
          <Input style={{width: '94.5%', float: 'right'}} name="genre" onChange={handleChange} value={input.genre} required />
        </Form.Item>
        <Form.Item
          label="Singleplayer"
          // name="singlePlayer"
          rules={[
            {
              required: true,
              message: 'Singleplayer is required!',
            },
          ]}
        >
          <Input type="number" name="singlePlayer" onChange={handleChange} value={input.singlePlayer} min="0" max="1" required />
        </Form.Item>
        <Form.Item
          label="Multiplayer"
          // name="multiplayer"
          rules={[
            {
              required: true,
              message: 'Multiplayer is required!',
            },
          ]}
        >
          <Input style={{width: '99.4%', float: 'right'}} type="number" name="multiplayer" onChange={handleChange} value={input.multiplayer} min="0" max="1" required />
        </Form.Item>
        <Form.Item
          label="Platform"
          // name="platform"
          rules={[
            {
              required: true,
              message: 'Platform is required!',
            },
          ]}
        >
          <Input style={{width: '97%', float: 'right'}} name="platform" onChange={handleChange} value={input.platform} required />
        </Form.Item>
        <Form.Item
          label="Release"
          // name="release"
          rules={[
            {
              required: true,
              message: 'Release is required!',
            },
          ]}
        >
          <Input style={{width: '96%', float: 'right'}} name="release" onChange={handleChange} value={input.release} required min='2000' max='2021' />
        </Form.Item>
        <Form.Item
          label="Image_URL"
          // name="image_url"
          rules={[
            {
              required: true,
              message: 'Image_URL is required!',
            },
          ]}
        >
          <Input name="image_url" onChange={handleChange} value={input.image_url} required />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 14,
            span: 16,
          }}
        >
          <Button type="link" htmlType="button" onClick={handleClick}>Kembali</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </form>
    </>
  );
}

export default GamesForm;