import React, { InputHTMLAttributes, useContext, useEffect, useRef } from 'react';

import FormContext from '../Form/context'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
}

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { registerField } = useContext(FormContext)

  useEffect(() => {
    if(!inputRef.current) return;

    registerField({
      name,
      ref: inputRef.current
    })
  },[name, registerField])

  return <input ref={inputRef} {...props}/>;
}

export default Input;