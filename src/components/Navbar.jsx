import React from 'react'
import "./Navbar.css"

const navbar = () => {
  return (
    <header>
        <nav>
            <img className="logo" src="logo.png" alt=""></img>
            <ul>
                <li><a href="#">Tabela</a></li>
                <li><a href="/">Sair da conta</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default navbar
