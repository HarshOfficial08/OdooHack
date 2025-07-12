import React from 'react';

const TermsOfService = () => {
    return (
        <div className="page-content">
            <div className="container-fluid px-5">
                <h1 className="display-4 mb-4">Terms of Service</h1>
                
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title mb-4">1. Acceptance of Terms</h3>
                                <p className="mb-4">
                                    By using ReWear, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not use our platform.
                                </p>

                                <h3 className="card-title mb-4">2. User Responsibilities</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Maintain accurate account information
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Follow all platform rules
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Keep items in good condition
                                    </li>
                                </ul>

                                <h3 className="card-title mb-4">3. Intellectual Property</h3>
                                <p className="mb-4">
                                    All content on ReWear is protected by copyright. Users may not reproduce, distribute, or create derivative works without permission.
                                </p>

                                <h3 className="card-title mb-4">4. Dispute Resolution</h3>
                                <p className="mb-4">
                                    Any disputes arising from the use of ReWear will be resolved through good faith negotiation. If unresolved, disputes may be submitted to arbitration.
                                </p>

                                <h3 className="card-title mb-4">5. Changes to Terms</h3>
                                <p className="mb-4">
                                    We reserve the right to update these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance of the new terms.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Important Links</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <a href="/privacy-policy" className="text-primary">Privacy Policy</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/help" className="text-primary">Help Center</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="/contact" className="text-primary">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Last Updated</h3>
                                <p className="mb-0">July 12, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
