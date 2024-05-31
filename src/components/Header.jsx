import React from 'react';
import { Navbar, Container, Badge, Nav } from 'react-bootstrap';
import { FaOpencart } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Header = () => {
    const cartLength = useSelector((store) => store.cart.cartItems.length)
    return (
    <Navbar className="main-header">
        <Container>
            {/* <Navbar.Brand href="#home">Brand link</Navbar.Brand> */}
            <Nav className='mx-auto'>
                <Link to='/products' className='nav-link'>Products</Link>
            </Nav>
            <Nav className='ms-auto'>
                <Link to='/cart' className='text-decoration-none'>
                    <FaOpencart className='cart-icon' />
                    <Badge bg="light" className='rounded-circle cart-count' text="dark">
                        {cartLength}
                    </Badge>
                </Link>
            </Nav>
        </Container>
    </Navbar>
    )
}

export default Header