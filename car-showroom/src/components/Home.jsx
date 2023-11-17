import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./style.css";

export default function Home() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              id="mps-logo"
              src=""
              alt="MPS mptors"
              draggable="false"
              height="30"
            />
           
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex align-items-center w-75 form-search">
              <div className="input-group">
                
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <a href="#!" className="text-white">
                <i className="fas fa-search ps-3"></i>
              </a>
            </form>

            <ul className="navbar-nav ms-3">
              {/* <li className="nav-item" style={{ width: "65px" }}> */}
                <a className="nav-link d-flex align-items-center" href="/login">
                  <button>Log In</button>
                </a>
                
                <a className="nav-link d-flex align-items-center" href="/registration">
                <button>Sign up</button>
                </a>
              {/* </li> */}
            </ul>
            
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}
      {/* ----------------- */}

      <Carousel>
        <div>
          <img
            src="https://www.toyota.lk/wp-content/uploads/2020/10/Trade-In-Web-Banner.jpg"
            alt="Image 1"
          />
        </div>
        {/* <div>
          <img src="https://assets.carpages.ca/dealersite/prod-wp-redline-auto-sales/uploads/2022/03/shutterstock_636632101__1_-scaled-1-e1668026364567.jpeg" alt="Image 2" />
        </div>
        <div>
          <img src="https://dragon2000-multisite.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/274/2022/04/19143130/hollins-hill-car-sales-home-hero-05.jpg" alt="Image 3" />
        </div> */}
        {/* Add more images as needed */}
      </Carousel>

        <div>
          <center>
        <h3>EXPLORE ADVERTISEMENTS</h3>
        </center>
        </div>

      <div className="d-flex flex-wrap justify-content-center align-items-center p-4">
        {/* Card 1 */}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg&ga=GA1.1.1744099774.1692098321&semt=sph"
              alt="Image 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">My Appointments</h5>
              <p className="card-text">View my appointments</p>
              <a href="/add-users" className="btn">
                My appointments
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/view-3d-car_23-2150796904.jpg?t=st=1698293842~exp=1698297442~hmac=7cf7dfef85ed0868c6fdc09913cd0490f0833e2a3896207eb1b7e1dfdf2512d1&w=740"
              alt="Image 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View My Profile.</p>
              <a href="/view-users" className="btn">
                Edit profile
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e"
              alt="Image 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View My Profile.</p>
              <a href="/view-users" className="btn">
                Edit profile
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <img src="image_url_4" alt="Image 4" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View My Profile.</p>
              <a href="/view-users" className="btn">
                Edit profile
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="image_url_1" alt="Image 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">My Appointments</h5>
              <p className="card-text">View my appointments</p>
              <a href="/add-users" className="btn">
                My appointments
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card">
            <img src="image_url_2" alt="Image 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View My Profile.</p>
              <a href="/view-users" className="btn">
                Edit profile
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card">
            <img src="image_url_3" alt="Image 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View My Profile.</p>
              <a href="/view-users" className="btn">
                Edit profile
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <img src="image_url_4" alt="Image 4" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View My Profile.</p>
              <a href="/view-users" className="btn">
                Edit profile
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
