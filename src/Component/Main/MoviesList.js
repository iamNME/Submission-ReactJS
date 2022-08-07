import React, { useContext, useEffect } from 'react';
import { List, Typography, Button } from 'antd';
import { MovieContext } from '../../Context/movieContext';
import { useHistory } from 'react-router-dom';

const MoviesList = () => {
  const { dataMovie, functions, fetchStatus, setFetchStatus } = useContext(MovieContext);
  const { fetchData } = functions;

  const { Paragraph } = Typography;

  let history = useHistory();

  useEffect(() => {
    if(fetchStatus === false){
      fetchData();
      setFetchStatus(true)
    }
  }, [fetchData, fetchStatus, setFetchStatus])

  const handleReadMore = (event) => {
    let idMovies = parseInt(event.currentTarget.value)
    history.push(`/showMovie/${idMovies}`)
  }

  let data = dataMovie;

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
              title={item.title}
              description={<Paragraph ellipsis style={{width: '400px', marginBottom: '10px', textAlign: 'justify'}}>{item.description}</Paragraph>}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default MoviesList;