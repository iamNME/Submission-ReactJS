import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MovieContext } from '../Context/movieContext';
import { Table, Space, Button, Typography, Tooltip, message } from 'antd';
import { SearchOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import Cookies from 'js-cookie';

const MovieListTable = () => {
  let history = useHistory();
  const { Title } = Typography;

  const { dataMovie, input, setInput, functions, fetchStatus, setFetchStatus } = useContext(MovieContext);
  const { fetchData, functionDelete, functionEdit } = functions;

  useEffect(() => {
    if(fetchStatus === false){
      fetchData();
      setFetchStatus(true)
    }
  }, [fetchData, fetchStatus, setFetchStatus])

  const handleCreate = (event) => {
    history.push('/moviesList/create')
    setInput({
      title: '',
      description: '',
      year: 0,
      duration: 0,
      genre: '',
      rating: 0,
      review: '',
      image_url: ''
    })
  }

  const handleDelete = (event) => {
    if(Cookies.get('token') === undefined){
      message.error('Login terlebih dahulu!!!')
    }else{
      let idMovies = parseInt(event.currentTarget.value)
      functionDelete(idMovies)
    }
  }

  const handleEdit = (event) => {
    if(Cookies.get('token') === undefined){
      message.error('Login terlebih dahulu!!!')
    }else{
      let idMovies = parseInt(event.currentTarget.value)
      history.push(`/moviesList/edit/${idMovies}`)
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
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.title - b.title,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description - b.description,
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      filters: [
        {
          text: '120',
          value: 120
        },
        {
          text: '60',
          value: 60
        },
        {
          text: '240',
          value: 240
        }
      ],
      onFilter: (value, record) => record.duration.indexOf(value) === 0,
      sorter: (a, b) => a.duration - b.duration,
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      filters: [
        {
          text: 'Action',
          value: 'Action'
        },
        {
          text: 'Horror',
          value: 'Horror'
        },
        {
          text: 'Comedy',
          value: 'Comedy'
        }
      ],
      onFilter: (value, record) => record.genre.indexOf(value) === 0,
      sorter: (a, b) => a.genre - b.genre,
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      filters: [
        {
          text: '7',
          value: 7
        },
        {
          text: '8',
          value: 8
        },
        {
          text: '9',
          value: 9
        }
      ],
      onFilter: (value, record) => record.rating.indexOf(value) === 0,
      sorter: (a, b) => a.rating - b.rating,
    },
    {
      title: 'Review',
      dataIndex: 'review',
      key: 'review',
      sorter: (a, b) => a.review - b.review,
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

  console.log(dataMovie);

  let data = dataMovie;

  return(
    <>
      <Title style={{padding: '0', marginTop: '20px', width: '100%', textAlign: 'center'}}>Movies List Table</Title>
      {
        Cookies.get('token') !== undefined && (
        <Button type='primary' style={{marginLeft: '8%'}} onClick={handleCreate}>Buat Data Baru</Button>
      )}
      <Table columns={columns} dataSource={data} style={{width: '50%', marginLeft: '50px', marginTop: '20px', marginBottom: '80px'}}/>
    </>
  )
}

export default MovieListTable