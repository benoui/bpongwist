import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { fetchWeather } from '../../actions';


class WeatherDisplay extends React.Component {
    componentDidMount(){
        if(this.props.weather.length === 0){
            return this.props.fetchWeather('bangkok');
        }
        return
    }

    renderWeather(cityData){
        const name = cityData.name;
        const cityWeather = cityData.weather.map(weather => weather.main);

        return(
            <div key={name}>
                <Typography variant="h3" align="center">
                    {cityWeather}
                </Typography>
                <br/>
                <Typography variant="body1" align="center">
                    {name}
                </Typography>
            </div>
        );

    }

    render(){
        if (!this.props.weather) {
            return <div>Loading...</div>;
        }
        return(
            <div>
                {this.props.weather.map(this.renderWeather)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.openWeather
    }
};

export default connect(mapStateToProps, {fetchWeather})(WeatherDisplay);