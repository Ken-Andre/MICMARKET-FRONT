import React, { useState } from 'react';
import { Form, Input, Button, Card, Row, Col, Typography, notification } from 'antd';
import { HomeOutlined, MailOutlined, PhoneOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { axiosPrivate } from '../api/axios';
import Meta from '../components/Meta';

const { Title, Text } = Typography;

const Contact = () => {
    const [form] = Form.useForm();
    const [isLoaded, setIsLoaded] = useState(false);

    const onFinish = (values) => {
        const loadingToast = notification.info({
            message: 'Sending contact request...',
            duration: 0,
        });

        axiosPrivate.post("/contact", values)
            .then(response => {
                notification.destroy(loadingToast);
                if (response.status === 200) {
                    notification.success({
                        message: 'Contact request sent successfully!',
                    });
                    form.resetFields();
                    const { Name, Email, Message, Mobile } = values;
                    const subject = encodeURIComponent("Demande de prise de contact - De MICMarket");
                    const body = encodeURIComponent(`${Message}\n\n${Name}\n${Email}\n${Mobile}`);
                    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
                    window.location.href = mailtoUrl;
                } else {
                    notification.error({
                        message: 'An error occurred while sending the contact request.',
                    });
                }
            })
            .catch(error => {
                notification.destroy(loadingToast);
                notification.error({ message: error.message });
            });
    };

    return (
        <>
            <Meta title={"Contact Us"} />
            <div style={{ padding: '50px' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: '50px' }}>Contact Us</Title>
                <div style={{ marginBottom: '50px', height: '450px' }}>
                     {!isLoaded && <div style={{ height: '100%', width: '100%', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading map...</div>}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9806327236392!2d9.69639937438082!3d4.024360347150717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106113b7bdb4f133%3A0xc7197d58514b7304!2sJABA%20SPACE!5e0!3m2!1sen!2scm!4v1685100488031!5m2!1sen!2scm"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        onLoad={() => setIsLoaded(true)}
                    ></iframe>
                </div>
                <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                        <Card>
                            <Title level={4}>Contactez-nous</Title>
                            <Form form={form} layout="vertical" onFinish={onFinish}>
                                <Form.Item name="Name" label="Nom" rules={[{ required: true }]}>
                                    <Input placeholder="Your Name Here ..." />
                                </Form.Item>
                                <Form.Item name="Email" label="Email" rules={[{ required: true, type: 'email' }]}>
                                    <Input placeholder="name@email.domain" />
                                </Form.Item>
                                <Form.Item name="Mobile" label="Téléphone" rules={[{ required: true }]}>
                                    <Input placeholder="+(--) 678495663" />
                                </Form.Item>
                                <Form.Item name="Message" label="Message" rules={[{ required: true }]}>
                                    <Input.TextArea rows={4} placeholder="Votre message ici ..." />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>Envoyer</Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                    <Col xs={24} md={12}>
                        <Card>
                             <Title level={4}>Infos Utiles</Title>
                             <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}><HomeOutlined style={{ marginRight: '8px' }} /> <Text>Addresse : 3e etage Immeuble IPN <br /> Bonapriso, Cameroun <br /> PB: 5504</Text></li>
                                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}><PhoneOutlined style={{ marginRight: '8px' }} /> <a href="tel:+237 678453040">+237 678453040</a></li>
                                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}><MailOutlined style={{ marginRight: '8px' }} /> <a href="mailto:jabaspace@gmail.com">jabaspace@gmail.com</a></li>
                                <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}><InfoCircleOutlined style={{ marginRight: '8px' }} /> <Text>Monday – Friday 9 AM – 8 PM</Text></li>
                             </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Contact;
