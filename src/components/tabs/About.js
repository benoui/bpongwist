import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const About = () => {
    return(
        <div>
            <Grid container  spaceing={24}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h5" gutterBottom >
                        about ben
                    </Typography>
                    <Typography variant="h6" gutterBottom >
                        I am Attaphon Wiangwiset a junior web developer
                        based in Bangkok,Thailand  
                    </Typography>
                    <Typography variant="subheading" gutterBottom >
                        I enjoy coding and bulding web application. I have
                        quite a serious passion for UX and UI design, trying to
                        build the best for users. Learning is what i never give up. I am always keeping myself up to date.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    Image
                </Grid>
            </Grid>
        </div>
    );
};

export default About; 