import React, { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/user";
  const errRef = useRef();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, []);

  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData, email }));
      navigate(from, { replace: true });
      toast.success("Login Successful");
    } catch (err) {
      if (!err?.originalStatus) {
        toast.error("No Server Response");
      } else if (err.originalStatus === 400) {
        toast.error("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        toast.error("Unauthorized");
      } else {
        toast.error("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <>
      <ToastContainer />
      <Title level={2} style={{ textAlign: 'center' }}>Content de vous revoir !</Title>
      <Text type="secondary" style={{ textAlign: 'center', display: 'block', marginBottom: '24px' }}>Veillez vous connectez.</Text>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox onChange={togglePersist} checked={persist}>Remember me</Checkbox>
          </Form.Item>
          <Link href="/auth/forgot-password" style={{ float: 'right' }}>
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Log in
          </Button>
          Or <NavLink to="/auth/signup">register now!</NavLink>
        </Form.Item>
      </Form>
      <p className="mt-3 mb-3 text-body-secondary text-end">
        &copy; 2023-{new Date().getFullYear()}
      </p>
    </>
  );
};

export default Login;
