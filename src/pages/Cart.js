import React from 'react';
import { Card, Table, Button, Space, Typography, notification } from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import { useGetUserCartQuery, useEmptyCartMutation, useCreateOrderMutation } from '../features/user/userApiSlice';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const Cart = () => {
    const { data: cart, isLoading, isError, error } = useGetUserCartQuery();
    const [emptyCart, { isLoading: isClearing }] = useEmptyCartMutation();
    const [createOrder, { isLoading: isOrdering }] = useCreateOrderMutation();

    const handleEmptyCart = async () => {
        try {
            await emptyCart().unwrap();
            notification.success({ message: 'Cart emptied successfully!' });
        } catch (err) {
            notification.error({ message: err.data?.message || 'Failed to empty cart.' });
        }
    };

    const handleCashOrder = async () => {
        try {
            await createOrder({ COD: true }).unwrap();
            notification.success({ message: 'Order placed successfully!' });
        } catch (err) {
            notification.error({ message: err.data?.message || 'Failed to place order.' });
        }
    };

    const columns = [
        {
            title: 'Startup',
            dataIndex: ['startup', 'name'],
            key: 'startup',
            render: (text, record) => <Link to={`/startup/${record.startup._id}`}>{text}</Link>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Price',
            dataIndex: ['startup', 'price'],
            key: 'price',
            render: (text) => `$${text}`,
        },
    ];

    if (isError) {
        return <p>Sorry, an error occurred: {error.data?.message}</p>;
    }

    return (
        <Card>
            <Title level={2}>Your Cart</Title>
            <Table
                columns={columns}
                dataSource={cart?.startups || []}
                loading={isLoading}
                rowKey={record => record.startup._id}
                summary={pageData => {
                    let total = 0;
                    pageData.forEach(({ startup, quantity }) => {
                        total += startup.price * quantity;
                    });

                    return (
                        <>
                            <Table.Summary.Row>
                                <Table.Summary.Cell colSpan={2}><Text strong>Total</Text></Table.Summary.Cell>
                                <Table.Summary.Cell>
                                    <Text strong>${total.toFixed(2)}</Text>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        </>
                    );
                }}
            />
            <Space style={{ marginTop: '24px' }}>
                <Button type="primary" danger icon={<DeleteOutlined />} onClick={handleEmptyCart} loading={isClearing}>
                    Empty Cart
                </Button>
                <Button type="primary" icon={<CheckOutlined />} onClick={handleCashOrder} loading={isOrdering}>
                    Place Order
                </Button>
            </Space>
        </Card>
    );
};

export default Cart;
