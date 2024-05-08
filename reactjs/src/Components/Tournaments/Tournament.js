import { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../../URL/url.js';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import './Tournament.css';
import '../Team/team.css';

export default function Tournament() {
    const [tournamentTeams, setTournamentTeams] = useState([]);
    const [tournament, setTournament] = useState(null);

    const { state } = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        console.log('state', state);
        if (state) {
            axios.post(url.tournament.particular, { tournament_id: state })
                .then(response => {
                    console.log('url.tournament.particular', response.data.Data);
                    if (response.data && response.data.Data)
                        setTournament(response.data.Data);
                })
                .catch(error => {
                    console.log(error);
                });

            axios.post(url.team.byTournament, { tournament_id: state })
                .then(response => {
                    console.log('url.team.byTournament', response.data.data);
                    if (response.data && response.data.data)
                        setTournamentTeams(response.data.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }

    }, [state]);

    if (!tournament) {
        return <div>Loading...</div>;
    }

    const handleAlert = (iconStatus, title) => {
        Swal.fire({
            title,
            text: 'Registration',
            icon: iconStatus,
            timer: 3000
        });
    };

    const registerTeam = () => {
        axios.post(url.tournament.registerTeam, {
            // captain_id: sessionStorage.getItem('currentUserId'), tournament_id: state
            captain_id: 12, tournament_id: state
        })
            .then(response => {
                console.log(response);
                handleAlert('success', 'successfully');
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 505 || error.response.status === 400)
                    handleAlert('error', error.response.data.message);
                // handleAlert('error', 'You are already registered for a tournament');
                else handleAlert('error', 'Failed');
            });
    }

    const applyDate = new Date(tournament.tournament_start_date);
    const endDate = new Date(tournament.tournament_end_date);

    return <>
        <i class="btn fa-solid fa-arrow-left fa-2xl mt-5 ms-4" onClick={() => navigate(-1)} style={{ color: '#ffffff' }}></i>
        <div className='contenar ps-5 pe-5 d-flex flex-column align-items-center'>
            <div className='text text-center'>
                <h1>Tournament Details</h1>
            </div>
            <div className=' container-fluid mt-5 d-flex flex-wrap justify-content-between maindiv'>
                <div className='maindiv-1 d-flex flex-column gap-3'>
                    <h3> Details</h3>
                    <div id='tournamentContent'>
                        <h6><b>Start</b> <br />{applyDate.toLocaleString("en", { weekday: "short" })}  {applyDate.getDate()}  {applyDate.getFullYear()}</h6>
                    </div>
                    <div id='tournamentContent'>
                        <h6><b>End</b> <br />{endDate.toLocaleString("en", { weekday: "short" })}  {endDate.getDate()}  {endDate.getFullYear()}</h6>
                    </div>
                    <div id='tournamentContent'>
                        <h6><b>Cost</b> <br />{tournament.tournament_fees}</h6>
                    </div>
                    <div id='tournamentContent'>
                        <h6><b>Team Limit</b> <br />{tournament.tournament_team_limit}</h6>
                    </div>
                </div>
                <div className='maindiv-1 d-flex flex-column gap-3'>
                    <h3> Organizer</h3>
                    <div id='tournamentContent'>
                        <h6><b>{tournament.Organizer.organizer_name}</b> <br /></h6>
                    </div>
                    <div id='tournamentContent'>
                        <h6><b>Phone</b> <br />{tournament.Organizer.mobile}</h6>
                    </div>
                    <div id='tournamentContent'>
                        <h6><b>Email</b> <br />{tournament.Organizer.email}</h6>
                    </div>
                </div>
                <div className='maindiv-1 d-flex flex-column gap-3'>
                    <h3> Venue</h3>
                    <div id='tournamentContent' >
                        <h6><b>{tournament.tournament_address.split(' ').slice(0, 1)} {tournament.tournament_address.split(' ').slice(1, 2)}</b></h6>
                    </div>
                    <div id='tournamentContent' className='d-flex flex-wrap'>
                        {tournament.tournament_address.split(' ').slice(2).map((word, index) => (
                            <p key={index}>{word}&nbsp;</p>
                        ))}
                    </div>
                    <div id='tournamentContent' >
                        <h6><b>Phone</b> <br />{tournament.Organizer.mobile}</h6>
                    </div>
                </div>
                <div className='maindiv-1 col-md-3 col-sm-2 '>
                    <img src={tournament.banner} alt='TournamentImage' width='100%' height='300px' />
                    <h4 className="text-center text-decoration-underline mt-3">{tournament.tournament_name}</h4>
                </div>
            </div>
            <button className='btn mt-4 btn-light ps-5 pe-5'>
                <p className='h5 text-dark' onClick={registerTeam}>Register</p>
            </button>
            <div id='sectionLine' className='mt-5 mb-4'></div>
            <div className='text-center'>
                <h2>About Match</h2>
                <div className='p-5'>
                    <h5>  as bus ferrying workers falls into ditch in Chhattisgarh.
                        'All his claims rejected': Amit Shah on court dismissing Arvind Kejriwal's plea.
                        India's Jagjit Pavadia re-elected to International Narcotics Control Board.
                        US envoy's message to those who want to see future: 'Come to India as bus ferrying workers falls into ditch in Chhattisgarh.
                        'All his claims rejected': Amit Shah on court dismissing Arvind Kejriwal's plea.
                        India's Jagjit Pavadia re-elected to International Narcotics Control Board.
                        US envoy's message to those who want to see future: 'Come to India
                    </h5>
                </div>
            </div>
            <div id='sectionLine' className='mt-5 mb-4'></div>
            <div className='text-center mt-3'>
                <h2 className='text-decoration-underline'>Tournament Teams</h2>
                <div className='container mt-4'>
                    {
                        tournamentTeams.length ?
                            <div className='container-fluid'>
                                <div className='d-flex gap-3' id="teamDetails">
                                    {
                                        tournamentTeams.map((team, index) => {
                                            return <>
                                                <div key={index} className='mt-4 card col-md-4 col-sm-2 bg-dark' id='tournamentTeam'>
                                                    <img src={team.Team.thumbnail} lassName="card-img-top" height='80%' alt='TeamImage' />
                                                    <div className="card-body">
                                                        <h6 className="card-title mt-2 text-light">{team.Team.team_name}</h6>
                                                        {/* <p className="card-text mt-2">{team.captain_name}</p> */}
                                                    </div>
                                                    <button className="btn btn-secondary" onClick={() => navigate('/teamDetails', { state: team.Team })} id="teamViewMore">View More</button>
                                                </div>
                                            </>
                                        })
                                    }
                                </div>
                            </div>
                            :
                            <div className='container'>No Teams</div>
                    }
                </div>
            </div>
        </div>
    </>
}
