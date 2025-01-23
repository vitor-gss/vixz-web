import React from 'react'
import { Link } from 'react-router-dom';

export const Initial = () => {
  return (
<section className="bg-purple-900" >
        <div className="p-5">
          <div className="flex flex-col md:flex-row items-center">
              <div className="text-white md:text-start">
                <h2 className="text-4xl md:text-6xl">Vixz</h2>
                <h6 className="text-xl"><strong>Emprego e estudos</strong> em um só lugar.</h6>
                <p className="text-lg md:w-3/5">Em busca da oportunidade dos seus sonhos? O Vixz é o seu
                  parceiro confiável
                  na jornada profissional, oferecendo uma experiência excepcional para impulsionar sua
                  carreira para novos patamares!</p>
                  <Link className='bg-purple-200 text-black rounded p-5 text-center' to="/login">Entrar</Link>
              </div>
            <div className="flex justify-center h-"> <img src="./images/Fórum.png"/></div>
          </div>
        </div>
    </section>
  )
}