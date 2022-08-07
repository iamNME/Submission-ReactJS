import React, {useEffect, useContext} from 'react';
import { MovieContext } from '../../Context/movieContext';
import { useParams } from 'react-router-dom';
import { Typography, Layout } from 'antd';

const MovieListDetail = () => {
  let {id} = useParams()

    const { Paragraph ,Title } = Typography;
    const { Content } = Layout;
   
    const { input, functions } = useContext(MovieContext)
    const { fetchDataById  } = functions

    useEffect(() => {
        if(id !== undefined){
            fetchDataById(id)
        }
    },[])

  return (
    <>
      <Content style={{ padding: '0 50px', marginBottom: '50px', width: '100%'}}>
        <div className="h1-form">
          <Title style={{padding: '0', marginTop: '20px', width: '100%', textAlign: 'center'}}>Movie Detail</Title>
        </div>

        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase'}}>Title:</strong> {input.title}
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase'}}>Genre:</strong> {input.genre}
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase'}}>Rating:</strong> {input.rating}
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase'}}>Year:</strong> {input.year}
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase'}}>Duration:</strong> {input.duration}
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase'}}>Image_Url:</strong> {input.image_url}
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase'}}>Image:</strong> <img style={{width: '30%', display: 'block'}} src={input.image_url} alt={input.image_url}/>
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase', textAlign: 'justify'}}>Description:</strong> {input.description}
        </Paragraph>
        <Paragraph style={{fontSize: '22px'}}>
          <strong style={{textTransform: 'uppercase', textAlign: 'justify'}}>Review:</strong> {input.review}
        </Paragraph>
      </Content>
    </>
  );
}

export default MovieListDetail;