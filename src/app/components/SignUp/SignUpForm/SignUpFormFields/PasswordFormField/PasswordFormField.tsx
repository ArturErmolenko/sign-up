import React, { FC, memo } from 'react';
import { Field, useField } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import classNames from 'classnames';
import { FormFieldType } from '../../../typedefs';
import styles from './PasswordFormField.module.scss';

interface Props {
  shouldShowPassword: boolean;
  togglePasswordVisibility: () => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitted: boolean;
}

const PasswordFormField: FC<Props> = memo(({
  shouldShowPassword,
  togglePasswordVisibility,
  onPasswordChange,
  isSubmitted,
}) => {
  const [field, meta] = useField(FormFieldType.Password);
  
  const fieldType = shouldShowPassword
   ? FormFieldType.Text
   : FormFieldType.Password

   const hasInputValidationError = meta.touched && meta.error && isSubmitted;
   const hasNotInputValidationError = meta.touched && !meta.error && isSubmitted;

  const iconClassName = classNames(styles.icon, {
    [styles.iconError]: hasInputValidationError,
    [styles.iconSuccess]: hasNotInputValidationError,
  });

  const {
    value,
  } = field;

  return (
    <>
      <label htmlFor="password" className={styles.hidden}>Password</label>
        <Field
          id="password"
          name="password"
          type={fieldType}
          value={value}
          onChange={onPasswordChange}
          className={classNames(styles.input, {
            [styles.inputError]: hasInputValidationError,
            [styles.inputSuccess]: hasNotInputValidationError,
          })}
          required
          placeholder="Create your password"
        />
        <button
          type="button"
          className={styles.passwordToggleButton}
      
          onClick={togglePasswordVisibility}
        >
          {shouldShowPassword 
            ? <FaEye className={iconClassName} /> 
            : <FaEyeSlash className={iconClassName}  />
          }
        </button>
    </>
  );
});

export default PasswordFormField;
