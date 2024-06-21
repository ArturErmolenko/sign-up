"use client";
import React, { FC } from 'react';
import styles from './SignUp.module.scss';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h2 className={styles.title}>Sign Up</h2>
        <SignUpForm />
    </div>
  </div>
);

export default SignUp;
