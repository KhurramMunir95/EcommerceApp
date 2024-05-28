import React from 'react';
import { Navbar, Container, Badge } from 'react-bootstrap';
import { FaOpencart } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Header = () => {
    const cartLength = useSelector((store) => store.cart.cartItems.length)
    console.log(cartLength)
    return (
    <Navbar className="main-header">
        <Container>
            {/* <Navbar.Brand href="#home">Brand link</Navbar.Brand> */}
            <div className='ms-auto'><FaOpencart className='cart-icon' />
                <Badge bg="light" className='rounded-circle cart-count' text="dark">
                    {cartLength}
                </Badge>
            </div>
        </Container>
    </Navbar>
    )
}

export default Header