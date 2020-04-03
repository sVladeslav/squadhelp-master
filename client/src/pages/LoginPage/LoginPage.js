import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {clearAuth, clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import Error from "../../components/Error/Error";

const LoginPage = (props) => {
    const {authClear, auth: {error}} = props;
    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to={'/'}><img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/></Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/registration' style={{textDecoration: 'none'}}><span>Signup</span></Link>
                    </div>
                </div>
                <div className={styles.loginFormContainer}>
                    <div className={styles.loginForm}>
                        <h2>LOGIN TO YOUR ACCOUNT</h2>
                        {error && <Error data={error.data} status={error.status} clearError={authClear}/>}
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = (state) => {
    const {auth} = state;
    return {auth};
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin()),
        authClear: () => dispatch(clearAuth())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);