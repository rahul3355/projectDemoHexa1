import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import world03 from './../images/world03.jpg';
import city3 from './../images/city3.jpg';
import world04 from './../images/world04.png';


const Home = () => {


    return (
        <div>


            
            
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={world04}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={world03}
          alt="Second slide"
        />

     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={city3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>

   
    <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Welcome to LMS</h1>
                    <p class="lead">Leave Management System</p>
                </div>
                
            </div>
            


        </div>
    );
};

export default Home;