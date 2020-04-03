import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearAuth, clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import articles from './articles';
import Error from "../../components/Error/Error";

class RegistrationPage extends React.Component {

    renderArticles = articles.map((item, index) => (
      <div key={index}>
          <div className={styles.headerArticle}> {item.title}</div>
          <div className={styles.article}> {item.body} </div>
      </div>
    )
);

    componentWillUnmount() {
        clearAuth();
    }

render()
    {
        // this.props.clearError();

        const { auth, authClear} = this.props;
        const {error} = auth;

        return (
                <div className={styles.signUpPage}>
                    <div className={styles.signUpContainer}>
                        <div className={styles.headerSignUpPage}>
                            <Link to={'/'}><img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/></Link>
                            <div className={styles.linkLoginContainer}>
                                <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                            </div>
                        </div>
                        <div className={styles.signUpFormContainer}>
                            <div className={styles.headerFormContainer}>
                                {error && <Error data={error.data} status={error.status} clearError={authClear}/>}

                                <h2>
                                    CREATE AN ACCOUNT
                                </h2>
                                <h4>
                                    We always keep your name and email address private.
                                </h4>
                            </div>
                            <RegistrationForm/>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.articlesMainContainer}>
                            <div className={styles.ColumnContainer}>
                                {this.renderArticles}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        initialValues: {
            role: CONSTANTS.CUSTOMER
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);