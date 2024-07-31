import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button, Alert } from 'react-bootstrap';
import MenuItemCard from '../Components/MenuItemCard';
import { getMenuItems, getCategories } from '../services';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        setError('Error fetching menu items.');
      }
    };

    fetchMenuItems();
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        const splitCategories = data
          .flatMap(category => category.split(',').map(cat => cat.trim()))
          .filter((value, index, self) => self.indexOf(value) === index);
        setCategories(splitCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Error fetching categories.');
      }
    };

    fetchCategories();
  }, []);


  const handleFilter = (category) => {
    setFilteredCategory(category === filteredCategory ? null : category);
  };

  const filteredItems = filteredCategory
    ? menuItems.filter(item => 
        item.category.some(cat => cat.toLowerCase() === filteredCategory.toLowerCase()))
    : menuItems;
//ToDo: Filtering of Array with more than one category
  return (
    <Container className="mt-5">
      <h2>Menu</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <Col xs={12} className="mb-3">
          <ButtonGroup className="d-none d-lg-flex">
            {categories.map(category => (
              <Button
                key={category}
                variant={category === filteredCategory ? "primary" : "outline-primary"}
                onClick={() => handleFilter(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
          <DropdownButton
            className="d-lg-none"
            variant="outline-primary"
            title="Filter"
            id="filter-dropdown"
          >
            {categories.map(category => (
              <Dropdown.Item
                key={category}
                active={category === filteredCategory}
                onClick={() => handleFilter(category)}
              >
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        {filteredItems.map(item => (
          <Col key={item._id} sm="4">
            <MenuItemCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
