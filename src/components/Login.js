import React from 'react';
import { Tabs, Typography } from 'antd';
import Login from '../pages/Log';
import SLogin from '../pages/SLog';

const { Title } = Typography;

const LoginBox = () => {
  const items = [
    {
      key: '1',
      label: `USER`,
      children: <Login />,
    },
    {
      key: '2',
      label: `STARTUP`,
      children: <SLogin />,
    },
  ];

  return (
    <>
      <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
      <Tabs defaultActiveKey="1" items={items} centered />
    </>
  );
}

export default LoginBox;
