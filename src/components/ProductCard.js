import React from 'react';
import { Card, Rate, Button, Typography, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleKnowMoreClick = (product) => {
        navigate(`/product/${product._id}`);
    };

    return (
        <Card
            hoverable
            cover={<img alt={product.title} src={product.images?.[0]} style={{ height: 200, objectFit: 'cover' }} />}
            actions={[
                <Button type="primary" onClick={() => handleKnowMoreClick(product)}>
                    En Savoir Plus
                </Button>
            ]}
        >
            <Card.Meta
                title={<Title level={4}>{product.title}</Title>}
                description={
                    <>
                        <Text ellipsis={{ rows: 3 }}>{product.description || "No description available."}</Text>
                        <div style={{ margin: '12px 0' }}>
                            <Rate disabled allowHalf defaultValue={product.totalrating} />
                            <Text type="secondary" style={{ marginLeft: '8px' }}>({product.totalrating})</Text>
                        </div>
                        <div>
                            <Tag color="blue">{product.category || 'N/A'}</Tag>
                        </div>
                         <div style={{ marginTop: '12px' }}>
                            <Text strong>Price:</Text> <Text>{product.price ? `${product.price}$` : 'Free'}</Text>
                        </div>
                    </>
                }
            />
        </Card>
    );
};

export default ProductCard;
