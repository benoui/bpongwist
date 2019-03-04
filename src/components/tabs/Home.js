import React from 'react';

import WeatherDisplay from '../weather/WeatherDisplay';

class Home extends React.Component {
    render(){
        return(
            <div >
                <WeatherDisplay />
            </div>
        );
    }
}

export default Home;