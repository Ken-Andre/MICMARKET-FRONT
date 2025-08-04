import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout, Select, Typography, Button, Drawer, Row, Col } from "antd";
import { FilterOutlined } from '@ant-design/icons';
import Meta from "../components/Meta";
import FilterProduct from "../components/FilterProduct";
import ListStartup from "../components/ListStartup";
import SearchBar from "../components/SearchBar";

const { Sider, Content } = Layout;
const { Text } = Typography;
const { Option } = Select;

const OurStore = () => {
    const [startups, setStartups] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState("title-ascending");

    useEffect(() => {
        const fetchStartups = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/startups?${query}`);
                setStartups(response.data);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des startups:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStartups();
    }, [query]);

    useEffect(() => {
        let sortedResults = [...searchResults];
        switch (sortOrder) {
            case "title-ascending":
                sortedResults.sort((a, b) => a.name.localeCompare(b.name));
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

    return (
        <>
            <Meta title={"Browse Startup"} />
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
                                <Text className="d-none d-md-inline">{searchResults.length} Startups</Text>
                            </Col>
                            <Col xs={24} md={12}>
                               <SearchBar
                                    posts={startups}
                                    setSearchResults={setSearchResults}
                                    placeholder="Search a specific Startup ..."
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
                        {error && <p>Error: {error}</p>}
                        {!isLoading && !error && <ListStartup searchResults={searchResults} />}
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
