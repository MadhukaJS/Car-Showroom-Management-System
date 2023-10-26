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
              id="MDB-logo"
              src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
              alt="MDB Logo"
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
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a
                  className="nav-link active d-flex align-items-center"
                  aria-current="page"
                  href="#"
                >
                  <i className="fas fa-bars pe-2"></i>Menu
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center w-100 form-search">
              <div className="input-group">
                <button
                  className="btn btn-light dropdown-toggle shadow-0"
                  type="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  style={{ paddingBottom: "0.4rem" }}
                >
                  All
                </button>
                <ul className="dropdown-menu dropdown-menu-dark fa-ul">
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search"></i>
                      </span>
                      All
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-film"></i>
                      </span>
                      Titles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-tv"></i>
                      </span>
                      TV Episodes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-user-friends"></i>
                      </span>
                      Celebs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-building"></i>
                      </span>
                      Companies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-key"></i>
                      </span>
                      Keywords
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <span className="fa-li pe-2">
                        <i className="fas fa-search-plus"></i>
                      </span>
                      Advanced search
                      <i className="fas fa-chevron-right ps-2"></i>
                    </a>
                  </li>
                </ul>
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
              <li className="nav-item me-3">
                <a className="nav-link d-flex align-items-center" href="#!">
                  IMDbPro
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center me-3"
                  href="#!"
                >
                  <i className="fas fa-bookmark pe-2"></i> Watchlist
                </a>
              </li>
              <li className="nav-item" style={{ width: "65px" }}>
                <a className="nav-link d-flex align-items-center" href="#!">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Navbar --> */}
      {/* ----------------- */}

      <Carousel>
        <div>
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-sale-promotion-facebook-cover-banner-design-template-904fb96ddd27f584e4da597e920ef22d_screen.jpg?ts=1630013522"
            alt="Image 1"
          />
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
        </div>
        {/* Add more images as needed */}
      </Carousel>

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
        {/* Repeat the above structure for more cards */}
      </div>
    </div>
  );
}
