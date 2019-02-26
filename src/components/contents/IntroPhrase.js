import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';

const IntroPhrase = () => {
    return(
        <div>
            <div>
                <Typography variant="h5" align="center">
                    Hi,
                </Typography>
                <br/>
                <Typography variant="h5" align="center">
                    I'm Ben. Junior front-end web developer and
                </Typography>
                <br/>
                <Typography variant="h5" align="center" gutterBottom>
                    I'm Robert. Full-stack web developer.
                </Typography>
            </div>
            <div align="center" >
                <Button variant="outlined" >
                    view our work
                    <KeyboardArrowRight/>
                </Button>
            </div>
        </div>
    );
};

export default IntroPhrase;