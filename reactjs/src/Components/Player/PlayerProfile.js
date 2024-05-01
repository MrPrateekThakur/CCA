import './Player.css';

import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import url from '../../URL/url.js';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function PlayerProfile() {
    let { state } = useLocation();
    let navigate = useNavigate();

    let sendRequest = () => {
        // axios.post(url.player.sendRequest, { player_id: sessionStorage.getItem('currentUserId')})
        axios.post(url.player.sendRequest, { player_id: state, captain_Id: 10 })
            .then(response => {
                handleAlert('success', 'Send successfully');
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                handleAlert('error', 'Something wrong');
            });
    }

    function handleAlert(iconStatus, title) {
        Swal.fire({
            title,
            text: 'Request to add in a team',
            icon: iconStatus,
            timer: 3000
        });
    }

    console.log(state);
    return <>
        <div className='container-fluid p-4 text-light'>
            <i class="btn fa-solid fa-arrow-left fa-2xl mt-4 ms-4" onClick={() => navigate(-1)} style={{ color: '#ffffff' }}></i>
            <div className='text-center '>
                <h2 className='text-decoration-underline'>Player details</h2>
            </div>
            <div className='d-flex justify-content-around mt-5 flex-wrap'>
                <div id='PlayerProfileImage' className='col-md-4 d-flex flex-column align-items-center'>
                    <img src={state.image} width='80%' height='300rem' />
                    <h4 className='mt-2 text-center' style={{ color: '#c3c3c3' }}>{state.first_name} {state.last_name}</h4>
                    <div>
                        <p className='mt-3'><h5>Description :- </h5>
                            {state.description}
                        </p>
                    </div>
                </div>
                <div id="login-box" className='col-md-7 '>
                    <form>
                        <div id="user-box">
                            <label>Role</label>
                            <input type="text" name="role" value={state.SubCategory.category.type}></input>
                        </div>
                        <div id="user-box">
                            <label>Style</label>
                            <input type="text" name="Style" value={state.SubCategory.type}></input>
                        </div>
                        <div id="user-box">
                            <label>Height</label>
                            <input type="text" name="" value={state.height}></input>
                        </div>
                        <div id="user-box">
                            <label>Age</label>
                            <input type="text" name="" value={state.age}></input>
                        </div>
                        <div id="user-box">
                            <label>Number of match</label>
                            <input type="text" name="" value={state.no_of_matches}></input>
                        </div>
                        <div id="user-box">
                            <label>Availability</label>
                            <input type="text" name="" value={state.isActive ? 'Available' : 'Not Available'} />
                        </div>
                        <center>
                            <a onClick={sendRequest}>SEND REQUEST
                                <span></span>
                            </a>
                        </center>
                    </form>
                </div>
            </div>
        </div >
    </>
}