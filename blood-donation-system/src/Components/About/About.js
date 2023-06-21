import React, { Component } from 'react';
import "./About.css";

class About extends Component {
    render() {
        return (
            <div>
                <section class="about-us">
    <div class="about">
       <img 
       src={require('./05.jpg')}  
       class="pic"
       alt='bbb'/>
      <div class="text">
        <h2>About Us</h2>
        <h5>Best <span>Blood</span> Bank</h5>
          <p>Best Blood Bank was founded by Syed Mahmoud Sobhani in 2016. He is one the successful 
            software engineer, entrepreneur and founder of Sobhani Group and Limited. This bank service
            allowed to deliver any blood at any emergency moment. Moreover, This website also built by
            him for the sake of helping people of Bangladesh.</p>
      </div>
    </div>
  </section>
            </div>
        );
    }
}

export default About;
