import React from 'react';
import { Typography, Grid, Divider} from '@material-ui/core';

import Spinner from '../Spinner';

const About = () => {
    return(
        <div>
            <Grid container >
                <Grid item xs style={{backgroundColor: 'grey'}}>
                    <Typography variant="h4" gutterBottom >
                        About
                    </Typography>
                </Grid>
            </Grid>
            <Divider variant="middle"/>
            <Grid container align="center" spaceing={24}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom >
                        Ben
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom >
                        Robert
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default About; 