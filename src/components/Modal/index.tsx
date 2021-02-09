import React, {  useState, forwardRef, useCallback, useImperativeHandle } from 'react';

export interface ModalHandles {
  handleModal: (e: string) => void
}

const Modal = forwardRef<ModalHandles>((props, ref) => {

  const [visible, setVisible] = useState(false)

  const handleModal = useCallback((e) => {

    alert(e)
    setVisible(!visible)
  },[visible])

  useImperativeHandle(ref, () => {
    return { 
      handleModal
    } 
  })

  if(!visible) return null

  return (
    <>
    <div>Eu sou um modal</div>
    <button type="button" onClick={handleModal}>fechar modal</button>
    </>
  );
})

export default Modal;