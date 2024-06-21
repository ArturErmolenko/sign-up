import React, { FC, memo } from 'react';
import { PasswordCriteria } from '../../typedefs';
import classNames from 'classnames';
import styles from './ValidationMessage.module.scss';

interface Props {
  passwordCriteria: PasswordCriteria;
  isSubmited: boolean
}

const ValidationMessage: FC<Props> = memo(({
  passwordCriteria,
  isSubmited,
}) => {

  const {
    minLengthMet,
    uppercaseMet,
    numberMet
  } = passwordCriteria;

  const minLenghtValidationText = '8 characters or more (no spaces)';
  const upperCaseValidationText = 'Uppercase and lowercase letters';
  const digitValidationText = 'At least one digit';

  return (
    <>
      <div className={styles.validationMessages}>
        <div className={classNames(
          styles.validationMessage,
          {
            [styles.validationMessageError]: !minLengthMet && isSubmited,
            [styles.validationMessageSuccess]: minLengthMet
          }
        )}>
          {minLenghtValidationText}
        </div>

        <div className={classNames(
          styles.validationMessage,
          {
            [styles.validationMessageError]: !uppercaseMet && isSubmited,
            [styles.validationMessageSuccess]: uppercaseMet
          }
        )}>
          {upperCaseValidationText}
        </div>

        <div className={classNames(
          styles.validationMessage,
          {
            [styles.validationMessageError]: !numberMet && isSubmited,
            [styles.validationMessageSuccess]: numberMet
          }
        )}>
          {digitValidationText}
        </div>
    </div>

    {/* {message && (
      <div className={`${styles.formMessage} ${message === 'Sign up success' ? styles.success : styles.error}`}>
        {message}
      </div>
    )} */}
  </>
  );
});

export default ValidationMessage;
