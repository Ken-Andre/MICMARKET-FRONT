import React, { useState } from 'react';
import { Row, Col, Card, Typography, Rate, Button, InputNumber, Tag, Breadcrumb, notification, Form, Input } from 'antd';
import { ShareAltOutlined, HeartOutlined, SwapOutlined } from '@ant-design/icons';
import Meta from '../components/Meta';
import { Link, useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../features/products/productsApiSlice';
import { useAddToCartMutation } from '../features/user/userApiSlice';

const { Title, Paragraph, Text } = Typography;

const SingleProduct = () => {
    const { id } = useParams();
    const { data: product, isLoading, isError, error } = useGetProductByIdQuery(id);
    const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async () => {
        try {
            await addToCart({ cart: [{ _id: id, count: quantity }] }).unwrap();
            notification.success({ message: 'Product added to cart successfully!' });
        } catch (err) {
            notification.error({ message: err.data?.message || 'Failed to add product to cart.' });
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            notification.success({ message: 'Copied to clipboard!' });
        });
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.data?.message}</p>;

    return (
        <>
            <Meta title={product.title} />
            <div style={{ padding: '50px' }}>
                <Breadcrumb style={{ marginBottom: '24px' }}>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/categories">Products</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>{product.title}</Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                        <Card>
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                style={{ width: '100%' }}
                            />
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card>
                            <Title level={3}>{product.title}</Title>
                            <div style={{ marginBottom: '16px' }}>
                                <Rate allowHalf disabled defaultValue={product.totalrating} />
                                <Text type="secondary" style={{ marginLeft: '8px' }}>({product.ratings.length} Reviews)</Text>
                                <a href="#review" style={{ marginLeft: '16px' }}>Write a Review</a>
                            </div>
                            <Title level={4}>$ {product.price}</Title>
                            
                            <div style={{ marginBottom: '16px' }}>
                                <Text strong>Category:</Text> <Tag>{product.category}</Tag>
                                <Text strong style={{ marginLeft: '16px' }}>Availablity:</Text> <Tag color={product.quantity > 0 ? "green" : "red"}>{product.quantity > 0 ? 'In Stock' : 'Out of Stock'}</Tag>
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                                <Text strong style={{ marginRight: '16px' }}>Quantity:</Text>
                                <InputNumber min={1} max={product.quantity} value={quantity} onChange={setQuantity} />
                                <Button type="primary" style={{ marginLeft: '16px' }} onClick={handleAddToCart} loading={isAddingToCart}>Add to Cart</Button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                                <Button icon={<SwapOutlined />}>Add to Compare</Button>
                                <Button icon={<HeartOutlined />}>Add to Wishlist</Button>
                            </div>

                            <Button icon={<ShareAltOutlined />} onClick={() => copyToClipboard(window.location.href)}>
                                Copy Product Link
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <div style={{ marginTop: '50px' }}>
                    <Title level={4}>Description</Title>
                    <Paragraph>
                        {product.description}
                    </Paragraph>
                </div>
                <div id="review" style={{ marginTop: '50px' }}>
                    <Title level={4}>Reviews</Title>
                    <Card>
                        <Title level={5}>Customer Reviews</Title>
                        {product.ratings.map(rating => (
                            <div key={rating._id} style={{ marginBottom: '16px' }}>
                                <Rate disabled defaultValue={rating.star} />
                                <p>{rating.comment}</p>
                            </div>
                        ))}
                        <div style={{ marginTop: '24px' }}>
                            <Title level={5}>Write a Review</Title>
                            <Form>
                                <Form.Item>
                                    <Rate />
                                </Form.Item>
                                <Form.Item>
                                    <Input.TextArea rows={4} />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit" type="primary">
                                        Submit Review
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
