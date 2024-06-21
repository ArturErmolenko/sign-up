export interface PasswordCriteria {
  minLengthMet: boolean;
  maxLengthMet: boolean;
  uppercaseMet: boolean;
  numberMet: boolean;
}

export interface FormValues {
  email: string;
  password: string;
} 

export enum FormFieldType {
  Text = 'text',
  Password = 'password',
  Email = 'email'
}
