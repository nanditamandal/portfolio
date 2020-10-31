import { Button } from 'bootstrap';
import React from 'react';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const ProjectDetails = (props) => {
    const { name, details, img, github, LiveLink }=props.project;

    return (
       
        <Card className="col-md-4 mb-5 text-center " >
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {details}
            </Card.Text>
            <Card.Footer>
            <a href={github} target="_brand"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
            <a href={LiveLink} target="_brand"><FontAwesomeIcon icon={faExternalLinkAlt} size="3x"/></a>
        
            </Card.Footer>
        
        </Card.Body>
        </Card>
  
    );
};

export default ProjectDetails;