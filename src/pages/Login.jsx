import React from 'react'
import "./Login.css"

const Componente = () => {
  return (

    <div className='container'>

      <div className='imagem'>
        <img src="image.png" alt="" />

        <div className='aba'>
          <h1>Seja Bem-Vindo</h1>
          <h2>Fazer login</h2>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit" href="/produto">Criar conta</button>
          </form>
        </div>
        
      </div>

    </div>

  )
}

export default Componente
