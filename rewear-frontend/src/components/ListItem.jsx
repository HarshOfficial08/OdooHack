import React from 'react';

const ListItem = () => {
    return (
        <div className="page-content">
            <div className="container-fluid px-5">
                <h1 className="display-4 mb-4">List an Item</h1>
                
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="alert alert-info">
                            <h3>Coming Soon</h3>
                            <p>Our item listing feature is currently under development. Stay tuned for updates!</p>
                            <p className="mb-0">In the meantime, you can:</p>
                            <ul className="list-unstyled mt-3">
                                <li><i className="bi bi-check-circle text-primary me-2"></i>Check our <Link to="/about">About Us</Link> page</li>
                                <li><i className="bi bi-check-circle text-primary me-2"></i>Visit our <Link to="/help">Help Center</Link></li>
                                <li><i className="bi bi-check-circle text-primary me-2"></i>Contact us at <Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
