import React from 'react';
import DashboardLayout from './DashboardLayout';
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineEnvironment,
  AiOutlineLock,
} from 'react-icons/ai';

const menuItems = [
    {
        key: '/user',
        icon: <AiOutlineUser />,
        label: 'Profile',
    },
    {
        key: '/user/overview',
        icon: <AiOutlineDashboard />,
        label: 'Overview',
    },
    {
        key: '/user/cart',
        icon: <AiOutlineShoppingCart />,
        label: 'Cart',
    },
    {
        key: '/user/change-location',
        icon: <AiOutlineEnvironment />,
        label: 'Change Location',
    },
    {
        key: '/user/change-password',
        icon: <AiOutlineLock />,
        label: 'Change Password',
    },
];

const UserLayout = () => {
    return <DashboardLayout menuItems={menuItems} />;
};

export default UserLayout;
