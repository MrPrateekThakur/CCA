import './App.css';

import axios from "axios";
import { useEffect, useState } from "react"

export default () => {
    const [PlayerList, setPlayerList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/player/viewAll")
            .then(response => {
                console.log('response.data', response);
                setPlayerList(response.data.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    console.log('PlayerList', PlayerList);
    return <>
        {/* <div className="container "><h1>Players</h1></div> */}
        <div className='text'> <h2 id="home-player">PLAYERS</h2></div>
        <div className="container text-center d-flex justify-content-around flex-wrap gap-5">
            {
                PlayerList?.map(player => {
                    return <>
                        <div className='card col-md-2 col-sm-2 bg-dark' id='player'>
                            <img src='assets/logo.png' alt='Player Image' />
                            <p>{player.first_name} : {player.last_name}</p>
                            <span>Batsman</span>
                        </div>
                    </>
                })
            }
        </div>
        {/* <div className="player">
             <div className='text'> <span id="home-player">PLAYERS</span></div>
        </div> */}
    </>
}
