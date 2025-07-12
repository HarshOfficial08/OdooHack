import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';

const SwapItems = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Vintage Denim Jacket',
            price: 1500,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'John Doe',
            condition: 'Excellent',
            category: 'Jackets'
        },
        {
            id: 2,
            name: 'Leather Boots',
            price: 3500,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'Jane Smith',
            condition: 'Good',
            category: 'Shoes'
        },
        {
            id: 3,
            name: 'Cashmere Sweater',
            price: 2500,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'Mike Johnson',
            condition: 'Like New',
            category: 'Sweaters'
        },
        {
            id: 4,
            name: 'Silk Dress',
            price: 4500,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'Sarah Wilson',
            condition: 'Excellent',
            category: 'Dresses'
        },
        {
            id: 5,
            name: 'Leather Handbag',
            price: 2800,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'Emily Brown',
            condition: 'Good',
            category: 'Accessories'
        },
        {
            id: 6,
            name: 'Wool Trousers',
            price: 1800,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'David Clark',
            condition: 'Like New',
            category: 'Pants'
        },
        {
            id: 7,
            name: 'Silk Scarf',
            price: 1200,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'Emma Taylor',
            condition: 'Excellent',
            category: 'Accessories'
        },
        {
            id: 8,
            name: 'Leather Belt',
            price: 800,
            imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
            owner: 'James Wilson',
            condition: 'Good',
            category: 'Accessories'
        }
    ]);

    return (
        <div className="dashboard-wrapper">
            {/* Navbar */}
            <nav className="dashboard-navbar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <div className="navbar-brand text-white">
                                <i className="bi bi-arrow-clockwise me-2"></i>
                                ReWear
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <Link to="/dashboard" className="nav-link text-white me-3">Home</Link>
                                <Link to="/browse" className="nav-link text-white me-3">Browse Items</Link>
                                <Link to="/list-item" className="nav-link text-white me-3">List an Item</Link>
                                <Link to="/about" className="nav-link text-white me-3">About Us</Link>
                                <Link to="/contact" className="nav-link text-white me-3">Contact</Link>
                                <Link to="/help" className="nav-link text-white">Help</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="dashboard-content">
                <Container fluid>
                    <div className="row mx-0">
                        <div className="col-12 px-0">
                            <div className="container-fluid px-0">
                                <h1 className="display-4 mb-4">Swap Items</h1>
                                <div className="d-flex justify-content-end mb-4">
                                    <Link to="/list-item" className="btn btn-primary">
                                        <i className="bi bi-plus-circle me-2"></i>
                                        Add Product
                                    </Link>
                                </div>
                                <Row xs={2} md={4} className="g-2 mb-5">
                                    {products.map((product) => (
                                        <Col key={product.id} className="px-2">
                                            <Card className="h-100 shadow-sm" style={{ maxWidth: '300px' }}>
                                                <Card.Img 
                                                    variant="top" 
                                                    src={product.imageUrl} 
                                                    style={{ height: '150px', objectFit: 'cover' }}
                                                />
                                                <Card.Body className="p-2">
                                                    <Card.Title className="h6 mb-1">{product.name}</Card.Title>
                                                    <div className="card-text">
                                                        <div className="d-flex justify-content-between mb-1">
                                                            <span className="text-muted small">Owner: {product.owner}</span>
                                                            <span className="badge bg-success">{product.condition}</span>
                                                        </div>
                                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                                            <span className="text-primary h6 mb-0">₹{product.price}</span>
                                                            <span className="text-muted small">{product.category}</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-1">
                                                        <Button variant="outline-primary" size="sm" className="flex-grow-1">
                                                            Swap
                                                        </Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default SwapItems;
