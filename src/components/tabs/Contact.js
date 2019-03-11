import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Typography, TextField  } from '@material-ui/core';

class Contact extends React.Component {
    renderTextField({
        input,
        label,
        ...custom
    }){
        return (
            <TextField
                label={label} 
                {...input}
                {...custom}
                margin="normal"
                variant="outlined"
            />
        );
    }

    render(){  
        return(
            <div>
                <Typography variant="h3" align="center" gutterBottom>
                    CONTACT
                </Typography>
                <br/>
                <form align="center">
                    <div>
                        <Field 
                            name="name" 
                            component={this.renderTextField}
                            label="Name" />
                    </div>
                    <div>
                        <Field 
                            name="email" 
                            component={this.renderTextField}
                            label="Email" />
                    </div>
                    <div>
                        <Field 
                            name="message" 
                            component={this.renderTextField}
                            label="Message"
                            multiline
                            rows={5} />
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'contactForm'
})(Contact);