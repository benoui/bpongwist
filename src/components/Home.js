import React from 'react';

import IntroPhrase from './contents/IntroPhrase';
import WeatherDisplay from './weather/WeatherDisplay';

class Home extends React.Component {
    render(){
        return(
            <div>
                <WeatherDisplay />
                <IntroPhrase />
            </div>
        );
    }
}

export default Home;