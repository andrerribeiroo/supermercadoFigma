import React from 'react'
import "./Navbar.css"

const navbar = () => {
  return (
    <header>
        <nav>
            <img className="logo" src="logo.png" alt=""></img>
            <ul>
                <li><a href="/paginaproduto"><span class="material-symbols-outlined">account_circle</span>Tabela</a></li>
                
                <li><a href="/"> <span class="material-symbols-outlined">account_circle</span>Sair da conta</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default navbar
