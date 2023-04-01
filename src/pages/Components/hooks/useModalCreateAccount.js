import {useState} from 'react'

/**USE MODAL DE LOGN */

const useModalCreateAccount = () => {

    const [IsOpenModal, setOpenModal] = useState(false)

    /**FUNCIONES OPEN MODAL DESDE HOME */

    const OpenModal = ()=> { 
        event.preventDefault()
        setOpenModal(true)
    }

    const CloseModal = ()=> {
        event.preventDefault()
        setOpenModal(false)

    }

    /**FUNCIONES OPEN FOTGOT PASSWORD DESDE LOGIN */
 
  return [IsOpenModal, OpenModal, CloseModal]
}

export default useModalCreateAccount