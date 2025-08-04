import React from 'react';
import { Form, Input, Button, InputNumber, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useCreateStartupMutation } from '../features/startups/startupsApiSlice';
import { useNavigate } from 'react-router-dom';

const { TextArea } = Input;

const AddStartup = () => {
    const [createStartup, { isLoading }] = useCreateStartupMutation();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            await createStartup(values).unwrap();
            notification.success({ message: 'Startup added successfully!' });
            form.resetFields();
            navigate('/funding');
        } catch (err) {
            notification.error({ message: err.data?.message || 'Failed to add startup.' });
        }
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <div>
            <h1>Register your Startup Here</h1>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item name="name" label="Startup Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="website" label="Website URL" rules={[{ type: 'url' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="address" label="Address">
                    <Input />
                </Form.Item>
                <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item name="price" label="Price per Share" rules={[{ type: 'number' }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item name="quantity" label="Shares to Sell" rules={[{ type: 'number' }]}>
                    <InputNumber min={0} />
                </Form.Item>
                <Form.Item
                    name="images"
                    label="Upload Images"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Add Startup
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddStartup;
