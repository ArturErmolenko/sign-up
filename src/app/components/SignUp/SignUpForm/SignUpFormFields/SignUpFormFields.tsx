import React, { useState, FC, useCallback, memo } from 'react';
import EmailFormField from './EmailFormField/EmailFormField';
import PasswordFormField from './PasswordFormField/PasswordFormField';
import { FormikHelpers } from 'formik';
import { FormValues } from '../../typedefs';
import styles from './SignUpFormFields.module.scss';

interface Props {
  submitButtonClicked: boolean;
  shouldShowPassword: boolean;
  togglePasswordVisibility: () => void;
  setFieldValue: FormikHelpers<FormValues>['setFieldValue'];
  handlePasswordChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<FormValues>['setFieldValue']
  ) => void
}

const SignUpFormFields: FC<Props> = memo(({
  submitButtonClicked,
  shouldShowPassword,
  togglePasswordVisibility,
  setFieldValue,
  handlePasswordChange,
}) => {

const onPasswordChange = useCallback(
  (event: React.ChangeEvent<HTMLInputElement>) => 
    handlePasswordChange(event, setFieldValue),
  [handlePasswordChange, setFieldValue]
);

  return (
    <>
      <div className={styles.formField}>
        <EmailFormField isSubmitted ={submitButtonClicked} />
      </div>

      <div className={styles.formField}>
        <PasswordFormField 
          shouldShowPassword={shouldShowPassword}
          isSubmitted={submitButtonClicked}
          togglePasswordVisibility={togglePasswordVisibility}
          onPasswordChange={onPasswordChange}
        />
      </div>
    </>
  );
});

export default SignUpFormFields;
