import React, { useCallback, useRef } from 'react';

import Form from '../../components/Form'
import Input from '../../components/Input'
import Modal, { ModalHandles } from '../../components/Modal'


const SignIn: React.FC = () => {
  const keep = useRef({ value: false })
  const modalRef = useRef<ModalHandles>(null)

  const handleSubmit = useCallback((e) => {
    console.log(e, keep.current.value)
  },[])

  const handleKeep = useCallback((e) => {
    if(!keep.current) return;

    const { value } = keep.current

    keep.current.value = !value
  },[])

  const openModal = useCallback(() => {
    modalRef.current?.handleModal('OLA MUNDO')
  },[])

  return (
  <div>
    <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
      <Input name="email" placeholder="email" />
      <Input name="password" placeholder="senha" />

      <button type="button" onClick={handleKeep}>Lembrar de mim</button>

      <br />

      <button type="submit" >Entrar</button>
    </Form>
      <button type="button" onClick={openModal}>modal</button>

      <br/>
    <Modal ref={modalRef}/>
  </div>
  );
}

export default SignIn;