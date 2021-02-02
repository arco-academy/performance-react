import React, { useState, useCallback } from 'react';

import FormContext, { FieldProps } from './context'

const Form: React.FC = ({ children }) => {

  const [, setInputs] = useState([] as FieldProps[])

  const registerField = useCallback((data: FieldProps) => {

    setInputs((oldState) => {

      return [...oldState, data]
    })

  },[])

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

export default Form;
