import React from 'react';
import { Card, Rate, Button, Typography, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const ProductCard = ({ post }) => {
    const navigate = useNavigate();

    const handleKnowMoreClick = (post) => {
        navigate(`/startup/${post.id}`);
    };

    return (
        <Card
            hoverable
            cover={<img alt={post.name} src={post.background_image} style={{ height: 200, objectFit: 'cover' }} />}
            actions={[
                <Button type="primary" onClick={() => handleKnowMoreClick(post)}>
                    En Savoir Plus
                </Button>,
                 <a href={post.website || '#'} target="_blank" rel="noopener noreferrer">
                    <Button>Website</Button>
                </a>
            ]}
        >
            <Card.Meta
                title={<Title level={4}>{post.name}</Title>}
                description={
                    <>
                        <Text ellipsis={{ rows: 3 }}>{post.body || "No description available."}</Text>
                        <div style={{ margin: '12px 0' }}>
                            <Rate disabled allowHalf defaultValue={post.rating} />
                            <Text type="secondary" style={{ marginLeft: '8px' }}>({post.rating})</Text>
                        </div>
                        <div>
                            <Tag color="blue">{post.category || 'N/A'}</Tag>
                            <Tag color="geekblue">{post.subcategory || 'N/A'}</Tag>
                        </div>
                         <div style={{ marginTop: '12px' }}>
                            <Text strong>Price:</Text> <Text>{post.price ? `${post.price}$` : 'Free'}</Text>
                        </div>
                    </>
                }
            />
        </Card>
    );
};

export default ProductCard;
