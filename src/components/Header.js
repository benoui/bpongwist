import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';

class Header extends React.Component {
    state = { value: 'home' };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render(){
        return(
            <AppBar position="static" style={{backgroundColor: '#373748'}}>
                <Tabs 
                    variant="fullWidth" 
                    value={this.state.value} 
                    onChange={this.handleChange}>
                    <Tab
                        value='home'
                        disableRipple
                        component={RouterLink}
                        to='/'
                        label="home">  
                    </Tab>
                    <Tab
                        value='about'
                        disableRipple
                        component={RouterLink}
                        to='/about'
                        label="About">
                    </Tab>
                    <Tab
                        value='work'
                        disableRipple
                        component={RouterLink}
                        to='/work'
                        label="Work">
                    </Tab>
                    <Tab
                        value='contact'
                        disableRipple
                        component={RouterLink}
                        to='/contact'
                        label="Contact">
                    </Tab>
                </Tabs>
            </AppBar>
        );
    }
}

export default Header;