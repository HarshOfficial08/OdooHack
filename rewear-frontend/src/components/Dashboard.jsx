import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

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
                                <Link to="/" className="nav-link text-white me-3">Home</Link>
                                <Link to="/browse" className="nav-link text-white me-3">Browse Items</Link>
                                <Link to="/list-item" className="nav-link text-white me-3">List an Item</Link>
                                <Link to="/about" className="nav-link text-white me-3">About Us</Link>
                                <Link to="/contact" className="nav-link text-white me-3">Contact</Link>
                                <Link to="/help" className="nav-link text-white">Help</Link>
                            </div>
                        </div>
                        <div className="col-auto ms-5">
                            <div className="d-flex gap-3">
                                <div className="navbar-search">
                                    <input 
                                        type="search" 
                                        placeholder="Search items..." 
                                        className="search-input" 
                                    />
                                </div>
                                <div className="navbar-user">
                                    <Link to="/profile" className="nav-link text-white">
                                        <i className="bi bi-person-circle"></i>
                                    </Link>
                                    <button className="btn btn-outline-light" onClick={handleLogout}>
                                        <i className="bi bi-box-arrow-right me-2"></i>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container-fluid px-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold mb-4">
                                Swap, Save, Sustain with ReWear
                            </h1>
                            <p className="lead mb-4">
                                Exchange your unused clothes for something new. Join our community and make a positive impact on the planet.
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <Link to="/list-item" className="btn dashboard-btn me-md-2">
                                    <i className="bi bi-arrow-right-circle me-2"></i>
                                    Start Swapping
                                </Link>
                                <Link to="/browse" className="btn btn-outline-primary dashboard-btn">
                                    <i className="bi bi-search me-2"></i>
                                    Browse Items
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="carousel">
                                <div className="carousel-item active">
                                    <img src="/images/featured-item-1.jpg" className="img-fluid rounded-3" alt="Featured Item 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="/images/featured-item-2.jpg" className="img-fluid rounded-3" alt="Featured Item 2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="dashboard-content">
                <div className="container-fluid px-5">
                    {/* How It Works */}
                    <section className="mb-5">
                        <h2 className="text-center mb-4">How It Works</h2>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="mb-4">
                                    <i className="bi bi-upload display-1 text-primary mb-3"></i>
                                    <h3>Step 1: List Your Item</h3>
                                    <p>Upload photos and details of your item</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="mb-4">
                                    <i className="bi bi-chat-right-quote display-1 text-primary mb-3"></i>
                                    <h3>Step 2: Receive Requests</h3>
                                    <p>Get swap requests from other users</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="mb-4">
                                    <i className="bi bi-check-circle display-1 text-primary mb-3"></i>
                                    <h3>Step 3: Confirm Swap</h3>
                                    <p>Exchange items and give them new life</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* User Dashboard Content */}
                    <section className="mb-5">
                        <h2 className="text-center mb-4">Your Dashboard</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card dashboard-card">
                                    <div className="card-body">
                                        <h3 className="mb-3">Profile Details</h3>
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-envelope me-2"></i>
                                            <span>Email: {user.email}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-person me-2"></i>
                                            <span>Role: {user.role}</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <i className="bi bi-star me-2"></i>
                                            <span>Points: {user.points}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card dashboard-card">
                                    <div className="card-body">
                                        <h3 className="mb-3">Quick Actions</h3>
                                        <button className="btn btn-primary mb-2 w-100 dashboard-btn">
                                            <i className="bi bi-plus-circle me-2"></i>
                                            List New Item
                                        </button>
                                        <button className="btn btn-outline-primary mb-2 w-100 dashboard-btn">
                                            <i className="bi bi-box-arrow-in-right me-2"></i>
                                            View Swap Requests
                                        </button>
                                        <button className="btn btn-outline-primary w-100 dashboard-btn">
                                            <i className="bi bi-journal-text me-2"></i>
                                            Points History
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card dashboard-card">
                                    <div className="card-body">
                                        <h3 className="mb-3">Notifications</h3>
                                        <div className="notification-item mb-3">
                                            <i className="bi bi-bell me-2"></i>
                                            <span>New swap request received</span>
                                        </div>
                                        <div className="notification-item mb-3">
                                            <i className="bi bi-check-circle me-2"></i>
                                            <span>Swap confirmed successfully</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="dashboard-footer">
                <div className="container-fluid px-5">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="mb-4">About ReWear</h3>
                            <p>Join our community of sustainable fashion enthusiasts. Swap clothes, save money, and reduce waste.</p>
                            <div className="social-links mb-4">
                                <a href="#" className="social-link"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="social-link"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="social-link"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                            </div>
                            <div className="footer-links d-flex justify-content-between">
                                <a href="/about" className="footer-link">About Us</a>
                                <a href="/terms" className="footer-link">Terms of Service</a>
                                <a href="/privacy" className="footer-link">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="map-container">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.375425733564!2d72.6366633!3d23.192985000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3899863389%3A0xbe064abb3cd6a7cd!2sOdoo!5e0!3m2!1sen!2sin!4v1752310467104!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="300" 
                                    style={{border: '0'}} 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
