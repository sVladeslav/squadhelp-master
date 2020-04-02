import React from 'react';
import classNames from 'classnames';

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

export default FormInput;