import { HashLink } from 'react-router-hash-link';
import '../App.css';

export default function footer() {
    return <>
        <div id="footer" className='mb-5'>
            <div id="container"></div>
            <div id="footer-content">
                <img src='assets/logo.png' id='logo' alt='logo' />
                <div id="footer-list">
                    <HashLink id='footer-list-content' className='text-decoration-none' to='/'>HOME</HashLink>
                    <HashLink id='footer-list-content' className='text-decoration-none' to='/#AboutContainer'>ABOUT</HashLink>
                    <HashLink id='footer-list-content' className='text-decoration-none' to='/#playerContainer'>PLAYER</HashLink>
                    <HashLink id='footer-list-content' className='text-decoration-none' to='/#tournamentContainer'>TOURNAMENT</HashLink>
                    <HashLink id='footer-list-content' className='text-decoration-none' to='/teams'>TEAM</HashLink>
                    <HashLink id='footer-list-content' className='text-decoration-none' to='/#contactUs'>CONTACT US</HashLink>
                </div>
                <div id="social-media text-center">
                    <ul>
                        <li class="item">
                            <a href="#">
                                <i class="fa-brands fa-instagram icon"></i>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#">
                                <i class="fa-brands fa-facebook icon"></i>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#">
                                <i class="fa-brands fa-whatsapp icon"></i>
                            </a>
                        </li>
                        <li class="item">
                            <a href="#">
                                <i class="fa-brands fa-phone icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}