import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, notification } from 'antd';

const { Title, Text } = Typography;

const ChangeLocation = () => {
    const [form] = Form.useForm();
    const [previousAddress, setPreviousAddress] = useState("Bay Area, San Francisco, CA");

    const onFinish = (values) => {
        // Here you would typically make an API call to update the address
        console.log("New Address:", values.newAddress);
        notification.success({ message: 'Address updated successfully!' });
        setPreviousAddress(values.newAddress);
        form.resetFields();
    };

    return (
        <Card>
            <Title level={2}>Change Location</Title>
            <Text type="secondary" style={{ display: 'block', marginBottom: '24px' }}>
                Current Address: {previousAddress}
            </Text>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    name="newAddress"
                    label="New Address"
                    rules={[{ required: true, message: 'Please input your new address!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update Address
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ChangeLocation;
