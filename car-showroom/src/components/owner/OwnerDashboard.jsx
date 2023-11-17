import React from "react";
import Sidebar from "./OwnerSidebar";
import './ownerstyle.css';


export default function OwnerDashboard() {
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

{/* -------------------------------------------------------------------------------------------------- */}

          {/* Main Content */}
          <div className="container-fluid">
            <h1 className="h3 mb-4 text-gray-800">Car sale Owner Dashboard</h1>
            {/* Add your page content here */}
            <div className="d-flex justify-content-center align-items-center p-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add Advertisements</h5>
                            <p className="card-text">Add advertisements to webpage.</p>
                            <a href="/addads" className="btn ">Add Advertisements</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">View Bookings</h5>
                            <p className="card-text">View and manage bookings.</p>
                            <a href="/view-users" className="btn ">View Bookings</a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">My Advertisements</h5>
                            <p className="card-text">View and manage bookings.</p>
                            <a href="/view-users" className="btn ">My Advertisements</a>
                        </div>
                    </div>
                </div>




          </div>
        </div>


{/* -------------------------------------------------------------------------------------------- */}
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
