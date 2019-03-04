import React from 'react';
import { CircularProgress } from '@material-ui/core';

class Spinner extends React.Component {
    state = { completed: 0 };

    componentDidMount(){
        this.timer = setInterval(this.progress, 20);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };

    render(){
        return(
            <div align="center">
                <CircularProgress 
                    variant="determinate"
                    value={this.state.completed}
                />
            </div>
        );
    }
}

export default Spinner;