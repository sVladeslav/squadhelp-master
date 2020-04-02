import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import articles from './articles';

const RegistrationPage = (props) => {
    props.clearError();

    const renderArticles = articles.map((item, index) => (
      <div key={index}>
          <div className={styles.headerArticle}> {item.title}</div>
          <div className={styles.article}> {item.body} </div>
      </div>
    )
);

    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <Link to={'/'}><img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/></Link>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                <RegistrationForm />
            </div>
            <div className={styles.footer}>
                <div className={styles.articlesMainContainer}>
                    <div className={styles.ColumnContainer}>
                        {renderArticles}
                        <div className={styles.headerArticle}>I have other questions! How can I get in touch with
                            Squadhelp?
                        </div>
                        <div className={styles.article}>
                            Check out our <span className={styles.orangeSpan}>FAQs</span> or send us a <span
                            className={styles.orangeSpan}>message</span>. For assistance with launching a contest,
                            you can also call us at (877) 355-3585 or schedule a <span
                            className={styles.orangeSpan}>Branding Consultation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(RegistrationPage);