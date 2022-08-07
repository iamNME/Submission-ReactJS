import React, {useEffect, useContext} from 'react';
import { MovieContext } from '../Context/movieContext';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Typography, Form, Input, InputNumber, Button } from 'antd';

const MovieForm = () => {
  let {id} = useParams()

    const { Title } = Typography;
   
    const { input, setInput, currentId, setCurrentId, functions } = useContext(MovieContext)
    const { functionSubmit, functionUpdate, fetchDataById  } = functions

    let history = useHistory();

    useEffect(() => {
        if(id !== undefined){
            fetchDataById(id)
        }
    },[])

    const handleClick = () => {
      history.push('/moviesList')
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
            title: "",
            description: "",
            year: 0,
            duration: 0,
            genre: "",
            rating: 0,
            review: "",
            image_url: ""
        })
        setCurrentId(-1)
        history.push('/moviesList')
    }
  return (
    <>
      <div className="h1-form">
        <Title style={{padding: '0', marginTop: '20px', width: '100%', textAlign: 'center'}}>Form Movies</Title>
      </div>
      {/* <div className="form">
      	<form onSubmit={handleSubmit}>
      	  <div className="form-control">
      	    <label for="Title">Title:</label>
      	    <input type="text" id="Title" name="title" value={input.title} onChange={handleChange} required/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Description">Description:</label> */}
      	    {/* <input type="text" id="Description" name="course" value={input.description} onChange={handleChange} required/> */}
            {/* <textarea id="Description" name="description" value={input.description} onChange={handleChange} required />
      	  </div>
      	  <div className="form-control">
      	    <label for="Year">Year:</label>
      	    <input type="number" id="Year" name="year" value={input.year} onChange={handleChange} required minLength="4"/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Duration">Duration:</label>
      	    <input type="number" id="Duration" name="duration" value={input.duration} onChange={handleChange} required/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Genre">Genre:</label>
      	    <input type="text" id="Genre" name="genre" value={input.genre} onChange={handleChange} required/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Rating">Rating:</label>
      	    <input type="number" id="Rating" name="rating" value={input.rating} onChange={handleChange} required min="0" max="10"/>
      	  </div>
      	  <div className="form-control">
      	    <label for="Review">Review:</label>
      	    <input type="text" id="Review" name="review" value={input.review} onChange={handleChange} required/>
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
        name="Form_Movies"
        onSubmit={handleSubmit}
        style={{width: '50%', marginBottom: '10%', marginLeft: 'auto', marginRight: 'auto'}}
      >
        <Form.Item 
          label="Title"
          // name='title'
          rules={[
            {
              required: true,
              message: 'Title is required!',
            },
          ]}
        >
          <Input style={{width: '93%', float: 'right'}} type="text" name="title" value={input.title} onChange={handleChange} required />
        </Form.Item>
        <Form.Item
          label="Description"
          // name="description"
          rules={[
            {
              required: true,
              message: 'Description is required!',
            },
          ]}
        >
          <Input.TextArea name="description" value={input.description} onChange={handleChange} required />
        </Form.Item>
        <Form.Item
          label="Year"
          // name="year"
          rules={[
            {
              required: true,
              message: 'Year is required!',
            },
          ]}
        >
          <Input style={{width: '93.4%', float: 'right'}} type="number" name="year" min="1980" max="2021" onChange={handleChange} value={input.year} required />
        </Form.Item>
        <Form.Item
          label="Duration"
          // name="duration"
          rules={[
            {
              required: true,
              message: 'Duration is required!',
            },
          ]}
        >
          <Input style={{width: '97.6%', float: 'right'}} type="number" name="duration" onChange={handleChange} value={input.duration} required />
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
          <Input style={{width: '94.8%', float: 'right'}} type="text" name="genre" onChange={handleChange} value={input.genre} required />
        </Form.Item>
        <Form.Item
          label="Rating"
          // name="rating"
          rules={[
            {
              required: true,
              message: 'Rating is required!',
            },
          ]}
        >
          <Input style={{width: '95%', float: 'right'}} type="number" name="rating" onChange={handleChange} value={input.rating} required min='0' max='10' />
        </Form.Item>
        <Form.Item
          label="Review"
          // name="review"
          rules={[
            {
              required: true,
              message: 'Review is required!',
            },
          ]}
        >
          <Input style={{width: '95.7%', float: 'right'}} type="text" name="review" onChange={handleChange} value={input.review} required />
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
          <Input type="text" name="image_url" onChange={handleChange} value={input.image_url} required />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 14,
            span: 16,
          }}
        >
          <Button type="link" htmlType="button" onClick={handleClick}>Kembali</Button>
          <Button type="primary" htmlType="submit">Submit</Button>
          {/* <input type='submit' value='Submit' onClick={handleSubmit} /> */}
        </Form.Item>
      </form>
    </>
  );
}

export default MovieForm;