import React, { useContext } from 'react';
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';
import { Menu, Layout, Typography, Button } from 'antd';
import { UserContext } from '../../Context/userContext2';
import { useHistory } from 'react-router-dom';
import './header.css';

const Header = () => {
  const { Header } = Layout;
  const { Title } = Typography;

  const { setLoginStatus } = useContext(UserContext)
  let history = useHistory()

  const handleLogout = () => {
    setLoginStatus(false)
    Cookies.remove('user')
    Cookies.remove('email')
    Cookies.remove('token')
    history.push('/login')
  }

  const handleLogin = () => {
    history.push('/login')
  }

  return (
    <>
      <Header style={{width: '100vw'}}>
        <div className='logo'>
          <Title level={5} style={{color: 'white', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '2px'}}>
            Kumbaya
          </Title>
        </div>
        { /* <div className="login-section">
          <Button type="primary">Login</Button>
        </div> */ }
        {
          Cookies.get('token') !== undefined &&
          <>
            <div className="login-section">
              <Button type="primary" onClick={handleLogout}>Logout</Button>
            </div>
          </> 
        }
        {
          Cookies.get('token') === undefined && (
          <>
            <div className="login-section">
              <Button type="primary" onClick={handleLogin}>Login</Button>
            </div>
          </>
        )}
        <Menu theme='dark' mode='horizontal'>
          <Menu.Item key={"1"}>
            <Link to='/' style={{color: 'white', textTransform: 'uppercase'}}>Beranda</Link>
          </Menu.Item>
          <Menu.Item key={"2"}>
            <Link to='/moviesList' style={{color: 'white', textTransform: 'uppercase'}}>Movies List</Link>
          </Menu.Item>
          <Menu.Item key={"3"}>
            <Link to='/gamesList' style={{color: 'white', textTransform: 'uppercase'}}>Games List</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  )
}

export default Header