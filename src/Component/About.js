import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import leave1 from './../images/leave1.png';
import leave2 from './../images/leave2.png';
import leave3 from './../images/leave3.png';
import leave4 from './../images/leave4.png';
import leave5 from './../images/leave5.png';
import leave6 from './../images/leave6.png';
import leave7 from './../images/leave7.png';
import leave8 from './../images/leave8.png';
import leave9 from './../images/leave9.png';

const About = () => {
    
    
    return (
    <div>
      <div class="container-xl">
        <br />
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={leave1} />
      </Card>
      <Card>
        <Card.Img variant="top" src={leave2} />
      </Card>
      <Card>
        <Card.Img variant="top" src={leave3} />
      </Card>
    </CardGroup>
    <br/>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={leave4} />
      </Card>
      <Card>
        <Card.Img variant="top" src={leave5} />
      </Card>
      <Card>
        <Card.Img variant="top" src={leave6} />
      </Card>
    </CardGroup>
    <br/>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={leave7} />
      </Card>
      <Card>
        <Card.Img variant="top" src={leave8} />
      </Card>
      <Card>
        <Card.Img variant="top" src={leave9} />
      </Card>
    </CardGroup>
    </div>
    </div>
    );
};

export default About;