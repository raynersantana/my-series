import React, {useState} from 'react'

const NovoGenero = () => {
  return (
    <div classNameName='container'>
      <h1>Novo Gênero</h1>
      <form>
        <div className='form-group'>
          <label for='name'>Nome</label>
          <input type='text' className='form-control' id='name' placeholder='Nome do Gênero' />
        </div>
      </form>
    </div>
  )
}

export default NovoGenero