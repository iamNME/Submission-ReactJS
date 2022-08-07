import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GameContext } from '../Context/gameContext';
import { Table, Space, Button, Layout, Typography, Tooltip, message } from 'antd';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import Cookies from 'js-cookie';

const GamesListTable = () => {
  let history = useHistory();
  // const { Content } = Layout;
  const { Title } = Typography;

  const { dataGame, input, setInput, functions, fetchStatus, setFetchStatus } = useContext(GameContext);
  const { fetchData, functionDelete, functionEdit } = functions;

  useEffect(() => {
    if(fetchStatus === false){
      fetchData();
      setFetchStatus(true)
    }
  }, [fetchData, fetchStatus, setFetchStatus])

  const handleCreate = (event) => {
    history.push('/gamesList/create')
    setInput({
      nama: '',
      genre: '',
      singlePlayer: 0,
      multiplayer: 0,
      platform: '',
      release: '',
      image_url: ''
    })
  }

  const handleDelete = (event) => {
    if(Cookies.get('token') === undefined){
      message.error('Login terlebih dahulu!!!')
    }else{
      let idGames = parseInt(event.currentTarget.value)
      functionDelete(idGames)
    }
  }

  const handleEdit = (event) => {
    if(Cookies.get('token') === undefined){
      message.error('Login terlebih dahulu!!!')
    }else{
      let idGames = parseInt(event.currentTarget.value)
      history.push(`/gamesList/edit/${idGames}`)
      // functionEdit(idMahasiswa)
    }
  }

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      filters: [
        {
          text: 'MOBA',
          value: 'MOBA'
        },
        {
          text: 'Open World',
          value: 'Open World'
        },
        {
          text: 'Survival',
          value: 'survival'
        }
      ],
      onFilter: (value, record) => record.genre.indexOf(value) === 0,
      sorter: (a, b) => a.genre - b.genre,
    },
    {
      title: 'Singleplayer',
      dataIndex: 'singlePlayer',
      key: 'singlePlayer',
      sorter: (a, b) => a.singlePlayer - b.singlePlayer,
    },
    {
      title: 'Multiplayer',
      dataIndex: 'multiplayer',
      key: 'multiplayer',
      sorter: (a, b) => a.multiplayer - b.multiplayer,
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform',
      filters: [
        {
          text: 'PS',
          value: 'Playstation'
        },
        {
          text: 'Android',
          value: 'Android'
        },
        {
          text: 'Xbox',
          value: 'Xbox'
        }
      ],
      onFilter: (value, record) => record.platform.indexOf(value) === 0,
      sorter: (a, b) => a.platform - b.platform, 
    },
    {
      title: 'Release',
      dataIndex: 'release',
      key: 'release',
      filters: [
        {
          text: '2019',
          value: '2019'
        },
        {
          text: '2020',
          value: '2020'
        },
        {
          text: '2021',
          value: '2021'
        }
      ],
      onFilter: (value, record) => record.release.indexOf(value) === 0,
      sorter: (a, b) => a.release - b.release,
    },
    {
      title: 'Image URL',
      dataIndex: 'image_url',
      key: 'image_url',
      sorter: (a, b) => a.image_url - b.image_url,
    },
    {
      title: 'Action',
      key: 'action',
      render: (res, index) => (
        <>
          <Space size='middle'>
            <Tooltip title="Edit">
              <Button icon={<EditFilled />} value={res.id} type="primary" onClick={handleEdit} />
            </Tooltip>
            <Tooltip title="Delete">
              <Button icon={<DeleteFilled />} danger type="primary" value={res.id} onClick={handleDelete}/>
            </Tooltip>
          </Space>
        </>
      )
    }
  ]

  console.log(dataGame);

  let data = dataGame;

  return(
    <>
      <Title style={{padding: '0', marginTop: '20px', width: '100%', textAlign: 'center'}}>Games List Table</Title>
      {
        Cookies.get('token') !== undefined && (
        <Button type='primary' style={{marginLeft: '8%'}} onClick={handleCreate}>Buat Data Baru</Button>
      )}
      <Table columns={columns} dataSource={data} style={{width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', marginBottom: '75px'}}/>
    </>
  )
}

export default GamesListTable