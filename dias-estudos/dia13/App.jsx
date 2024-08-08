import React, { useCallback, useState } from 'react'
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm('nome');
  const sobrenome = useForm('sobrenome');

  function handleSubmit(event){
    event.preventDefault();
    if(cep.validate() && email.validate() && nome.validate()){
      console.log('Enviou.')  
    }else{
      console.log('Não enviou.')
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label='Nome' 
        id={'nome'}  
        type='text'
        
        {...nome}
      />
      <Input 
        label='Sobrenome' 
        id={'sobrenome'}  
        type='text'
         
        {...nome}
      />

      <Input 
        label='CEP' 
        id={'cep'}  
        type='text'
        placeholder='00000-000' 
        {...cep}
      />

      
      <Input 
        label='Email' 
        id={'email'}  
        type='text'
        placeholder='seuEmail@email.com' 
        {...email}
      />
      
      <button>Enviar</button>
      
    </form>
  )
}

export default App
