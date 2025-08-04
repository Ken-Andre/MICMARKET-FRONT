import React, { useState, useEffect } from "react";
import { Rate, Card, Row, Col, Typography, Button, List, Form, Input, Modal, notification } from "antd";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const { Title, Text, Paragraph } = Typography;

const SingleProd = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [startup, setStartup] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { auth } = useAuth();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        const getStartupAndComments = async () => {
            setLoading(true);
            try {
                const startupRes = await fetch(`https://rawg.io/api/games/${id}?key=${process.env.REACT_APP_RAWG}`);
                const startupData = await startupRes.json();
                setStartup(startupData);

                const commentsRes = await fetch(`https://rawg.io/api/games/${id}/reviews?key=${process.env.REACT_APP_RAWG}`);
                const commentsData = await commentsRes.json();
                setComments(commentsData.results);
            } catch (error) {
                console.error("Failed to fetch startup or comments", error);
            } finally {
                setLoading(false);
            }
        };
        getStartupAndComments();
    }, [id]);

    const handleBuyClick = () => {
        if (auth.token) {
            navigate(`/checkout/${id}`);
        } else {
            setIsModalVisible(true);
        }
    };

    const handleReviewSubmit = (values) => {
        const payload = { ...values, startupId: id, userEmail: auth.mailUser };
        axios.post("http://192.168.2.132:5000/api/user/startup", payload)
            .then(response => {
                notification.success({ message: 'Review submitted successfully!' });
                form.resetFields();
                // a revoir pour le rafraichissement des commentaires
            })
            .catch(err => {
                notification.error({ message: 'Failed to submit review.' });
            });
    };
    
    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ padding: '50px' }}>
            <Card>
                <Row align="middle">
                    <Col span={4}>
                        <img alt={startup.name} src={startup.background_image} style={{ width: '100%', borderRadius: '8px' }} />
                    </Col>
                    <Col span={14} style={{ paddingLeft: '24px' }}>
                        <Title level={3}>{startup.name}</Title>
                        <Text>{startup.address || "121 King Street, Melbourne Victoria 3000, Australia"}</Text>
                    </Col>
                    <Col span={6} style={{ textAlign: 'right' }}>
                        <Rate disabled allowHalf value={startup.rating} />
                        <Text style={{ marginLeft: '8px' }}>({startup.rating})</Text>
                        <Button type="primary" onClick={handleBuyClick} style={{ marginTop: '16px' }}>
                            Acheter des actions
                        </Button>
                    </Col>
                </Row>
            </Card>

            <Row gutter={32} style={{ marginTop: '32px' }}>
                <Col md={16}>
                    <Card title="Reviews">
                        <List
                            dataSource={comments}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.user.username}
                                        description={item.text}
                                    />
                                    <Rate disabled defaultValue={item.rating} />
                                </List.Item>
                            )}
                        />
                    </Card>
                    <Card title="Add Your Review" style={{ marginTop: '32px' }}>
                        <Form form={form} onFinish={handleReviewSubmit}>
                            <Form.Item name="rate" label="Rating" rules={[{ required: true }]}>
                                <Rate />
                            </Form.Item>
                            <Form.Item name="comments" label="Comment" rules={[{ required: true }]}>
                                <Input.TextArea rows={4} />
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType="submit" type="primary" disabled={!auth.token}>
                                    {auth.token ? 'Submit Review' : 'You must be logged in to comment'}
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
                        <Paragraph><strong>Description:</strong> {startup.description_raw || 'N/A'}</Paragraph>
                        <Paragraph><strong>Catégorie:</strong> {startup.category || 'N/A'}</Paragraph>
                        <Paragraph><strong>Sous-catégorie:</strong> {startup.genre || 'N/A'}</Paragraph>
                        <Paragraph><strong>Date de création:</strong> {startup.released || 'N/A'}</Paragraph>
                        <Paragraph><strong>Quantité d'actions vendables:</strong> {startup.quantity || 0}</Paragraph>
                    </Card>
                </Col>
            </Row>

            <Modal
                title="Connectez-vous pour continuer"
                visible={isModalVisible}
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
