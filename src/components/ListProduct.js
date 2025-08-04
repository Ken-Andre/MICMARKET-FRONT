import React from 'react';
import { List, Typography } from 'antd';
import ProductCard from './ProductCard';

const { Text } = Typography;

const ListProduct = ({ searchResults }) => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3,
                xl: 4,
                xxl: 4,
            }}
            dataSource={searchResults}
            renderItem={(product) => (
                <List.Item>
                    <ProductCard product={product} />
                </List.Item>
            )}
            locale={{ emptyText: <Text>No Matching Products</Text> }}
        />
    );
};

export default ListProduct;
