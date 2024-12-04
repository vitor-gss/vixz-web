import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand navbar-logo" href="#"> <img src="images/vixz.png" alt="logo" class="logo-1"/> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span
            class="fas fa-bars"></span> </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"> <a class="nav-link" href="" data-scroll-nav="0">Inicial</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="1">Sobre</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="2">Funcionalidades</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="3">Equipe</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="4">Depoimentos</a> </li>
            <li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="6">Contatos</a> </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
