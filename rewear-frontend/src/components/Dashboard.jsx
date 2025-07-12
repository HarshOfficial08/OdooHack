import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <Container fluid>
            <Row className="g-4">
                <Col xs={12}>
                    <div className="dashboard-card">
                        <h1>Welcome, {user.username}</h1>
                        
                        <Card className="mb-4">
                            <Card.Body>
                                <h2 className="mb-4">Your Profile</h2>
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
                                
                                <Button 
                                    variant="danger" 
                                    onClick={logout} 
                                    className="w-100"
                                >
                                    <i className="bi bi-box-arrow-right me-2"></i>
                                    Logout
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
