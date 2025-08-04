import React, { useState } from "react";
import { Rate, Card, Row, Col, Typography, Button, List, Form, Input, Modal, notification, InputNumber } from "antd";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetStartupByIdQuery, useRateStartupMutation } from "../features/startups/startupsApiSlice";
import { useAddToCartMutation } from "../features/user/userApiSlice";
import { selectCurrentUser } from "../features/auth/authSlice";

const { Title, Text, Paragraph } = Typography;

const SingleProd = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: startup, isLoading, isError, error } = useGetStartupByIdQuery(id);
    const [rateStartup, { isLoading: isRating }] = useRateStartupMutation();
    const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();
    const user = useSelector(selectCurrentUser);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [form] = Form.useForm();

    const handleAddToCart = async () => {
        if (!user) {
            setIsModalVisible(true);
            return;
        }
        try {
            await addToCart({ cart: [{ _id: id, count: quantity, price: startup.price }] }).unwrap();
            notification.success({ message: 'Startup added to cart successfully!' });
        } catch (err) {
            notification.error({ message: err.data?.message || 'Failed to add startup to cart.' });
        }
    };

    const handleReviewSubmit = async (values) => {
        try {
            await rateStartup({ id, ...values }).unwrap();
            notification.success({ message: 'Review submitted successfully!' });
            form.resetFields();
        } catch (err) {
            notification.error({ message: err.data?.message || 'Failed to submit review.' });
        }
    };
    
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.data?.message || 'Failed to fetch startup'}</p>;

    return (
        <div style={{ padding: '50px' }}>
            <Card>
                <Row align="middle">
                    <Col span={4}>
                        <img alt={startup.name} src={startup.images?.[0]} style={{ width: '100%', borderRadius: '8px' }} />
                    </Col>
                    <Col span={14} style={{ paddingLeft: '24px' }}>
                        <Title level={3}>{startup.name}</Title>
                        <Text>{startup.address || "Address not available"}</Text>
                    </Col>
                    <Col span={6} style={{ textAlign: 'right' }}>
                        <Rate disabled allowHalf value={startup.totalratings} />
                        <Text style={{ marginLeft: '8px' }}>({startup.totalratings})</Text>
                        <div style={{ marginTop: '16px' }}>
                            <InputNumber min={1} max={startup.quantity} value={quantity} onChange={setQuantity} />
                            <Button type="primary" onClick={handleAddToCart} loading={isAddingToCart} style={{ marginLeft: '8px' }}>
                                Add to Cart
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card>

            <Row gutter={32} style={{ marginTop: '32px' }}>
                <Col md={16}>
                    <Card title="Reviews">
                        <List
                            dataSource={startup.ratings}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.postedby?.firstname}
                                        description={item.comment}
                                    />
                                    <Rate disabled defaultValue={item.star} />
                                </List.Item>
                            )}
                        />
                    </Card>
                    <Card title="Add Your Review" style={{ marginTop: '32px' }}>
                        <Form form={form} onFinish={handleReviewSubmit}>
                            <Form.Item name="star" label="Rating" rules={[{ required: true }]}>
                                <Rate />
                            </Form.Item>
                            <Form.Item name="comment" label="Comment" rules={[{ required: true }]}>
                                <Input.TextArea rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary" disabled={!user || isRating}>
                                    {user ? 'Submit Review' : 'You must be logged in to comment'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card title="Caractéristiques de l'entreprise">
                        <Paragraph><strong>URL:</strong> <a href={startup.website} target="_blank" rel="noopener noreferrer">{startup.website}</a></Paragraph>
                        <Paragraph><strong>Email:</strong> {startup.email || 'N/A'}</Paragraph>
                        <Paragraph><strong>Téléphone:</strong> {startup.mobile || 'N/A'}</Paragraph>
                        <Paragraph><strong>Description:</strong> {startup.description || 'N/A'}</Paragraph>
                        <Paragraph><strong>Catégorie:</strong> {startup.category || 'N/A'}</Paragraph>
                        <Paragraph><strong>Date de création:</strong> {new Date(startup.createdAt).toLocaleDateString()}</Paragraph>
                        <Paragraph><strong>Quantité d'actions vendables:</strong> {startup.quantity || 0}</Paragraph>
                    </Card>
                </Col>
            </Row>

            <Modal
                title="Connectez-vous pour continuer"
                open={isModalVisible}
                onOk={() => navigate('/auth/login')}
                onCancel={() => setIsModalVisible(false)}
                okText="Se connecter"
                cancelText="Annuler"
            >
                <p>Pour effectuer cette action, vous devez être connecté à votre compte.</p>
            </Modal>
        </div>
    );
};

export default SingleProd;
