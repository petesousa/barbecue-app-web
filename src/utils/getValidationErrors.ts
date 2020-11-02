import { ValidationError } from 'yup';

interface ValidationErrorWrapper {
  [key: string]: string;
}

export default function getValidateErrors(
  err: ValidationError,
): ValidationErrorWrapper {
  const validationErrors: ValidationErrorWrapper = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
