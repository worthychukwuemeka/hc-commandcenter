import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard';

function Customers() {
  return (
    <div>{/* Start Sidebar */}
      <div>
        <Sidebar />
      </div>

      {/* Start Header */}
      <div>
        <Header />
      </div>

      <main className="nxl-container">
        <div className="nxl-content">
          {/* Breadcrumb */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Customers</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item">Customers</li>
              </ul>
            </div>
            <div className="page-header-right ms-auto">
              <div className="page-header-right-items">
                <div className="d-flex d-md-none">
                  <a href="javascript:void(0)" className="page-header-right-close-toggle">
                    <i className="feather-arrow-left me-2"></i>
                    <span>Back</span>
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                  <a href="javascript:void(0);" className="btn btn-icon btn-light-brand" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    <i className="feather-bar-chart"></i>
                  </a>
                  <div className="dropdown">
                    <a className="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                      <i className="feather-filter"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-map-pin me-3"></i>
                        <span>Sort by Address</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-clock me-3"></i>
                        <span>Sort by Time of Order</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-tag me-3"></i>
                        <span>Sort by Price</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-calendar me-3"></i>
                        <span>Sort by Date</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-star me-3"></i>
                        <span>Sort by Rating</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-list me-3"></i>
                        <span>Sort by Category</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-arrow-up-right me-3"></i>
                        <span>Sort Ascending</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-arrow-down-left me-3"></i>
                        <span>Sort Descending</span>
                      </a>
                    </div>

                  </div>
                  <div className="dropdown">
                    <a className="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                      <i className="feather feather-paperclip"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-file-text me-3"></i>
                        <span>Download data as PDF</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-file-text me-3"></i>
                        <span>Download data as CSV</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather feather-printer me-3"></i>
                        <span>Print</span>
                      </a>
                    </div>
                  </div>

                  <a href="invoice-create.html" className="btn btn-primary">
                    <i className="feather-plus me-2"></i>
                    <span>Create Invoice</span>
                  </a>
                </div>
              </div>
              <div className="d-md-none d-flex align-items-center">
                <a href="javascript:void(0)" className="page-header-right-open-toggle">
                  <i className="feather-align-right fs-20"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div id="collapseOne" className="accordion-collapse collapse page-header-collapse">
            <div className="accordion-body pb-2">
              <div className="row">
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-primary">
                        <i className="feather-users stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">245</h5>
                        <span>Total Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-success">
                        <i className="feather-check-circle stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">145</h5>
                        <span>Active Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-warning">
                        <i className="feather-clock stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">60</h5>
                        <span>Pending Verification</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-danger">
                        <i className="feather-x-circle stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">40</h5>
                        <span>Inactive Customers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-grey">
                        <i className="feather-user-x stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">0</h5>
                        <span>Suspended Accounts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-4">
                  <div className="card shadow-none border mb-4">
                    <div className="card-body text-center">
                      <div className="stat-circle stat-info">
                        <i className="feather-users stat-icon"></i>
                      </div>
                      <div className="mt-3">
                        <h5 className="mb-0">85</h5>
                        <span>New Signups This Month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><br />

          

        </div>
      </main>

    </div>
  )
}

export default Customers