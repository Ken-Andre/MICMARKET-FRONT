import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

const AuthLayout = () => {
  return (
    <Layout className="gradial-background" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content>
        <div className="rounded-box-white" style={{ padding: '40px', minWidth: '450px' }}>
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
