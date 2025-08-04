import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Descriptions, Button, Spin, Alert } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const Overview = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user');
                setUserInfo(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
                 const fakeData = {
                    "firstname" : "Johnatan Smith",
                    "lastname" : "Dohicou Kopse",
                    "email" : "jonathan.dohicou@mail.com",
                    "mobile" : "+237 6784321",
                    "address" : "Bay Area, San Francisco, USA"
                };
                setUserInfo(fakeData);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    const handleEditUser = async () => {
        // Placeholder for edit functionality
        console.log("Edit user clicked");
    };
    
    if (isLoading) {
        return <Spin size="large" />;
    }

    if (error) {
        return <Alert message="Error" description="Failed to load user information." type="error" showIcon />;
    }

    return (
        <Card title="User Overview">
            <Descriptions bordered>
                <Descriptions.Item label="Firstname">{userInfo.firstname}</Descriptions.Item>
                <Descriptions.Item label="Lastname">{userInfo.lastname}</Descriptions.Item>
                <Descriptions.Item label="Email">{userInfo.email}</Descriptions.Item>
                <Descriptions.Item label="Mobile">{userInfo.mobile}</Descriptions.Item>
                <Descriptions.Item label="Address" span={2}>{userInfo.address}</Descriptions.Item>
            </Descriptions>
            <Button type="primary" icon={<EditOutlined />} onClick={handleEditUser} style={{ marginTop: '24px' }}>
                Edit User
            </Button>
        </Card>
    );
};

export default Overview;
