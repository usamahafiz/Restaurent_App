import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart   } from 'react-icons/fa';  
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { notification } from 'antd'; 
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishContext';
import { auth } from '../../firebase/config'; // Ensure you have the correct path for your Firebase config

const Header = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState(location.pathname);
    const { cart } = useCart(); // Get the cart from context
    const { wishlist } = useWishlist(); // Correctly call the hook
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth); // Ensure you use the auth instance
            notification.success({
                message: 'Logged Out',
                description: 'You have been logged out successfully.',
            });
            window.location.href = '/';
        } catch (error) {
            notification.error({
                message: 'Error',
                description: `Error logging out: ${error.message}`,
            });
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"> 
                    <h2>
                        Bite Heaven
                    </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" active={activeSection === '/'} onClick={() => setActiveSection('/')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" active={activeSection === '/about'} onClick={() => setActiveSection('/about')}>About</Nav.Link>
                        <Nav.Link as={Link} to="/buyer-dashboard" active={activeSection === '/buyer-dashboard'} onClick={() => setActiveSection('/buyer-dashboard')}>Shop</Nav.Link>
                        <Nav.Link as={Link} to="/contact" active={activeSection === '/contact'} onClick={() => setActiveSection('/contact')}>Contact</Nav.Link> 
                        <Nav.Link as={Link} to="/order" active={activeSection === '/my-orders'} onClick={() => setActiveSection('/my-orders')}>My Orders</Nav.Link>
                    </Nav>
                    {isLoggedIn ? (
                        <Button type="danger" onClick={handleLogout} style={{backgroundColor: "red", border: "0", padding: "10px 30px", marginLeft: '20px' }}>
                            <FaSignOutAlt /> Logout
                        </Button>
                    ) : (
                        <Button style={{ backgroundColor: "#AE845F", border: "0", padding: "10px 30px",  marginLeft: '20px' }} as={Link} to="/login">Login</Button>
                    )}
                     <div className="icons text-dark p-3 position-relative">
                        <Link to="/Wishlist">
                            <FaHeart size={24} />
                            <span
                                className="badge bg-danger position-absolute"
                                style={{
                                    fontSize: "0.75rem",
                                    padding: "0.3em 0.5em",
                                    borderRadius: "50%",
                                }}
                            >
                                {wishlist.length} {/* This will update in real time */}
                            </span>
                        </Link>
                    </div>
                    <div className="icons text-dark p-3 position-relative">
                        <Link to="/cart">
                            <FiShoppingCart size={24} />
                            <span
                                className="badge bg-danger position-absolute"
                                style={{
                                    fontSize: "0.75rem",
                                    padding: "0.3em 0.5em",
                                    borderRadius: "50%",
                                }}
                            >
                                {cart.length} {/* This will update in real time */}
                            </span>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;


