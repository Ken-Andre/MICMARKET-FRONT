import React from 'react';
import { List, Typography } from 'antd';
import ProductCard from './ProductCard';

const { Text } = Typography;

const ListStartup = ({ searchResults }) => {
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
            renderItem={(post) => (
                <List.Item>
                    <ProductCard post={post} />
                </List.Item>
            )}
            locale={{ emptyText: <Text>No Matching Startups</Text> }}
        />
    );
};

export default ListStartup;
