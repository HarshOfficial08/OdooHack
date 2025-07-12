import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        const result = await register(username, email, password);
        
        if (result.success) {
            navigate('/dashboard');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="text-center mb-4">
                    <i className="bi bi-person-plus display-1 text-primary mb-3"></i>
                    <h1 className="mb-3">Create Account</h1>
                    <p className="text-muted mb-3">Join the ReWear community</p>
                </div>

                <Form onSubmit={handleSubmit} className="mb-4">
                    <Form.Group className="mb-3">
                        <Form.Label className="mb-2 text-primary">Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                            placeholder="Choose a username"
                            className="bg-light"
                            style={{
                                background: 'rgba(255, 255, 255, 0.9)'
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="mb-2 text-primary">Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                            placeholder="Enter your email"
                            className="bg-light"
                            style={{
                                background: 'rgba(255, 255, 255, 0.9)'
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="mb-2 text-primary">Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                            placeholder="Create a password"
                            className="bg-light"
                            style={{
                                background: 'rgba(255, 255, 255, 0.9)'
                            }}
                        />
                    </Form.Group>

                    {error && (
                        <div className="error-message text-center mb-3">
                            <i className="bi bi-exclamation-circle me-2"></i>
                            {error}
                        </div>
                    )}
                    
                    <Button 
                        variant="primary" 
                        type="submit" 
                        className="w-100 mb-3"
                        style={{
                            background: 'linear-gradient(135deg, var(--brand-color) 0%, var(--brand-secondary) 100%)',
                            border: 'none',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <i className="bi bi-person-plus me-2"></i>
                        Create Account
                    </Button>

                    <div className="text-center">
                        <p className="mb-0">
                            Already have an account?{' '}
                            <Link to="/login" className="link">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </Form>
            </div>

            <div className="footer-copyright">
                <div className="text-center">
                    <p className="mb-0">© 2025 ReWear. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Register;
