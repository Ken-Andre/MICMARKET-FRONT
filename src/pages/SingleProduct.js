import React from 'react';
import { Row, Col, Card, Typography, Rate, Button, InputNumber, Tag, Breadcrumb, notification, Form, Input } from 'antd';
import { ShareAltOutlined, HeartOutlined, SwapOutlined } from '@ant-design/icons';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const SingleProduct = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            notification.success({ message: 'Copied to clipboard!' });
        });
    };

    return (
        <>
            <Meta title={"Startup Name"} />
            <div style={{ padding: '50px' }}>
                <Breadcrumb style={{ marginBottom: '24px' }}>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/categories">Startups</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Startup Name</Breadcrumb.Item>
                </Breadcrumb>
                <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                        <Card>
                            <img
                                src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                                alt="Startup"
                                style={{ width: '100%' }}
                            />
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card>
                            <Title level={3}>Kids Headphones Bulk 10 Pack Multi Colored For Students</Title>
                            <div style={{ marginBottom: '16px' }}>
                                <Rate allowHalf disabled defaultValue={4} />
                                <Text type="secondary" style={{ marginLeft: '8px' }}>(2 Reviews)</Text>
                                <a href="#review" style={{ marginLeft: '16px' }}>Write a Review</a>
                            </div>
                            <Title level={4}>$ 100</Title>
                            
                            <div style={{ marginBottom: '16px' }}>
                                <Text strong>Type:</Text> <Tag>Watch</Tag>
                                <Text strong style={{ marginLeft: '16px' }}>Brand:</Text> <Tag>Havells</Tag>
                                <Text strong style={{ marginLeft: '16px' }}>Availablity:</Text> <Tag color="green">In Stock</Tag>
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <Text strong>Size:</Text>
                                <Button style={{ margin: '0 8px' }}>S</Button>
                                <Button style={{ margin: '0 8px' }}>M</Button>
                                <Button style={{ margin: '0 8px' }}>XL</Button>
                                <Button style={{ margin: '0 8px' }}>XXL</Button>
                            </div>
                            
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                                <Text strong style={{ marginRight: '16px' }}>Quantity:</Text>
                                <InputNumber min={1} max={10} defaultValue={1} />
                                <Button type="primary" style={{ marginLeft: '16px' }}>Add to Cart</Button>
                                <Button style={{ marginLeft: '8px' }}>Buy It Now</Button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
                                <Button icon={<SwapOutlined />}>Add to Compare</Button>
                                <Button icon={<HeartOutlined />}>Add to Wishlist</Button>
                            </div>

                            <Button icon={<ShareAltOutlined />} onClick={() => copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")}>
                                Copy Product Link
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <div style={{ marginTop: '50px' }}>
                    <Title level={4}>Description</Title>
                    <Paragraph>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Tenetur nisi similique illum aut perferendis voluptas, quisquam
                        obcaecati qui nobis officia. Voluptatibus in harum deleniti
                        labore maxime officia esse eos? Repellat?
                    </Paragraph>
                </div>
                <div id="review" style={{ marginTop: '50px' }}>
                    <Title level={4}>Reviews</Title>
                    <Card>
                        <Title level={5}>Customer Reviews</Title>
                        <Rate disabled defaultValue={4} />
                        <Text type="secondary" style={{ marginLeft: '8px' }}>Based on 2 Reviews</Text>
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
