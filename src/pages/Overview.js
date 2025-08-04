import React, { useState } from 'react';
import { Card, Descriptions, Button, Spin, Alert, Modal, Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useGetUserQuery, useUpdateUserMutation } from '../features/user/userApiSlice';

const Overview = () => {
    const user = useSelector(selectCurrentUser);
    const { data: userInfo, isLoading, isError, error } = useGetUserQuery(user?._id);
    const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleEditUser = () => {
        form.setFieldsValue(userInfo);
        setIsModalVisible(true);
    };

    const handleUpdate = async (values) => {
        try {
            await updateUser({ _id: user._id, ...values }).unwrap();
            setIsModalVisible(false);
        } catch (err) {
            console.error('Failed to update user: ', err);
        }
    };
    
    if (isLoading) {
        return <Spin size="large" />;
    }

    if (isError) {
        return <Alert message="Error" description={error.data?.message || "Failed to load user information."} type="error" showIcon />;
    }

    return (
        <>
            <Card title="User Overview">
                <Descriptions bordered>
                    <Descriptions.Item label="Firstname">{userInfo.firstname}</Descriptions.Item>
                    <Descriptions.Item label="Lastname">{userInfo.lastname}</Descriptions.Item>
                    <Descriptions.Item label="Email">{userInfo.email}</Descriptions.Item>
                    <Descriptions.Item label="Mobile">{userInfo.mobile}</Descriptions.Item>
                    <Descriptions.Item label="Address" span={2}>{userInfo.address || 'N/A'}</Descriptions.Item>
                </Descriptions>
                <Button type="primary" icon={<EditOutlined />} onClick={handleEditUser} style={{ marginTop: '24px' }}>
                    Edit User
                </Button>
            </Card>
            <Modal
                title="Edit User Information"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <Form form={form} layout="vertical" onFinish={handleUpdate}>
                    <Form.Item name="firstname" label="First Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastname" label="Last Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="mobile" label="Mobile">
                        <Input />
                    </Form.Item>
                    <Form.Item name="address" label="Address">
                        <Input />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" loading={isUpdating}>
                        Update
                    </Button>
                </Form>
            </Modal>
        </>
    );
};

export default Overview;
