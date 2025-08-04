import React from 'react';
import { Card, Rate, Button, Typography, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const StartupCard = ({ startup }) => {
    const navigate = useNavigate();

    const handleKnowMoreClick = (startup) => {
        navigate(`/startup/${startup._id}`);
    };

    return (
        <Card
            hoverable
            cover={<img alt={startup.name} src={startup.images?.[0]} style={{ height: 200, objectFit: 'cover' }} />}
            actions={[
                <Button type="primary" onClick={() => handleKnowMoreClick(startup)}>
                    En Savoir Plus
                </Button>,
                 <a href={startup.website || '#'} target="_blank" rel="noopener noreferrer">
                    <Button>Website</Button>
                </a>
            ]}
        >
            <Card.Meta
                title={<Title level={4}>{startup.name}</Title>}
                description={
                    <>
                        <Text ellipsis={{ rows: 3 }}>{startup.description || "No description available."}</Text>
                        <div style={{ margin: '12px 0' }}>
                            <Rate disabled allowHalf defaultValue={startup.totalratings} />
                            <Text type="secondary" style={{ marginLeft: '8px' }}>({startup.totalratings})</Text>
                        </div>
                        <div>
                            <Tag color="blue">{startup.category || 'N/A'}</Tag>
                        </div>
                         <div style={{ marginTop: '12px' }}>
                            <Text strong>Price:</Text> <Text>{startup.price ? `${startup.price}$` : 'Free'}</Text>
                        </div>
                    </>
                }
            />
        </Card>
    );
};

export default StartupCard;