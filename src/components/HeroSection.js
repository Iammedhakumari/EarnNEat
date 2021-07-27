import React from 'react';

import '../App.css';
//import { Button } from './Button';
import { Button } from "react-bootstrap";
import './HeroSection.css';
//import { createBrowserHistory as history} from 'history';

function HeroSection() {

 
  return (
    <div className='hero-container'>
            <h1>Hey Buddy </h1>
      <p>What are you looking for?</p>
      <div className='hero-btns'>
        
    
        <Button
        variant="primary" size="lg"
        style={{ background:"#0099ff", color:"#fff", fontSize:"20px" , fontWeight:"bold" }}
          onClick={event =>  window.location.href='/cardA'}
        >
          Need Work
        </Button>
      

        
      </div>
    </div>
  );
}

export default HeroSection;