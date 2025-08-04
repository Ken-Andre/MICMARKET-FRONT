import React, { useState } from 'react';
import { Layout, Menu, Button, theme, Space } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, HomeOutlined, LogoutOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../features/auth/authApiSlice';
import { logOut } from '../features/auth/authSlice';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ menuItems }) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleLogout = async () => {
        try {
            await logout().unwrap();
            dispatch(logOut());
            navigate('/');
        } catch (err) {
            console.error('Failed to logout: ', err);
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={({ key }) => navigate(key)}
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: '0 16px', background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Space>
                        <Button type="text" icon={<HomeOutlined />} onClick={() => navigate('/')}>
                            Home
                        </Button>
                        <Button type="text" icon={<LogoutOutlined />} onClick={handleLogout}>
                            Logout
                        </Button>
                    </Space>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
