import axios from "axios";
import { useEffect, useState } from "react"
import '../HomePage/homePage.css';
import { useNavigate } from "react-router-dom";
import URL from '../../URL/url.js';
import Footer from '../Footer.js';

export default () => {
    const [PlayerList, setPlayerList] = useState([]);

    useEffect(() => {
        axios.get(URL.player.all)
            .then(response => {
                console.log('response.data', response);
                setPlayerList(response.data.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    let navigate = useNavigate();

    return <>
        <div className="container-fluid d-flex flex-column align-items-center p-5">
            <div className='text text-center text-decoration-underline' id="playerContainer"> <h2>PLAYERS</h2></div>
            <div className="container mt-5 text-center d-flex justify-content-around flex-wrap gap-5 mt-3">
                {
                    PlayerList.map(player => {
                        return <>
                            <div className='card col-md-2 col-sm-2 bg-dark' id='player'>
                                <img src={player.image} className="card-img-top" style={{ height: '11rem' }} alt='Player' />
                                <div className="card-body">
                                    <h5 className="card-title text-nowrap " style={{ color: '#ffffff' }}>{player.first_name} {player.last_name}</h5>
                                    <p className="card-text">{player.SubCategory.category.type}</p>
                                    <button className="btn btn-outline-secondary" onClick={() => navigate('/PlayerProfile', { state: player })}>View More</button>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
            <div className="mt-5" id="sectionLine"></div>
            <Footer />
        </div>
    </>
}