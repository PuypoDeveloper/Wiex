import {useState} from 'react'

/**ACTIVAR INPUS LOGIN */

const useModalInput = () => {

    const [IsOpenInput, setOpenInput] = useState(false)


    const OpenInput = ()=> { 
        event.preventDefault()
        setOpenInput(true)
    }

 
  return [IsOpenInput, OpenInput]
}

export default useModalInput