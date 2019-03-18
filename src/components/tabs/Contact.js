import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Typography, TextField, Button } from '@material-ui/core';
import { EmailOutlined } from '@material-ui/icons';

class Contact extends React.Component {
    renderTextField = ({
        input,
        meta: {touched, error},
        label,
        ...custom
    }) => {
        return (
            <div >
                <TextField
                    label={label}
                    {...custom}
                    {...input}
                    margin="normal"
                    variant="outlined"
                    helperText={touched ? error : ''}
                />
            </div>
        );
    }

    onSubmit(formValues) {
    }

    render() {
        return (
            <div>
                <Typography variant="h3" align="center" gutterBottom>
                    CONTACT
                </Typography>
                <br />
                <form align="center" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
                            multiline={true}
                            rows={4} />
                    </div>
                    <div>
                        <Button type="submit" variant="outlined" color="primary"  >
                            SUBMIT  
                            <EmailOutlined />
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {}
    const requiredFields = [
        'name',
        'email'
    ]
    requiredFields.forEach(field => {
        if (!formValues[field]) {
            errors[field] = `Please fill out your ${field}`
        }
    })
    return errors
};

export default reduxForm({
    form: 'contactForm',
    validate
})(Contact);