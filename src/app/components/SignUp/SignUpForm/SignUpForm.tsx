import React, { useState, FC, useCallback } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { initialFormValues, initialPasswordCriteria, validationSchema } from '../constants';
import { FormFieldType, FormValues, PasswordCriteria } from '../typedefs';
import SignUpFormFields from './SignUpFormFields/SignUpFormFields';
import SubmitButton from './SubmitButton/SubmitButton';
import ValidationMessage from './ValidationMessage/ValidationMessage';
import styles from './SignUpForm.module.scss';

const SignUpForm: FC = () => {
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState<PasswordCriteria>(initialPasswordCriteria);

  const handleSubmitButtonClick = useCallback(() => {
    setSubmitButtonClicked(true);
  }, [setSubmitButtonClicked]);

  const togglePasswordVisibility = useCallback(() => {
    setShouldShowPassword(!shouldShowPassword);
  }, [setShouldShowPassword, shouldShowPassword]);

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<FormValues>['setFieldValue']
  ) => {
    const password = event.target.value;

    setFieldValue(FormFieldType.Password, password);
    setPasswordCriteria({
      minLengthMet: password.length >= 8,
      maxLengthMet: password.length <= 64,
      uppercaseMet: /[A-Z]/.test(password),
      numberMet: /[0-9]/.test(password)
    });
  };

  const handleSubmit = (
    values: FormValues,
     { setSubmitting }:  FormikHelpers<FormValues>
    ) => {
    const isMinLengthMet = values.password.length >= 8;
    const isMaxLengthMet = values.password.length <= 64;
    const isUppercaseMet = /[A-Z]/.test(values.password);
    const isNumberMet = /[0-9]/.test(values.password);
  
    setPasswordCriteria({
      minLengthMet: isMinLengthMet,
      maxLengthMet: isMaxLengthMet,
      uppercaseMet: isUppercaseMet,
      numberMet: isNumberMet
    });

    const isValidFormInputs = isMinLengthMet && isMaxLengthMet && isUppercaseMet && isNumberMet;
  
    if (isValidFormInputs) {
      alert('Sign up success');
    } 

    setSubmitting(false);
  };

  return (
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <SignUpFormFields
              submitButtonClicked={submitButtonClicked}
              shouldShowPassword={shouldShowPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              setFieldValue={setFieldValue}
              handlePasswordChange={handlePasswordChange}
            />

              <ValidationMessage
                passwordCriteria={passwordCriteria}
                isSubmited={submitButtonClicked} 
              />


            <div className={styles.buttonContainer}>
              <SubmitButton onClick={handleSubmitButtonClick} />
            </div>
          </Form>
        )}
      </Formik>
  );
};

export default SignUpForm;
