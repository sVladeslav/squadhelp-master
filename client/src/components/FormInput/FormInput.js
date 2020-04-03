import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormInput = (props) => {
    const {label, input, type, classInputStyle,
        classNotValid,classValid,
        classInputContainer,classWarningForContainer,
        meta: {touched, error}} = props;

    const classInput = classNames(classInputStyle,
            {[classNotValid]: touched && error,
            [classValid]: touched && !error }
        );

    return (
        <div className={classInputContainer}>
            <input {...input} placeholder={label} type={type}
                   className={classInput}/>
            {classWarningForContainer && (touched && (error && <span className={classWarningForContainer}>{error}</span>))}
        </div>
    )
};

FormInput.propTypes = {
    label: PropTypes.string,
    input: PropTypes.string,
    type: PropTypes.string,
    classInputStyle: PropTypes.any,
    classNotValid: PropTypes.any,
    classValid: PropTypes.any,
    classInputContainer: PropTypes.any,
    classWarningForContainer: PropTypes.any,
};

export default FormInput;