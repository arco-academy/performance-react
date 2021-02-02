import { createContext } from 'react'

export interface FieldProps {
  name: string;
  ref: HTMLInputElement
}

interface FormContextProps {
  registerField(data: FieldProps): void
}

const FormContext = createContext({} as FormContextProps)

export default FormContext