import React, { createContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleSign from './googleSign.js';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import url from '../URL/url.js';

import '../App.css';

export const ProfileContext = createContext();

export default function SignUpForm() {
    const [currentPage, setCurrentPage] = useState(1);
    const [profile, setProfile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        password: '',
        first_name: '',
        last_name: '',
        age: '',
        height: '',
        address: '',
        gender: '',
        no_of_matches: '',
        image: '',
        description: '',
        subCategory_id: 0
    });

    useEffect(() => {
        axios.get(url.category.all)
            .then(response => {
                setCategories(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const fetchSubCategory = (category_id) => {
        axios.post(url.subCategory.byCategory, { category_id })
            .then(response => {
                setSubCategory(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const nextStep = () => setCurrentPage(currentPage + 1);
    const prevStep = () => setCurrentPage(currentPage - 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAlert = (iconStatus, title) => {
        Swal.fire({
            title,
            text: 'SignUp',
            icon: iconStatus,
            timer: 3000
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(profile);
        const updatedFormData = profile ?
            { ...formData, email: profile.email, first_name: profile.given_name, last_name: profile.family_name, image: profile.picture }
            :
            { ...formData, image: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1714302356~exp=1714302956~hmac=fd9dff0844f6c6523ff9d44704f7708e403b18006e19a90d0c407bf9c61a2483' };

        try {
            await axios.post(url.player.signup, updatedFormData);
            handleAlert('success', 'Successfully');
            navigate(-1);

        } catch (error) {
            handleAlert('error', 'Failed');
            console.log(error);
        }
    };

    return <>
        <div className="container pt-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-8">
                    <div className="border rounded p-4">
                        <div className="row justify-content-center align-items-center mb-4">
                            <div className="col-lg-6 text-center mb-lg-0 mb-3">
                                <img src="https://img.freepik.com/free-photo/miniature-figure-cricket-player-action-match-thailand-bangladesh_1057-35771.jpg?t=st=1712748729~exp=1712752329~hmac=4ce6f8e5f51c2bda97ddf8bf3e9d6b21cbb396c81af111dc47912dd1fdc1fd54&w=740"
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    {currentPage === 1 && (
                                        <div>
                                            <div className="d-flex flex-row align-items-center justify-content-center mb-3">
                                                <p className="lead fw-normal mb-0 me-3">Create Account</p>
                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>
                                                <ProfileContext.Provider value={{ profile, setProfile }}>
                                                    <GoogleSign />
                                                </ProfileContext.Provider>
                                            </div>
                                            <div className="divider d-flex align-items-center">
                                                <p className="text-center fw-bold mx-3">Or</p>
                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example3">Email</label>
                                                <input type="email" placeholder='Enter email address' onChange={handleChange} name='email' value={formData.email || (profile && profile.email)} className="form-control form-control-md" />                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                                <input onChange={handleChange} type="password" name='password' value={formData.password} className="form-control form-control-md"
                                                    placeholder="Enter password" />
                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example4">Re-Enter Password</label>
                                                <input type="password" name='password' value={formData.password} className="form-control form-control-md"
                                                    placeholder="Enter password" />
                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form3Example4">User</label>
                                                <select className="form-select" name='user' value={formData.user} onChange={handleChange} aria-label="Default select example">
                                                    <option style={{ color: '#000000' }} selected>Select Option</option>
                                                    <option style={{ color: '#000000' }} value="player">Player</option>
                                                    <option style={{ color: '#000000' }} value="organizer">Organizer</option>
                                                </select>
                                            </div>
                                            <button className="btn btn-outline-primary mt-3 ml-5" onClick={nextStep}>Next</button>
                                        </div>
                                    )}
                                    {currentPage === 2 && (
                                        <div className='mt-4'>
                                            <div className="form-outline">
                                                <label className="form-label">First Name</label>
                                                <input onChange={handleChange} value={(profile && profile.given_name) || formData.first_name} name='first_name' type="text" className="form-control form-control-md"
                                                    placeholder="Enter your first name" />
                                            </div>
                                            <div className="form-outline mt-2">
                                                <label className="form-label">Last Name</label>
                                                <input onChange={handleChange} value={(profile && profile.family_name) || formData.last_name} name='last_name' type="text" className="form-control form-control-md"
                                                    placeholder="Enter your last name" />
                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label">Age</label>
                                                <input onChange={handleChange} value={formData.age} name='age' type="text" className="form-control form-control-md"
                                                    placeholder="Enter your age" />
                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label">Gender</label>
                                                <select className="form-select" value={formData.gender} onChange={handleChange} name='gender' aria-label="Default select example">
                                                    <option style={{ color: '#000000' }} value="" disabled>Select Gender</option>
                                                    <option style={{ color: '#000000' }} value="male">Male</option>
                                                    <option style={{ color: '#000000' }} value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="form-outline mt-2">
                                                <label className="form-label">Mobile No.</label>
                                                <input type="text" onChange={handleChange} value={formData.mobile} name='mobile' className="form-control form-control-md"
                                                    placeholder="Enter your mobile number" />
                                            </div>
                                            <button className="btn btn-outline-primary mt-3 me-2" onClick={prevStep}>Previous</button>
                                            <button className="btn btn-outline-primary mt-3" onClick={nextStep}>Next</button>
                                        </div>
                                    )}
                                    {currentPage === 3 && (
                                        <div className='mt-4'>
                                            <div className="form-outline">
                                                <label className="form-label">Height (in inches)</label>
                                                <input onChange={handleChange} value={formData.height} name='height' type="number" className="form-control form-control-md"
                                                    placeholder="Enter your height" />
                                            </div>
                                            <div className="form-outline" data-mdb-input-init>
                                                <label className="form-label" htmlFor="textAreaExample">Address</label>
                                                <textarea onChange={handleChange} value={formData.address} name='address' className="form-control" id="textAreaExample" rows="3"></textarea>
                                            </div>
                                            <div className="form-outline row justify-content-between" data-mdb-input-init>
                                                <button className="btn btn-outline-primary mt-3 me-2" onClick={prevStep}>Previous</button>
                                                <button className="btn btn-outline-primary mt-3" onClick={nextStep}>Next</button>
                                            </div>
                                        </div>
                                    )}
                                    {currentPage === 4 && (
                                        <div className='mt-4'>
                                            <div className="form-outline mt-2">
                                                <label className="form-label">No. of Matches</label>
                                                <input onChange={handleChange} name='no_of_matches' value={formData.no_of_matches} type="text" className="form-control form-control-md"
                                                    placeholder="Enter your matches" />
                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label">Category</label>
                                                <select className="form-select" onChange={(e) => {
                                                    fetchSubCategory(e.target.value);
                                                    handleChange(e);
                                                }} name='category' aria-label="Default select example">
                                                    <option style={{ color: '#000000' }} value="" disabled>Select Category</option>
                                                    {categories.map((category) => (
                                                        <option style={{ color: '#000000' }} key={category.category_id} value={category.category_id}>{category.role}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-outline">
                                                <label className="form-label">Sub-Category</label>
                                                <select className="form-select" value={formData.subCategory_id} onClick={(e) => handleChange(e)} name='subCategory_id' aria-label="Default select example">
                                                    <option style={{ color: '#000000' }} value="" disabled>Select Sub-Category</option>
                                                    {
                                                        subCategory.map((subCategory) => (
                                                            <option style={{ color: '#000000' }} key={subCategory.subCategory_id} value={subCategory.subCategory_id}>{subCategory.style}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-outline" data-mdb-input-init>
                                                <label className="form-label" htmlFor="textAreaExample">Description</label>
                                                <textarea onChange={handleChange} value={formData.description} name='description' className="form-control" id="textAreaExample" rows="3"></textarea>
                                            </div>
                                            <button className="btn btn-outline-primary mt-3 me-2" onClick={prevStep}>Previous</button>
                                            <button className="btn btn-outline-primary mt-3" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    )}
                                </div>
                                <div className="text-center mt-3">
                                    <p className=" fw-bold">Already have an account? <Link to='/signIn' className="link-danger">Log In</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}