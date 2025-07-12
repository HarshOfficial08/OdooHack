import React from 'react';

const Help = () => {
    return (
        <div className="page-content">
            <div className="container-fluid px-5">
                <h1 className="display-4 mb-4">Help Center</h1>
                
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title mb-4">Quick Links</h3>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-3">
                                        <a href="#how-it-works" className="nav-link text-dark">How It Works</a>
                                    </li>
                                    <li className="nav-item mb-3">
                                        <a href="#account" className="nav-link text-dark">Account & Profile</a>
                                    </li>
                                    <li className="nav-item mb-3">
                                        <a href="#listing" className="nav-link text-dark">Listing Items</a>
                                    </li>
                                    <li className="nav-item mb-3">
                                        <a href="#exchanging" className="nav-link text-dark">Exchanging Items</a>
                                    </li>
                                    <li className="nav-item mb-3">
                                        <a href="#shipping" className="nav-link text-dark">Shipping & Returns</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#faqs" className="nav-link text-dark">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h3 className="card-title mb-4">How It Works</h3>
                                <p className="mb-4">
                                    ReWear is simple to use. Follow these steps to get started:
                                </p>
                                <ol className="mb-4">
                                    <li>Sign up for an account</li>
                                    <li>List items you want to exchange</li>
                                    <li>Browse items from other users</li>
                                    <li>Make exchanges and rate your experience</li>
                                </ol>
                            </div>
                        </div>

                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h3 className="card-title mb-4">FAQs</h3>
                                <div className="accordion" id="help-accordion">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                                How do I list an item?
                                            </button>
                                        </h2>
                                        <div id="faq1" className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                To list an item, click the "List Item" button in the navigation menu. Fill out the required information and upload photos of your item. Once submitted, it will be reviewed and published within 24 hours.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                                What items can I exchange?
                                            </button>
                                        </h2>
                                        <div id="faq2" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                You can exchange clothing items in good condition. We do not accept items with stains, tears, or excessive wear.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                                How does shipping work?
                                            </button>
                                        </h2>
                                        <div id="faq3" className="accordion-collapse collapse">
                                            <div className="accordion-body">
                                                The sender is responsible for shipping the item. We recommend using insured shipping methods for valuable items.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
