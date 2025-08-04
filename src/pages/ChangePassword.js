import React from 'react';
import { Card, Form, Input, Button, Typography, notification } from 'antd';

const { Title } = Typography;

const ChangePassword = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        // Here you would typically make an API call to update the password
        console.log("New Password:", values.password);
        notification.success({ message: 'Password updated successfully!' });
        form.resetFields();
    };

    return (
        <Card>
            <Title level={2}>Change Password</Title>
            <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item
                    name="password"
                    label="New Password"
                    rules={[{ required: true, message: 'Please input your new password!' }]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm New Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please confirm your new password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update Password
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ChangePassword;
