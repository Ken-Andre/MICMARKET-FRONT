import React from 'react';
import { Tabs } from 'antd';
import Overview from './Overview';
import ChangeLocation from './ChangeLocation';
import ChangePassword from './ChangePassword';
import Cart from './Cart';

const { TabPane } = Tabs;

const ProfileDashboard = () => {
    return (
        <Tabs defaultActiveKey="overview">
            <TabPane tab="Overview" key="overview">
                <Overview />
            </TabPane>
            <TabPane tab="Change Location" key="change-location">
                <ChangeLocation />
            </TabPane>
            <TabPane tab="Change Password" key="change-password">
                <ChangePassword />
            </TabPane>
            <TabPane tab="Cart" key="cart">
                <Cart />
            </TabPane>
        </Tabs>
    );
};

export default ProfileDashboard;
