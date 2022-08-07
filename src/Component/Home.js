import React from 'react';
import { Typography, Layout, Breadcrumb } from 'antd';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { MovieProvider } from '../Context/movieContext';
import MoviesList from './Main/MoviesList';
import { GameProvider } from '../Context/gameContext';
import GamesList from './Main/GamesList';
import { UserProvider } from '../Context/userContext2'
import Cookies from 'js-cookie';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Home = () => {
  const { Content, Sider } = Layout;
  const { Title } = Typography

  return(
    <>
      <Layout>
        <UserProvider>
          <Header />
        </UserProvider>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div className="site-layout-content" style={{minHeight: '280px', padding: '24px', background: '#fff'}}>
                <Title>List Movies</Title>
                <MovieProvider>
                  <MoviesList />
                </MovieProvider>

                <Title style={{marginTop: '30px'}}>List Games</Title>
                <GameProvider>
                  <GamesList />
                </GameProvider>
              </div>
            </Content>
            {/* <Sider className="site-layout-background" style={{backgroundColor: 'white'}} width={200}> */}
            {
              Cookies.get('token') !== undefined && (
              <>
                <Sider width={200} style={{backgroundColor: 'white', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Avatar style={{marginBottom: '20px', marginTop: '100px', marginLeft: '5px'}} size={100} icon={<UserOutlined />} />
                  <Title style={{textAlign: 'center'}} level={5}>USER</Title>
                  <Link style={{textAlign: 'center'}} to='/forgotPassword'>Forgot Password ?</Link>
                </Sider>
              </> 
            )}
            {/* </Sider> */}
          </Layout>
        </Content>
        <Footer />
      </Layout>

    {/* <Layout>
      <UserProvider>
        <Header />
      </UserProvider>
        <Content style={{padding: '0 50px', marginBottom: '50px', marginRight: '0'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          </Breadcrumb>

          <div className="site-layout-content" style={{minHeight: '280px', padding: '24px', background: '#fff'}}>
            <Title>List Movies</Title>
            <MovieProvider>
              <MoviesList />
            </MovieProvider>
    
            <Title style={{marginTop: '30px'}}>List Games</Title>
            <GameProvider>
              <GamesList />
            </GameProvider>
          </div>

        {
          Cookies.get('token') !== undefined &&
          <>
          <Layout>
            <Sider width={200}>
              <Title>{Cookies.get('name')}</Title>
            </Sider>
          </Layout>
          </> 
        }
        </Content>
      <Footer />
    </Layout> */}
    </>
  )
}

export default Home;