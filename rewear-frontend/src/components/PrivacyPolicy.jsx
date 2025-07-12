import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="page-content">
            <div className="container-fluid px-5">
                <h1 className="display-4 mb-4">Privacy Policy</h1>
                
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title mb-4">1. Information We Collect</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Personal Information (name, email)
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Contact Information
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Usage Data
                                    </li>
                                </ul>

                                <h3 className="card-title mb-4">2. How We Use Your Information</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        To provide and maintain our service
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        To notify you about changes
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        To improve our service
                                    </li>
                                </ul>

                                <h3 className="card-title mb-4">3. Data Security</h3>
                                <p className="mb-4">
                                    We use industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                                </p>

                                <h3 className="card-title mb-4">4. Your Rights</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Right to access your data
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Right to correct information
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle text-primary me-2"></i>
                                        Right to delete information
                                    </li>
                                </ul>

                                <h3 className="card-title mb-4">5. Changes to Privacy Policy</h3>
                                <p className="mb-4">
                                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Contact Us</h3>
                                <p className="mb-4">
                                    If you have any questions about this Privacy Policy, please contact us at:
                                </p>
                                <p className="mb-0">
                                    privacy@rewear.com
                                </p>
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

export default PrivacyPolicy;
