import * as Yup from 'yup';
import { FormValues, PasswordCriteria } from './typedefs';

export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password must be at most 64 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .required('Password is required')
  })


export const initialFormValues: FormValues = {
  email: '',
  password: '' 
}

export const initialPasswordCriteria: PasswordCriteria = {
  minLengthMet: false,
  maxLengthMet: true,
  uppercaseMet: false,
  numberMet: false
}
