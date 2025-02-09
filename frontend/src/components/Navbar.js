import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const token = localStorage.getItem("token");

        console.log("Stored Email : ", storedEmail);

        if (token && storedEmail) {
            setIsAuthenticated(true);
            setUserName(storedEmail);
        }
    }, []);

    const handleLogout = async () => {
        const userConfirmed = window.confirm(
            `Are you sure you want to Log Out, ${userName}?`
        );
        if (userConfirmed) {
            try {
                localStorage.removeItem("token");
                localStorage.removeItem("email"); // Changed from "userName" to "email"
                setIsAuthenticated(false);
                setUserName("");
                alert("Logged out successfully");
                console.log("User signed out");
                window.location.reload();
            } catch (error) {
                console.error("Error logging out:", error);
                alert("Error logging out");
            }
        } else {
            console.log("User canceled sign out");
        }
    };

    const userProfileBadge = userName.slice(0, 1);

    return (
        <nav class="navbar navbar-expand-lg bg-dark ">
            <div class="container-fluid">
                <Link to='/' className='text-decoration-none'>
                    <a class="navbar-brand text-warning fs-3" href="#">CompanY</a></Link>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav fs-5 mx-auto gap-lg-5 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' className='text-decoration-none'>
                                <a class="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/addEmployee' className='text-decoration-none'>
                                <a class="nav-link text-light" href="#">Add Employee</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/viewEmployee' className='text-decoration-none'>
                                <a class="nav-link text-light" href="#">View Employees</a>
                            </Link>
                        </li>
                    </ul>
                    <div className='col-md-3 text-center header-buttons-div mt-4 pe-lg-3 mt-lg-0 d-flex'>
                        <span className="me-2">
                            {isAuthenticated ? (
                                <div className="dropdown px-2">
                                        <p data-bs-toggle="dropdown" className="bg-warning dropdown-toggle border-secondary border fs-6 m-0 p-0 px-3 py-2 rounded-circle text-capitalize text-white fw-bold ">{userProfileBadge}</p>
                                    
                                    <ul className="dropdown-menu text-small shadow">
                                        <li><button className="dropdown-item" onClick={handleLogout} data-bs-dismiss="offcanvas" >Sign-Out</button></li>
                                    </ul>
                                </div>

                            ) : (
                                <Link to='/register' className='text-decoration-none'>
                                    <a class="btn btn-light text-dark fs-5 me-5 text-light" href="#">SignUp</a>
                                </Link>
                            )}
                        </span>

                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar