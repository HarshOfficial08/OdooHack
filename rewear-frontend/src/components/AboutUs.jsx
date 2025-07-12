import React from 'react';

const AboutUs = () => {
    return (
        <div className="page-content">
            <div className="container-fluid px-5">
                <h1 className="display-4 mb-4">About ReWear</h1>
                
                <div className="row">
                    <div className="col-lg-8">
                        <p className="lead mb-4">
                            ReWear is a revolutionary platform that brings together fashion enthusiasts and sustainability advocates to create a better future for our planet. 
                            Our mission is to reduce textile waste and promote circular fashion through a seamless clothing exchange platform.
                        </p>

                        <h2 className="mb-4">Our Mission</h2>
                        <p className="mb-4">
                            We believe that fashion can be both beautiful and responsible. Through ReWear, we aim to:
                        </p>
                        
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        <strong>Reduce Waste:</strong> Extend the life of clothing items
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        <strong>Community:</strong> Connect fashion lovers
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        <strong>Sustainable:</strong> Promote eco-friendly practices
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        <strong>Accessible:</strong> Make fashion exchange easy
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="mt-5 mb-4">Our Story</h2>
                        <p className="mb-4">
                            ReWear was born from a simple observation - we have too many clothes we no longer wear, while others struggle to find unique pieces. 
                            Our platform bridges this gap, allowing users to exchange clothes they no longer need for items they'll love.
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Quick Facts</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <span className="text-primary fw-bold me-2">100,000+</span>
                                        Successful exchanges
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-primary fw-bold me-2">500,000+</span>
                                        Items listed
                                    </li>
                                    <li className="mb-3">
                                        <span className="text-primary fw-bold me-2">10,000+</span>
                                        Active members
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
