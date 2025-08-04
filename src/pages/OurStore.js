import React, { useState, useEffect } from "react";
import { useGetStartupsQuery } from "../features/startups/startupsApiSlice";
import { useGetProductsQuery } from "../features/products/productsApiSlice";
import { Layout, Select, Typography, Button, Drawer, Row, Col, Segmented } from "antd";
import { FilterOutlined } from '@ant-design/icons';
import Meta from "../components/Meta";
import FilterProduct from "../components/FilterProduct";
import ListStartup from "../components/ListStartup";
import ListProduct from "../components/ListProduct";
import SearchBar from "../components/SearchBar";

const { Sider, Content } = Layout;
const { Text } = Typography;
const { Option } = Select;

const OurStore = () => {
    const { data: startups, isLoading: isLoadingStartups, isError: isErrorStartups, error: errorStartups } = useGetStartupsQuery();
    const { data: products, isLoading: isLoadingProducts, isError: isErrorProducts, error: errorProducts } = useGetProductsQuery();
    const [displayType, setDisplayType] = useState('Startups');
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState("title-ascending");

    useEffect(() => {
        if (displayType === 'Startups' && startups) {
            setSearchResults(startups);
        } else if (displayType === 'Products' && products) {
            setSearchResults(products);
        }
    }, [displayType, startups, products]);

    useEffect(() => {
        let sortedResults = [...searchResults];
        switch (sortOrder) {
            case "title-ascending":
                sortedResults.sort((a, b) => (a.name || a.title).localeCompare(b.name || b.title));
                break;
            case "price-ascending":
                sortedResults.sort((a, b) => (a.price || 0) - (b.price || 0));
                break;
            case "price-descending":
                sortedResults.sort((a, b) => (b.price || 0) - (a.price || 0));
                break;
            case "created-ascending":
                sortedResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case "created-descending":
                sortedResults.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            default:
                break;
        }
        setSearchResults(sortedResults);
    }, [sortOrder, searchResults]);


    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const isLoading = isLoadingStartups || isLoadingProducts;
    const isError = isErrorStartups || isErrorProducts;
    const error = errorStartups || errorProducts;

    return (
        <>
            <Meta title={"Browse Our Store"} />
            <Layout>
                <Sider width={250} theme="light" className="d-none d-md-block" style={{ padding: '24px' }}>
                    <FilterProduct setQuery={setQuery} />
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: '100vh' }}>
                    <div style={{ padding: '24px', background: '#fff' }}>
                        <Row justify="space-between" align="middle" style={{ marginBottom: '24px' }}>
                             <Col xs={24} md={4}>
                                <Button
                                    className="d-md-none"
                                    type="primary"
                                    icon={<FilterOutlined />}
                                    onClick={toggleFilter}
                                >
                                    Filters
                                </Button>
                                <Text className="d-none d-md-inline">{searchResults.length} {displayType}</Text>
                            </Col>
                            <Col xs={24} md={8}>
                                <Segmented
                                    options={['Startups', 'Products']}
                                    value={displayType}
                                    onChange={setDisplayType}
                                />
                            </Col>
                            <Col xs={24} md={6}>
                               <SearchBar
                                    posts={displayType === 'Startups' ? startups : products}
                                    setSearchResults={setSearchResults}
                                    placeholder={`Search a specific ${displayType}...`}
                                />
                            </Col>
                            <Col xs={24} md={6}>
                                <Select
                                    defaultValue="title-ascending"
                                    style={{ width: '100%' }}
                                    onChange={(value) => setSortOrder(value)}
                                >
                                    <Option value="title-ascending">Alphabetic, A-Z</Option>
                                    <Option value="price-ascending">Price, low to high</Option>
                                    <Option value="price-descending">Price, high to low</Option>
                                    <Option value="created-ascending">Newest</Option>
                                    <Option value="created-descending">Oldest</Option>
                                </Select>
                            </Col>
                        </Row>
                        {isLoading && <p>Loading...</p>}
                        {isError && <p>Error: {error.data?.message}</p>}
                        {!isLoading && !isError && (
                            displayType === 'Startups' ? (
                                <ListStartup searchResults={searchResults} />
                            ) : (
                                <ListProduct searchResults={searchResults} />
                            )
                        )}
                    </div>
                </Content>
            </Layout>
            <Drawer
                title="Filters"
                placement="left"
                onClose={toggleFilter}
                visible={isFilterOpen}
                className="d-md-none"
            >
                <FilterProduct setQuery={setQuery} />
            </Drawer>
        </>
    );
};

export default OurStore;
