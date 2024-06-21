import React, { FC, memo } from 'react';
import { useFormikContext } from 'formik';
import styles from "./SubmitButton.module.scss"

interface Props {
  onClick: () => void;
}

const SubmitButton: FC<Props> = memo(({
  onClick,
}) => {
  const { isSubmitting } = useFormikContext();
  const buttonText = 'Sign up';

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      onClick={onClick}
      className={styles.submitButton}
    >
      {buttonText}
    </button>
  );
});

export default SubmitButton;
