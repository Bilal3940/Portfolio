import './index.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
  } from '@fortawesome/free-brands-svg-icons'
import logo from '../../images/icon-1.png'
import {Link, NavLink} from "react-router-dom";
import { useState } from 'react';
import Animatedletters from '../AnimatedLetters';
const Sidebar =()=>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray =['B','i','l','a','l'];
    return(
   <>
    <div className="nav-bar">
        <Link className="logo" to='/'> 
            <img className='logo-class' src={logo} alt="logo"/>
            <h4 className='logo-sub' ><Animatedletters letterClass={letterClass} idx={1} strArray={nameArray} /></h4>
        </Link>
        <nav>
            <NavLink  activeclassName="active" to="/">
                <FontAwesomeIcon color='#4d4d4c' icon={faHome}/>
            </NavLink>
            <NavLink exact="true" activeclassName="active" className='about-link' to="/about">
                <FontAwesomeIcon color='#4d4d4c' icon={faUser}/>
            </NavLink>
            <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon color='#4d4d4c' icon={faEnvelope}/>
            </NavLink>
            {/* <navLink exact="true" activeclassName="active" to="/">
                <FontAwesomeIcon color='#4d4d4c' icon={faHome}/>
            </navLink> */}

        </nav>
        <div className='sidebar'>
        <ul>
            <li>
                <a target="_blank" rel='nonreferrer' href='https://www.linkedin.com/in/bilal-javaid-a6964a247/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='nonreferrer' href='https://www.linkedin.com'>
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='nonreferrer' href='https://www.youtube.com/watch?v=u1C5nk7PRA8&ab_channel=grootleg'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='nonreferrer' href='https://www.youtube.com/c/MaazSafderWorld'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        </div>
    </div>
   </>
)}
export default Sidebar;
