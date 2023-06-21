import React, { Component } from 'react';
import Banner from '../Bannar/Banner';
import About from '../About/About';

class Home extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <About/>
            </div>
        );
    }
}

export default Home;
