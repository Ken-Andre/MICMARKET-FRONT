import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, notification } from "antd";

const { Title, Text, Link } = Typography;

const NAME_REGEX = /^(?=.{2,32}$)[a-zA-Z0-9]+([ ][a-zA-Z0-9]+|[ -][a-zA-Z0-9]+)*$/u;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&]).{8,24}$/;
const MAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;
const TEL_REGEX = /^((?=.{8,}$)[2-3-6]{1}((\s)|(-)?){0,1}([0-9]{2})((\s)|(-)?){0,1}([0-9]{2})((\s)|(-)?){0,1}([0-9]{2})((\s)|(-)?){0,1}([0-9]{2}))$/;
const REGISTER_URL = `${process.env.REACT_APP_API_URL}/api/user/register`;

const Startup = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        const { firstname, lastname, email, password, mobile } = values;
        const payload = { firstname, lastname, email, password, mobile, role: 'startup' }; // Add role for startup

        fetch(REGISTER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 500) {
                    notification.error({
                        message: 'Registration Failed',
                        description: 'A user with this email already exists.',
                    });
                } else {
                     notification.error({
                        message: 'Registration Failed',
                        description: 'An unexpected error occurred. Please try again.',
                    });
                }
                throw new Error('Registration failed');
            }
            return response.json();
        })
        .then(data => {
            notification.success({
                message: 'Registration Successful',
                description: 'You can now log in with your new startup account.',
            });
            form.resetFields();
            setTimeout(() => {
                navigate('/auth/login');
            }, 1500);
        })
        .catch(err => {
            console.error('Error:', err);
        });
    };

    return (
        <>
            <Title level={2} style={{ textAlign: 'center' }}>Enregistrer votre Startup</Title>
            <Form form={form} name="register_startup" onFinish={onFinish} scrollToFirstError>
                <Form.Item
                    name="firstname"
                    label="Nom du représentant"
                    rules={[
                        { required: true, message: 'Please input your first name!' },
                        { pattern: NAME_REGEX, message: 'Please enter a valid name.' }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lastname"
                    label="Prénom du représentant"
                    rules={[
                        { required: true, message: 'Please input your last name!' },
                        { pattern: NAME_REGEX, message: 'Please enter a valid name.' }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail de la startup"
                    rules={[
                        { type: 'email', message: 'The input is not valid E-mail!' },
                        { required: true, message: 'Please input your E-mail!' },
                        { pattern: MAIL_REGEX, message: 'Please enter a valid email.'}
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { pattern: PWD_REGEX, message: 'Password must be 8-24 characters and include uppercase, lowercase, a number, and a special character (!@#$%&).' }
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
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

                <Form.Item
                    name="mobile"
                    label="Numéro de téléphone"
                    rules={[
                        { required: true, message: 'Please input your phone number!' },
                        { pattern: TEL_REGEX, message: 'Please enter a valid phone number.'}
                    ]}
                >
                    <Input addonBefore="+237" style={{ width: '100%' }} />
                </Form.Item>
                
                <Form.Item>
                     <Text>En cliquant sur ce boutton, vous acceptez d'avoir lu nos <Link to="/terms">conditions d'utilisations</Link></Text>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Enregistrer la Startup
                    </Button>
                </Form.Item>
                 <p>
                    Already registered?
                    <span className="line">
                        <NavLink to="/auth/login" className="fw-medium text-primary text-opacity-75 left-gap">Login</NavLink>
                    </span>
                </p>
            </Form>
             <p className="mt-3 mb-2 text-body-secondary text-end"> &copy; 2023-{new Date().getFullYear()} </p>
        </>
    );
};

export default Startup;
