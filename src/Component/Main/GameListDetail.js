import React, {useEffect, useContext} from 'react';
import { GameContext } from '../../Context/gameContext';
import { useParams } from 'react-router-dom';
import { Typography, Layout } from 'antd';

const GameListDetail = () => {
  let {id} = useParams()

    const { Paragraph ,Title } = Typography;
    const { Content } = Layout;
   
    const { input, functions } = useContext(GameContext)
    const { fetchDataById  } = functions

    useEffect(() => {
        if(id !== undefined){
            fetchDataById(id)
        }
    },[])

  return (
    <>
      <Content style={{ padding: '0 50px', marginBottom: '50px'}}>
        <div className="h1-form">
          <Title style={{padding: '0', marginTop: '20px', width: '100%', textAlign: 'center'}}>Game Detail</Title>
        </div>
        
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Name:</strong> {input.nama}
        </Paragraph>
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Genre:</strong> {input.genre}
        </Paragraph>
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Image_Url:</strong> {input.image_url}
        </Paragraph>
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Image:</strong> <img style={{width: '30%', display: 'block'}} src={input.image_url} alt={input.image_url}/>
        </Paragraph>
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Platform:</strong> {input.platform}
        </Paragraph>
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Release:</strong> {input.release}
        </Paragraph>
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Singleplayer:</strong> {input.singlePlayer}
        </Paragraph>
        <Paragraph style={{fontSize: '24px'}}>
          <strong style={{textTransform: 'uppercase'}}>Multiplayer:</strong> {input.multiplayer}
        </Paragraph>
      </Content>
    </>
  );
}

export default GameListDetail;