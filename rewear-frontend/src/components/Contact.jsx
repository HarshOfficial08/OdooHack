import React from 'react';

const Contact = () => {
    return (
        <div className="page-content">
            <div className="container-fluid px-5">
                <h1 className="display-4 mb-4">Contact Us</h1>
                
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Get in Touch</h3>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="5" placeholder="Your message here..."></textarea>
                                    </div>
                                    <button type="submit" className="btn dashboard-btn w-100">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Contact Information</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-3">
                                        <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                                        123 Fashion Street, Style City, 12345
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-telephone-fill text-primary me-2"></i>
                                        +1 (555) 123-4567
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-envelope-fill text-primary me-2"></i>
                                        contact@rewear.com
                                    </li>
                                    <li>
                                        <i className="bi bi-clock-fill text-primary me-2"></i>
                                        Mon - Fri: 9 AM - 6 PM
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Social Media</h3>
                                <div className="d-flex gap-3">
                                    <a href="#" className="btn btn-outline-primary btn-sm">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-primary btn-sm">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-primary btn-sm">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#" className="btn btn-outline-primary btn-sm">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
