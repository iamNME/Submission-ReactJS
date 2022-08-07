import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import Cookies from 'js-cookie';

export const GameContext = createContext();

export const GameProvider = props => {
  let history = useHistory();

  const [dataGame, setDataGame] = useState([]);
  const [input, setInput] = useState({
    name: '',
    genre: '',
    singlePlayer: 0,
    multiplayer: 0,
    platform: '',
    release: '',
    image_url: ''
  });

  const [currentId, setCurrentId] = useState(-1);
  const [fetchStatus, setFetchStatus] = useState(false);

  const fetchData = async () => {
    let result = await axios.get(`https://backendexample.sanbersy.com/api/data-game`);
    let data = result.data;
    console.log(data);
    setDataGame(data.map((e, index) => {
      return{
        no: index+1,
        id: e.id,
        name: e.name,
        genre: e.genre,
        singlePlayer: e.singlePlayer,
        multiplayer: e.multiplayer,
        platform: e.platform,
        release: e.release,
        image_url: e.image_url
      }
    }))
  }

  const fetchDataById = async (ID_GAMES) => {
    let result = await axios.get(`https://backendexample.sanbersy.com/api/data-game/${ID_GAMES}`);
    let data = result.data;
    setInput({
      id: data.id,
      name: data.name,
      genre: data.genre,
      singlePlayer: data.singlePlayer,
      multiplayer: data.multiplayer,
      platform: data.platform,
      release: data.release,
      image_url: data.image_url
    })
  }

  const functionSubmit = () => {
    axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
      name: input.name,
      genre: input.genre,
      singlePlayer: input.singlePlayer,
      multiplayer: input.multiplayer,
      platform: input.platform,
      release: input.release,
      image_url: input.image_url,
    },
    {
      headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }).then((res) => {
      let data = res.data
      setDataGame([...dataGame, {
        id: data.id,
        name: data.name,
        genre: data.genre,
        singlePlayer: data.singlePlayer,
        multiplayer: data.multiplayer,
        platform: data.platform,
        release: data.release,
        image_url: data.image_url,
      }])
      history.push('/gamesList')
      message.success('Berhasil menambahkan data')
    })
  }

  const functionUpdate = (currentId) => {
    axios.put(`https://backendexample.sanbersy.com/api/data-game/${currentId}`, {
      name: input.name,
      genre: input.genre,
      singlePlayer: input.singlePlayer,
      multiplayer: input.multiplayer,
      platform: input.platform,
      release: input.release,
      image_url: input.image_url
    },
    {
      headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }).then((res) => {
      let newDataGame = dataGame.find((e) => e.id === currentId)
      newDataGame.name = input.name
      newDataGame.genre = input.genre
      newDataGame.singlePlayer = input.singlePlayer
      newDataGame.multiplayer = input.multiplayer
      newDataGame.platform = input.platform
      newDataGame.release = input.release
      newDataGame.image_url = input.image_url
      setDataGame([...dataGame])
      history.push('/gamesList')
      message.success('Berhasil mengupdate data')
    })
  }

  const functionDelete = (ID_GAMES) => {
    axios.delete(`https://backendexample.sanbersy.com/api/data-game/${ID_GAMES}`,
    {
      headers: {"Authorization" : "Bearer "+ Cookies.get('token')}
    }).then(() => {
        let newDataGame = dataGame.filter((res) => { return res.id !== ID_GAMES })
        setDataGame(newDataGame)
        message.success('Berhasil menghapus data')
      })
  }

  const functionEdit = (ID_GAMES) => {

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
    <GameContext.Provider value={{
      dataGame,
      setDataGame,
      input,
      setInput,
      currentId,
      setCurrentId,
      fetchStatus,
      setFetchStatus,
      functions
    }}>
      {props.children}
    </GameContext.Provider>
  )
}