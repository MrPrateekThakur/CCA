import axios from "axios";
import { useEffect, useState } from "react"
import './homePage.css';
import { useNavigate } from "react-router-dom";
import URL from '../../URL/url.js';
import Players from "../Player/Players.js";

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
        <div className=' text-decoration-underline' id="playerContainer"> <h2>PLAYERS</h2></div>
        <div className="container text-center d-flex justify-content-around flex-wrap gap-5 mt-3">
            {
                PlayerList.slice(0, 8).map(player => {
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
        <button onClick={()=>navigate('/players')} className="btn btn-lg btn-outline-primary mt-3">Explore More</button>
    </>
}