import {useState} from 'react'

/**USE MODAL DE LOGN */

const useModal = () => {

    const [IsOpenModal, setOpenModal] = useState(false)

    /**FUNCIONES OPEN MODAL DESDE HOME */

    const OpenModal = ()=> { 
        setOpenModal(true)
    }

    const CloseModal = ()=> {
        event.preventDefault()
        setOpenModal(false)

    }

    /**FUNCIONES OPEN FOTGOT PASSWORD DESDE LOGIN */
 
  return [IsOpenModal, OpenModal, CloseModal]
}

export default useModal