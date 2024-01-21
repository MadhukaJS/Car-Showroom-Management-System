import React from "react";
import Sidebar from "./VisitorSidebar";
import './visitorstyle.css';


export default function VisitorDashboard() {
  return (
    <div id="wrapper">
      <Sidebar />

      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light  topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button
              id="sidebarToggleTop"
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>


            {/* Topbar */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <h3></h3>
              </div>
            </form>
          </nav>

{/* ----------------------------------------- */}

          {/* Main Content */}
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Showroom Visitor Dashboard</h1>
            {/* Add your page content here */}
            <div className="d-flex justify-content-center align-items-center p-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">My Appointments</h5>
                            <p className="card-text">View my appointments</p>
                            <a href="/add-users" className="btn ">My appointments</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">My Profile</h5>
                            <p className="card-text">View My Profile.</p>
                            <a href="/view-users" className="btn ">Edit profile</a>
                        </div>
                    </div>
                </div>




          </div>
        </div>


{/* -------------------------- */}
        {/* Footer */}
        <footer className="sticky-footer ">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>MPS motor Traders &copy;2023</span>
            </div>
          </div>
        </footer>
      </div>

      
    </div>
  );
}
