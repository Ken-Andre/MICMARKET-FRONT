import React, { useState } from 'react';
import { Card, Typography, Checkbox, Slider, Button } from 'antd';

const { Title, Text } = Typography;

const categories = [
    "FinTech", "LegalTech", "CleanTech", "AgTech", "BioTech", 
    "Agroalimentaire", "Loisirs & artisanat", "Services aux entreprises", 
    "Animaux", "Magasin & Jardin", "Medias & edition", "Beaute & Bien-etre", 
    "Restaurants & Bars", "Construction & fabrication", "Shopping & mode", 
    "Sante et medecine", "Sport"
];

const FilterProduct = ({ setQuery }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState([10, 1000000]);

    const onCategoriesChange = (checkedValues) => {
        setSelectedCategories(checkedValues);
    };

    const onPriceChange = (value) => {
        setPriceRange(value);
    };
    
    const applyFilters = () => {
        let query = "";

        if (selectedCategories.length > 0) {
            query += selectedCategories.map(cat => `category=${encodeURIComponent(cat)}`).join('&');
        }

        if (priceRange) {
            if (query) query += '&';
            query += `price[gte]=${priceRange[0]}&price[lte]=${priceRange[1]}`;
        }
        
        setQuery(query);
    };

    return (
        <Card>
            <Title level={4}>Filter By</Title>
            
            <div style={{ marginBottom: '24px' }}>
                <Title level={5}>Categories</Title>
                <Checkbox.Group
                    options={categories}
                    value={selectedCategories}
                    onChange={onCategoriesChange}
                    style={{ display: 'flex', flexDirection: 'column' }}
                />
            </div>

            <div style={{ marginBottom: '24px' }}>
                <Title level={5}>Price of an Action</Title>
                <Slider
                    range
                    defaultValue={[10, 1000000]}
                    min={10}
                    max={1000000}
                    onChange={onPriceChange}
                    step={1000}
                    tipFormatter={value => `${value}$`}
                />
                <Text>{`Price: ${priceRange[0]}$ - ${priceRange[1]}$`}</Text>
            </div>

            <Button type="primary" onClick={applyFilters} block>
                Apply Filters
            </Button>
        </Card>
    );
};

export default FilterProduct;
