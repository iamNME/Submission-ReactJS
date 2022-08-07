import axios from "axios"
import React, { createContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { message } from 'antd';
import Cookies from "js-cookie";

export const MovieContext = createContext();

export const MovieProvider = props => {
  let history = useHistory();

  const [dataMovie, setDataMovie] = useState([]);
  const [input, setInput] = useState({
    title: '',
    description: '',
    year: 0,
    duration: 0,
    genre: '',
    rating: 0,
    review: '',
    image_url: ''
  })
  const [currentId, setCurrentId] = useState(-1)
  const [fetchStatus, setFetchStatus] = useState(false)

  const fetchData = async () => {
    let result = await axios.get(`https://backendexample.sanbersy.com/api/data-movie`);
    let data = result.data;
    console.log(data);
    setDataMovie(data.map((e, index)=>{
      return{
        no: index+1,
        id: e.id,
        title: e.title,
        description: e.description,
        year: e.year,
        duration: e.duration,
        genre: e.genre,
        rating: e.rating,
        review: e.review,
        image_url: e.image_url
      }
    }))
  }

  const fetchDataById = async (ID_MOVIES) => {
    let res = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${ID_MOVIES}`);
    let data = res.data;
    setInput({
      id: data.id,
      title: data.title,
      description: data.description,
      year: data.year,
      duration: data.duration,
      genre: data.genre,
      rating: data.rating,
      review: data.review,
      image_url: data.image_url
    })
  }

  const functionSubmit = () => {
    axios.post(`https://backendexample.sanbersy.com/api/data-movie`, {
      title: input.title,
      description: input.description,
      year: input.year,
      duration: input.duration,
      genre: input.genre,
      rating: input.rating,
      review: input.review,
      image_url: input.image_url,
    },
    {
      headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }).then((res) => {
      let data = res.data
      setDataMovie([...dataMovie, {
        id: data.id,
        title: data.title,
        description: data.description,
        year: data.year,
        duration: data.duration,
        genre: data.genre,
        rating: data.rating,
        review: data.review,
        image_url: data.image_url,
      }])
      history.push('/moviesList')
      message.success('Berhasil menambahkan data')
    })
  }

  const functionUpdate = (currentId) => {
    axios.put(`https://backendexample.sanbersy.com/api/data-movie/${currentId}`, {
      title: input.title,
      description: input.description,
      year: input.year,
      duration: input.duration,
      genre: input.genre,
      rating: input.rating,
      review: input.review,
      image_url: input.image_url,
    },
    {
      headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }).then((res) => {
      let newDataMovie = dataMovie.find((e) => e.id === currentId)
      newDataMovie.title = input.title
      newDataMovie.description = input.description
      newDataMovie.year = input.year
      newDataMovie.duration = input.duration
      newDataMovie.genre = input.genre
      newDataMovie.rating = input.rating
      newDataMovie.review = input.review
      newDataMovie.image_url = input.image_url
      setDataMovie([...dataMovie])
      history.push('/moviesList')
      message.success('Berhasil mengupdate data')
    })
  }

  const functionDelete = (ID_MOVIES) => {
    axios.delete(`https://backendexample.sanbersy.com/api/data-movie/${ID_MOVIES}`, {
      headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }).then(() => {
      let newDataMovie = dataMovie.filter((res) => { return res.id !== ID_MOVIES })
      setDataMovie(newDataMovie)
      message.success('Berhasil menghapus data')
    })
  }

  const functionEdit = (ID_MOVIES) => {

  }

  const functions = {
    fetchData,
    fetchDataById,
    functionSubmit,
    functionUpdate,
    functionDelete,
    functionEdit
  }

  return (
    <MovieContext.Provider value={{
      dataMovie,
      setDataMovie,
      input,
      setInput,
      currentId,
      setCurrentId,
      fetchStatus,
      setFetchStatus,
      functions
    }}>
      {props.children}
    </MovieContext.Provider>
  )
}