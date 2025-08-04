import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Table, Button, Space, Typography, notification } from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("{{base_url}}user/cart")
            .then(response => {
                setCartItems(response.data.cart);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
                const fakeData = {
                    cart: [
                        { _id: '1', count: 2 },
                        { _id: '2', count: 3 },
                        { _id: '3', count: 1 },
                    ],
                };
                setCartItems(fakeData.cart);
            });
    }, []);

    const handleEmptyCart = () => {
        axios.delete("{{base_url}}user/cart")
            .then(response => {
                setCartItems([]);
                notification.success({ message: 'Cart emptied successfully!' });
            })
            .catch(error => {
                console.log(error);
                notification.error({ message: 'Failed to empty cart.' });
            });
    };

    const handleCashOrder = () => {
        axios.post("{{base_url}}user/cart/cash-order", { COD: true })
            .then(response => {
                console.log(response.data);
                notification.success({ message: 'Order placed successfully!' });
            })
            .catch(error => {
                console.log(error);
                notification.error({ message: 'Failed to place order.' });
            });
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
        },
    ];

    if (error) {
        return <p>Sorry, an error occurred: {error.message}</p>;
    }

    return (
        <Card>
            <Title level={2}>Cart</Title>
            <Table
                columns={columns}
                dataSource={cartItems}
                loading={isLoading}
                rowKey="_id"
            />
            <Space style={{ marginTop: '24px' }}>
                <Button type="primary" danger icon={<DeleteOutlined />} onClick={handleEmptyCart}>
                    Empty Cart
                </Button>
                <Button type="primary" icon={<CheckOutlined />} onClick={handleCashOrder}>
                    Cash Order
                </Button>
            </Space>
        </Card>
    );
};

export default Cart;
