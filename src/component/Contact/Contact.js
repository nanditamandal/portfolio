import React from 'react';
import { useForm } from "react-hook-form";
import img from '../../images/nandita.JPG';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './Contact.css';
import Header from '../Home/Header/Header';
import Button from 'react-bootstrap/Button';
import file from '../../images/Nandita_Mandal_Resume.pdf';

const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const handelShowForm=()=>{
        console.log("clicked")
        document.getElementById("form").style.display = "block";
    


    }
    const handelOffFrom=()=>{
        console.log("off clicked")
        document.getElementById("form").style.display = "none";



    }


    return (
        <div className="contact container">
                <Header></Header>
                <div onClick={()=>{handelOffFrom()}}>
                        <img src={img} alt="nandita"/>
                        
                        <h3>Nandita Mandal</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ad. </p>
                        <a href="https://github.com/nanditamandal/" target="_brand"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
                        
                        <a href="https://www.facebook.com/profile.php?id=100008187674445" target="_brand"><FontAwesomeIcon icon={faFacebook} size="3x"/></a>

                        <a href="https://www.linkedin.com/in/nandita-mandal/" target="_brand"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>



                       
                </div>
                <div className="mt-5">
                <Button variant="outline-success" onClick={()=>{handelShowForm()}} >Send Massage</Button>{' '}
                <a href={file} download="Nandita_Mandal_Resume.pdf">
                <Button variant="danger">Download Resume</Button> 
                </a>
               
              
                </div>

            <div id="form" className="form">
            <form  onSubmit={handleSubmit(onSubmit)}>
                 <div className="form-group">
                      <input  name="name" className="form-control"   placeholder="Your name" ref={register({ required: true })}/>
                  </div>
                  <div>
                      
                    {errors.name && <span>name is required</span>}
                  </div>
                  <div className="form-group">
                      <input name="email" className="form-control" placeholder="email" ref={register({ required: true })}/>
                  </div>
                  <div>
                      
                    {errors.email && <span>email is required</span>}
                  </div>
                 
                  <div className="form-group">
                      <textarea name="message" className="form-control"  ref={register({ required: true })} id="" cols="30" rows="8" placeholder="Message *" ></textarea>
                  </div>
                  <div>
                      
                      {errors.message && <span>message is required</span>}
                    </div>
                   
               
                  <div className="form-group text-center">
                        <input type="submit" className="btn btn-dark"/>  
                  </div>
           
        </form>

            </div>
        
       
    </div>
    );
};

export default Contact;