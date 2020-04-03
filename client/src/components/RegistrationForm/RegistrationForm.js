import React from 'react';
import Error from '../Error/Error';
import {connect} from "react-redux";
import {authActionRegister, clearAuth} from '../../actions/actionCreator';
import {Redirect} from 'react-router-dom';
import styles from './RegistrationForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';


class RegistrationForm extends React.Component {




    registrationUser = (values) => {
        this.props.register({
            firstName: values.firstName,
            lastName: values.lastName,
            displayName: values.displayName,
            email: values.email,
            password: values.password,
            role: values.role
        });
    };

    classNameStyle = {
        classInputStyle: styles.input,
        classNotValid:  styles.notValid,
        classValid:  styles.valid,
        classInputContainer:styles.inputContainer,
        classWarningForContainer: styles.fieldWarning,
    };

    render() {
        const {handleSubmit, submitting} = this.props;
        return (

                <form onSubmit={handleSubmit(this.registrationUser)}>

        <div className={styles.row}>
                        <Field
                            name='firstName'
                            {...this.classNameStyle}
                            component={FormInput}
                            type='text'
                            label='First name'
                        />
                        <Field
                            name='lastName'
                            {...this.classNameStyle}
                            component={FormInput}
                            type='text'
                            label='Last name'
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name='displayName'
                            {...this.classNameStyle}
                            component={FormInput}
                            type='text'
                            label='Display Name'
                        />
                        <Field
                            name='email'
                            {...this.classNameStyle}
                            component={FormInput}
                            type='text'
                            label='Email Address'
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name='password'
                            {...this.classNameStyle}
                            component={FormInput}
                            type='password'
                            label='Password'
                        />
                        <Field
                            name='confirmPassword'
                            {...this.classNameStyle}
                            component={FormInput}
                            type='password'
                            label='Password confirmation'
                        />
                    </div>
                    <div className={styles.choseRoleContainer}>
                        <Field name='role' type='radio' value={CONSTANTS.CUSTOMER} strRole='Join As a Buyer'
                               infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                               component={RoleInput} id={CONSTANTS.CUSTOMER}/>
                        <Field name='role' type='radio' value={CONSTANTS.CREATOR} strRole='Join As a Creative'
                               infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                               component={RoleInput} id={CONSTANTS.CREATOR}/>
                    </div>
                    <div className={styles.termsOfService}>
                        <Field
                            name='agreeOfTerms'
                            classes={{
                                container: styles.termsOfService,
                                warning: styles.fieldWarning
                            }}
                            id='termsOfService'
                            component={AgreeTermOfServiceInput}
                            type='checkbox'
                        />

                    </div>
                    <button type='submit' disabled={submitting} className={styles.submitContainer}>
                        <span className={styles.inscription}>Create Account</span>
                    </button>
                </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        register: (data) => dispatch(authActionRegister(data)),
    }
);


export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate: customValidator(Schems.RegistrationSchem)
})(RegistrationForm));