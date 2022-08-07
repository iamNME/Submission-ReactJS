import React, { useContext, useEffect } from 'react';
import { List, Typography, Button } from 'antd';
import { GameContext } from '../../Context/gameContext';
import { useHistory } from 'react-router-dom';

const GamesList = () => {
  const { dataGame, functions, fetchStatus, setFetchStatus } = useContext(GameContext);
  const { fetchData } = functions;

  let history = useHistory();

  const { Paragraph } = Typography

  useEffect(() => {
    if(fetchStatus === false){
      fetchData();
      setFetchStatus(true)
    }
  }, [fetchData, fetchStatus, setFetchStatus])

  const handleReadMore = (event) => {
    let idGames = parseInt(event.currentTarget.value)
    history.push(`/showGame/${idGames}`)
  }

  let data = dataGame;

  return(
    <>
      <List
        itemLayout='horizontal'
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[<Button style={{color: '#1890ff', border: 'none'}} key="list-loadmore-more" value={item.id} onClick={handleReadMore}>
                        Read More
                      </Button>
                    ]}
          >
            <List.Item.Meta
              title={item.name}
              description={<Paragraph ellipsis style={{width: '500px', marginBottom: '10px', textAlign: 'justify'}}>{item.genre}</Paragraph>}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default GamesList;