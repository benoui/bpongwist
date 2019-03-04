import React from 'react';

import Greeting from './Greeting';
import WeatherDisplay from '../weather/WeatherDisplay';

class Home extends React.Component {
    render(){
        return(
            <div style={{backgroundColor: '#233C47'}}>
                <WeatherDisplay />
                <Greeting />
            </div>
        );
    }
}

export default Home;