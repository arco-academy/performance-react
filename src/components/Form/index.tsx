import React, { useState, useCallback, FormEvent } from 'react';

import FormContext, { FieldProps } from './context'

interface InputValueProps {
  value: string
  name: string
}
interface FormProps {
  onSubmit: (data: InputValueProps[]) => void
}


const Form: React.FC<FormProps> = ({ children, onSubmit }) => {

  const [inputs, setInputs] = useState([] as FieldProps[])

  const registerField = useCallback((data: FieldProps) => {

    setInputs((oldState) => {

      return [...oldState, data]
    })

  },[])

  
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    const values = inputs.map(input => ({
      name: input.name,
      value: input.ref.value
    }))


    onSubmit(values)

    
  },[inputs, onSubmit])



  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider value={{ registerField }}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

export default Form;
