import React from 'react';
import { Tabs } from 'antd';
import Overview from './SOverview';
import AddStartup from './AddStartup';
import StartupStatus from './StartupStatus';

const { TabPane } = Tabs;

const StartupDashboard = () => {
    return (
        <Tabs defaultActiveKey="overview">
            <TabPane tab="Overview" key="overview">
                <Overview />
            </TabPane>
            <TabPane tab="Register My Startup" key="add">
                <AddStartup />
            </TabPane>
            <TabPane tab="Startup Status" key="status">
                <StartupStatus />
            </TabPane>
        </Tabs>
    );
};

export default StartupDashboard;
