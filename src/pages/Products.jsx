import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const Products = () => {

    const { products } = useSelector((state) => state.products);

    return (
        <> 
            <section>
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
            </section>
        </>
    )
}

export default Products