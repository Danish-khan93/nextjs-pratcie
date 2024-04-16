import React from 'react'
import { useForm } from 'react-hook-form'
const DynamicForm = () => {
  
    const {handleSubmit,control} = useForm({
        defaultValues:{

        }
    })
  
    return (
    <form noValidate> 
    
    </form>
  )
}

export default DynamicForm