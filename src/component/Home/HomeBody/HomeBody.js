import React from 'react';

import img from '../../../images/nandita.JPG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './HomeBody.css';


const HomeBody = () => {
    return (
     
            <div className="body container m-5">
                
                     <img src={img} alt="nandita"/>
                  
                        <h3>Nandita Mandal</h3>
                        <p> Web developer | Programmer </p>
                        <a href="https://github.com/nanditamandal/" target="_brand"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                        
                        <a href="https://www.facebook.com/profile.php?id=100008187674445" target="_brand"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>

                        <a href="https://www.linkedin.com/in/nandita-mandal/" target="_brand"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
               
               
            </div>
          
    );
};

export default HomeBody;