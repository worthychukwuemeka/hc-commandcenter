import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Customers from './Customers';
import { Link } from 'react-router-dom';

function CustomerDetails() {
    return (
        <div>
            <Sidebar />

            <Header />

            <main className="nxl-container">
                <div className="nxl-content">
                    <div className="page-header">
                        {/* Left section of the header containing the title and breadcrumb navigation */}
                        <div className="page-header-left d-flex align-items-center">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Customer Details</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link> {/* Link to the Dashboard page */}
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/orders">Customers</Link> {/* Link to the Orders page */}
                                </li>
                                <li className="breadcrumb-item">Customer Details</li> {/* Current page */}
                            </ul>
                        </div>

                        {/* Right section of the header containing action buttons and dropdowns */}
                        <div className="page-header-right ms-auto">
                            <div className="page-header-right-items">
                                {/* Mobile view back button */}
                                <div className="d-flex d-md-none">
                                    <a href="#" className="page-header-right-close-toggle">
                                        <i className="feather-arrow-left me-2"></i>
                                        <span>Back</span>
                                    </a>
                                </div>

                                {/* Action buttons and dropdown menus */}
                                <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                                    {/* Dropdown for additional options */}
                                    <div className="dropdown">
                                        <a
                                            className="btn btn-icon btn-light-brand"
                                            data-bs-toggle="dropdown"
                                            data-bs-offset="0, 10"
                                            data-bs-auto-close="outside"
                                            href="#"
                                        >
                                            <i className="feather-more-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="#" className="dropdown-item">
                                                <i className="feather-cast me-3"></i>
                                                <span>Export Customer Data</span>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item">
                                                <i className="feather-trash-2 me-3"></i>
                                                <span>Delete Customer Profile</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Dropdown for sharing options */}
                                    <div className="dropdown">
                                        <a
                                            href="#"
                                            className="btn btn-primary"
                                            data-bs-toggle="dropdown"
                                            data-bs-offset="0,11"
                                        >
                                            <i className="feather-share-2 me-2"></i>
                                            <span>Share</span>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-start">
                                            <li className="dropdown-divider"></li>
                                            <li>
                                                <a href="#" className="dropdown-item">
                                                    <i className="feather feather-link me-3"></i>
                                                    <span>Copy Link</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">
                                                    <i className="feather feather-grid me-3"></i>
                                                    <span>Share via QR</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">
                                                    <i className="feather feather-mail me-3"></i>
                                                    <span>Share via Email</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">
                                                    <i className="feather feather-message-square me-3"></i>
                                                    <span>Share via Message</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile view menu toggle button */}
                            <div className="d-md-none d-flex align-items-center">
                                <a href="#" className="page-header-right-open-toggle">
                                    <i className="feather-align-right fs-20"></i>
                                </a>
                            </div>


                        </div>
                    </div>

                    <div className="main-content">
                        {/* Container for the main content */}
                        <div className="row">
                            {/* Row for layout */}
                            <div className="col-xxl-4 col-xl-6">
                                {/* Column with responsive sizes */}
                                <div className="card stretch stretch-full">
                                    {/* Card component */}
                                    <div className="card-body">
                                        {/* Body of the card */}
                                        <div className="mb-4 text-center">
                                            {/* Container for profile image and user details */}
                                            <div className="wd-150 ht-150 mx-auto mb-3 position-relative">
                                                {/* Profile image container */}
                                                <div className="avatar-image wd-150 ht-150 border border-5 border-gray-3">
                                                    {/* Profile image */}
                                                    <img src="assets/images/avatar/1.png" alt="User Avatar" className="img-fluid" />
                                                </div>
                                                <div
                                                    className="wd-10 ht-10 text-success rounded-circle position-absolute translate-middle"
                                                    style={{ top: '76%', right: '10px' }}
                                                >
                                                    {/* Status indicator */}
                                                    <i className="bi bi-patch-check-fill"></i>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                {/* User name and email */}
                                                <a href="javascript:void(0);" className="fs-14 fw-bold d-block">Alexandra Della</a>
                                                <a href="javascript:void(0);" className="fs-12 fw-normal text-muted d-block">alex.della@outlook.com</a>
                                            </div>
                                            <div className="fs-12 fw-normal text-muted text-center d-flex flex-wrap gap-3 mb-4">
                                                {/* Stats section */}
                                                <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                                                    <h6 className="fs-15 fw-bolder">28.65K</h6>
                                                    <p className="fs-12 text-muted mb-0">Followers</p>
                                                </div>
                                                <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                                                    <h6 className="fs-15 fw-bolder">38.85K</h6>
                                                    <p className="fs-12 text-muted mb-0">Following</p>
                                                </div>
                                                <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                                                    <h6 className="fs-15 fw-bolder">43.67K</h6>
                                                    <p className="fs-12 text-muted mb-0">Engagement</p>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="list-unstyled mb-4">
                                            <li className="hstack justify-content-between mb-4">
                                                <span className="text-muted fw-medium hstack gap-3">
                                                    <i className="feather-map-pin"></i>Location
                                                </span>
                                                <a href="javascript:void(0);" className="float-end">California, USA</a>
                                            </li>
                                            <li className="hstack justify-content-between mb-4">
                                                <span className="text-muted fw-medium hstack gap-3">
                                                    <i className="feather-phone"></i>Phone
                                                </span>
                                                <a href="javascript:void(0);" className="float-end">+01 (375) 2589 645</a>
                                            </li>
                                            <li className="hstack justify-content-between mb-0">
                                                <span className="text-muted fw-medium hstack gap-3">
                                                    <i className="feather-mail"></i>Email
                                                </span>
                                                <a href="javascript:void(0);" className="float-end">alex.della@outlook.com</a>
                                            </li>
                                        </ul>
                                        {/* Action buttons */}
                                        <div className="d-flex gap-2 text-center pt-4">
                                            <a href="javascript:void(0);" className="w-50 btn btn-light-brand">
                                                <i className="feather-trash-2 me-2"></i>
                                                <span>Delete</span>
                                            </a>
                                            <a href="javascript:void(0);" className="w-50 btn btn-primary">
                                                <i className="feather-edit me-2"></i>
                                                <span>Edit Profile</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-8 col-xl-6">
                                <div className="card border-top-0">
                                    <div className="card-header p-0">
                                        <ul className="nav nav-tabs flex-wrap w-100 text-center customers-nav-tabs" id="myTab" role="tablist">
                                            {/* Overview Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link active"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#overviewTab"
                                                    role="tab"
                                                >
                                                    Overview
                                                </a>
                                            </li>
                                            {/* Billing Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#billingTab"
                                                    role="tab"
                                                >
                                                    Billing
                                                </a>
                                            </li>
                                            {/* Activity Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#activityTab"
                                                    role="tab"
                                                >
                                                    Activity
                                                </a>
                                            </li>
                                            
                                            
                                            {/* Security Tab */}
                                            <li className="nav-item flex-fill border-top" role="presentation">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="nav-link"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#securityTab"
                                                    role="tab"
                                                >
                                                    Security
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CustomerDetails