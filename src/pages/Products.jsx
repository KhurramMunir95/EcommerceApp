import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {

    const { products } = useSelector((store) => store.products);

    return (
        <>
            <Container>
                <Row>
                {
                    products.map((item) => (
                        <Col md={4} key={item.id}>
                            <ProductCard item={item} />
                        </Col>
                    ))
                }
                </Row>
            </Container>
        </>
    )
}

export default Products