import React from "react";
import './ownerstyle.css';

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar */}
      <ul
        className="navbar-nav sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/home"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            MPS Motors 
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

      

        <hr className="sidebar-divider" />

        <div className="sidebar-heading"></div>

        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-cog"></i>
            <span>View Bookings</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-wrench"></i>
            <span>My Advertisements</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading"></div>

        

        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Owner Profile</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Logout</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        
      </ul>
    </div>
  );
};

export default Sidebar;
