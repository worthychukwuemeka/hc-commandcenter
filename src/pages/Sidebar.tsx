import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';

function Sidebar() {
  return (
    <div>
      <nav className="nxl-navigation">
        <div className="navbar-wrapper">
          <div className="m-header">
            <Link to="/" className="b-brand">
              {/* ========   change your logo here   ============ */}
              <img src="assets/images/logo-full.png" alt="Logo" className="logo logo-lg" />
              <img src="assets/images/logo-abbr.png" alt="Logo" className="logo logo-sm" />
            </Link>
          </div>
          <div className="navbar-content">
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>Operations</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/dashboard" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-airplay"></i></span>
                  <span className="nxl-mtext">Dashboard</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/orders" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-truck"></i></span>
                  <span className="nxl-mtext">Orders</span>
                </Link>
              </li>
              {/*<li className="nxl-item nxl-hasmenu">
                <a href="javascript:void(0);" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-menu"></i></span>
                  <span className="nxl-mtext">Categories</span>
                  <span className="nxl-arrow"><RiArrowRightSLine /></span>
                </a>
                <ul className="nxl-submenu">
                  <li className="nxl-item"><a className="nxl-link" href="#">Restaurant</a></li>
                  <li className="nxl-item"><a className="nxl-link" href="#">Food type</a></li>
                </ul>
              </li>*/}
              <li className="nxl-item nxl-hasmenu">
                <Link to="/customers" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-users"></i></span>
                  <span className="nxl-mtext">Customers</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/vendors" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-home"></i></span>
                  <span className="nxl-mtext">Vendors</span>
                </Link>
              </li>
              <li className="nxl-item nxl-caption">
                <label>Administrations & Finance</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/reports" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-download-cloud"></i></span>
                  <span className="nxl-mtext">Reports</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/wallet" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-dollar-sign"></i></span>
                  <span className="nxl-mtext">Wallet</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/settings" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-settings"></i></span>
                  <span className="nxl-mtext">Settings</span>
                </Link>
              </li>
              <li className="nxl-item nxl-caption">
                <label>Logout</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/" className="nxl-link">
                  <span className="nxl-micon"><i className="feather-power"></i></span>
                  <span className="nxl-mtext">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
