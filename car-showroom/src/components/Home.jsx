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
              src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e"
              alt="Image 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in ullam iusto! Itaque sequi repudiandae impedit. Libero ipsum architecto voluptate quibusdam dolore reprehenderit voluptates molestiae sapiente, quod non temporibus esse..</p>
              <a href="/view-users" className="btn">
              Book a time for view
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
              <h5 className="card-title">car test2</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique, deserunt omnis laborum facere totam. Dignissimos laudantium, nisi culpa deserunt impedit minima doloremque incidunt similique quidem sapiente tempora officiis atque..</p>
              <a href="/view-users" className="btn">
                Book a time for view
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
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur in ullam iusto! Itaque sequi repudiandae impedit. Libero ipsum architecto voluptate quibusdam dolore reprehenderit voluptates molestiae sapiente, quod non temporibus esse..</p>
              <a href="/view-users" className="btn">
              Book a time for view
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <img src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e" alt="Image 4" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem ipsum .eque explicabo iure natus eaque saepe ex ut eum ipsam, quibusdam non nemo corrupti cupiditate adipisci voluptatibus eius iste, sint blanditiis magnam..</p>
              <a href="/view-users" className="btn">
              Book a time for view
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <img src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e" alt="Image 1" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere libero debitis fugit assumenda iure quae reprehenderit soluta suscipit blanditiis laborum, tenetur quo corrupti dolor dolore voluptas earum magnam harum odio.</p>
              <a href="/add-users" className="btn">
              Book a time for view
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="card">
            <img src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e" alt="Image 2" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eligendi culpa aliquid deleniti eos, quas pariatur id ad consectetur nam, dolor dicta omnis ipsam. Velit natus minus dolorem autem consequatur..</p>
              <a href="/view-users" className="btn">
              Book a time for view
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="card">
            <img src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e" alt="Image 3" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi temporibus sunt eveniet placeat earum minima possimus eius, debitis provident! Dolores maxime, eius amet omnis voluptatibus pariatur earum repudiandae. Modi, beatae?.</p>
              <a href="/view-users" className="btn">
              Book a time for view
              </a>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="card">
            <img src="https://img.freepik.com/free-photo/white-sport-sedan-with-colorful-tuning-road_114579-5044.jpg?w=996&t=st=1698294435~exp=1698295035~hmac=818ff762e044fd8dd9b9a237c615c6cdb90f3e201732838e08524094457d5d5e" alt="Image 4" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">car test1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur quam possimus voluptatibus, commodi porro eos adipisci alias ducimus voluptatem aliquid facilis odio excepturi beatae impedit hic molestias a temporibus..</p>
              <a href="/view-users" className="btn">
              Book a time for view
              </a>
            </div>
          </div>
        </div>

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
