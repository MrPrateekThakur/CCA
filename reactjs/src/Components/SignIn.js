import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import url from '../URL/url.js';
import '../App.css';

export default function () {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [user, setUser] = useState('');

    let navigate = useNavigate();

    let signIn = () => {
        axios.post(url[user].signin, { email, password })
            .then(response => {
                console.log('signin', response.data);
                sessionStorage.setItem('IsLoggedIn', 'true');
                sessionStorage.setItem('currentUserEmail', email);
                sessionStorage.setItem('currentUser', user);
                sessionStorage.setItem('currentUserId', response.data.data.player_id);
                handleAlert('success', 'Successfully');
                navigate('/');
            })
            .catch(error => {
                handleAlert('error', 'failed');
                alert('Sign in failed.....');
                console.log(error);
            });
    }

    function handleAlert(iconStatus, title) {
        Swal.fire({
            title,
            text: 'SignUp',
            icon: iconStatus,
            timer: 3000
        });
    }

    return (
        <>
            <div className="container-fluid p-5" id='container1'>
                <div className="mx-auto d-flex justify-content-center align-items-center " id='mainDiv'>
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
                            className="img-fluid" alt="Sample image" id='signImg' />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-3 mb-3">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal ms-5 me-3">Sign In with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fa-brands fa-google" style={{ color: "#ffffff" }}></i>
                                </button>
                            </div>
                            <div className="divider d-flex align-items-center ">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" onKeyUp={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                <input type="password" id="form3Example4" onKeyUp={(event) => setPassword(event.target.value)} className="form-control form-control-lg"
                                    placeholder="Enter password" />
                            </div>
                            <select className="form-select mb-2" aria-label="Default select example" onClick={(event) => setUser(event.target.value)}>
                                <option selected>Select Option</option>
                                <option style={{ color: '#000000' }} value="player">Player</option>
                                <option style={{ color: '#000000' }} value="organizer">Organizer</option>
                                <option style={{ color: '#000000' }} value="admin">Admin</option>
                            </select>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <Link to="#!" className="text-body">Forgot password?</Link>
                            </div>
                            <div className="text-center text-lg-start ps-5 mt-4 pt-2">
                                <button type="button" className="btn btn-primary ms-4 btn-lg" onClick={signIn} style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>SUBMIT</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signUp"
                                    className="link-danger">Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>
                <div>
                    <Link to="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#!" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link to="#!" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="#!" className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                </div>
            </div> */}
        </>
    );
}