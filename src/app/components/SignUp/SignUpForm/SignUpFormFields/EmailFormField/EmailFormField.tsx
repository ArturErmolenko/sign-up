import React, { FC, memo } from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import classNames from 'classnames';
import { FormFieldType } from '../../../typedefs';
import styles from './EmailFormField.module.scss';

interface Props {
  isSubmitted: boolean;
}

const EmailFormField: FC<Props> = memo(({
  isSubmitted,
}) => {
  const [_, meta] = useField(FormFieldType.Email);

  const shouldShowErrorMessage = Boolean(meta.value.length) && isSubmitted;
  const hasInputValidationError = meta.touched && meta.error && isSubmitted && meta.value.length;
  const hasNotInputValidationError = meta.touched && !meta.error && isSubmitted && meta.value.length;

  return (
    <>
      <label htmlFor="email" className={styles.hidden}>Email</label>
      <Field
        id="email"
        name="email"
        type={FormFieldType.Email} 
        className={classNames(styles.input, {
          [styles.inputError]: hasInputValidationError,
          [styles.inputSuccess]: hasNotInputValidationError,
        })}
        placeholder="Email"
        required
      />

      {shouldShowErrorMessage && (
        <ErrorMessage
          name="email"
          component="p" 
          className={styles.errorMessage}
        />
      )}
    </>
  );
});

export default EmailFormField;
