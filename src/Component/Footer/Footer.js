import React from 'react';
import { Layout, Typography } from 'antd';

const Footer = () => {
  const { Title } = Typography;

  const { Footer } = Layout;

  return(
    <>
      <Footer style={{backgroundColor: 'black', width: '100vw'}}>
        <Title level={5} style={{color: 'white', textAlign: 'center', padding: '0', margin: '0'}}>copyright &copy; 2021 by Kumbaya</Title>
      </Footer>
    </>
  )
}

export default Footer;