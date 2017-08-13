import { ErrorMessages } from './../../../shared/error-messages';

export const FormErrorMessages = [
  new ErrorMessages('username', 'required', 'Benutzername muss angegeben werden'),
  new ErrorMessages('username', 'maxlength', 'Der Benutzername darf maximal 150 Zeichen haben'),
  new ErrorMessages('password', 'required', 'Password muss angegeben werden'),
  new ErrorMessages('password', 'maxlength', 'Password darf maximal 128 Zeichen haben')
]
