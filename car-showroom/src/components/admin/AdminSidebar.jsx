import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';



const Sidebar =() =>{

   
   

    const navigate = useNavigate();

  

    

    



    return(
        <>
            {/* <!-- Vertical Navbar --> */}
            <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-dark bg-dark border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                <div class="container-fluid">
                    {/* <!-- Toggler --> */}
                    <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- Brand --> */}
                          
                    {/* <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/parent"><img className='alogo' src={`${ReactAppUrl}/img/susipwin logo.jpg`} alt="logo" /></a> */}
                    {/* <!-- User menu (mobile) --> */}
                    <div class="navbar-user d-lg-none">
                        {/* <!-- Dropdown --> */}
                        <div class="dropdown">
                            {/* <!-- Toggle --> */}
                            <a href="#s" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div class="avatar-parent-child">
                                    <img alt="Placeholder" 
                                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" 
                                        class="avatar avatar- rounded-circle" />
                                    <span class="avatar-child avatar-badge bg-success"></span>
                                </div>
                            </a>
                            {/* <!-- Menu --> */}
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                <a href="#s" class="dropdown-item">Profile</a>
                                <a href="#s" class="dropdown-item">Settings</a>
                                <a href="#s" class="dropdown-item">Billing</a>
                                <hr class="dropdown-divider" />
                                <a href="#s" class="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!-- Collapse --> */}
                    <div class="collapse navbar-collapse" id="sidebarCollapse">
                        {/* <!-- Navigation --> */}
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/studashboard">
                                    <i class="bi bi-house"></i> Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Profile">
                                <i class='bx bx-user'></i> Profile
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/classeslist">
                                <i class="bi bi-book-half"></i> Classes
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/attendance">
                                <i class="bi bi-cash-stack"></i> Attendance
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/mypayments">
                                <i class="bi bi-cash-stack"></i> My payments
                                </a>
                            </li>

                            
                            

                        </ul>
                        {/* <!-- Divider --> */}
                        <hr class="navbar-divider my-5 opacity-20" />
                        



                        {/* <!-- Push content down --> */}
                        <div class="mt-auto"></div>
                        {/* <!-- User (md) --> */}
                        <ul class="navbar-nav">
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#s">
                                    <i class="bi bi-person-square"></i> Account
                                </a>
                            </li> */}
                            <li class="nav-item">
                               
                                {/* <a class="nav-link" href="#s">
                                    <i class="bi bi-box-arrow-left"></i> Logout
                                </a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    

        </>
    )
}

export default Sidebar;