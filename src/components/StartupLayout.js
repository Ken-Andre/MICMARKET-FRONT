import React from 'react';
import DashboardLayout from './DashboardLayout';
import {
  AiOutlineDashboard,
  AiOutlinePlusSquare,
  AiOutlineCheckSquare,
} from 'react-icons/ai';

const menuItems = [
    {
        key: '/funding',
        icon: <AiOutlineDashboard />,
        label: 'Dashboard',
    },
    {
        key: '/funding/overview',
        icon: <AiOutlineDashboard />,
        label: 'Overview',
    },
    {
        key: '/funding/add',
        icon: <AiOutlinePlusSquare />,
        label: 'Add Startup',
    },
    {
        key: '/funding/status',
        icon: <AiOutlineCheckSquare />,
        label: 'Startup Status',
    },
];

const StartupLayout = () => {
    return <DashboardLayout menuItems={menuItems} />;
};

export default StartupLayout;
