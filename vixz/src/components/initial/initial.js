import React from 'react'

export const Initial = () => {
  return (
<section className="banner" >
      <div className="">
        <div className="px-5">
          <div className="flex flex-col md:flex-row items-center">
              <div className="banner-text md:text-start">
                <h2 className="white text-4xl md:text-6xl">Vixz</h2>
                <h6 className="white text-xl"><strong>Emprego e estudos</strong> em um só lugar.</h6>
                <p className="banner-text white text-lg md:w-3/5">Em busca da oportunidade dos seus sonhos? O Vixz é o seu
                  parceiro confiável
                  na jornada profissional, oferecendo uma experiência excepcional para impulsionar sua
                  carreira para novos patamares!</p>
                  <ul className="">
                    <li className="nav-item wow fadeInUpx"> <a className="nav-link entrar" href="login.html">Entrar</a> </li>
                    <li className="nav-item wow fadeInUp"> <a className="nav-link cadastrar" href="cadastro.html">Cadastrar</a> </li>
                  </ul>
                <ul>
                  <li><a href="#"><img src="./images/appstore.png" className="wow fadeInUp"
                        data-wow-delay="0.4s" /></a></li>
                  <li><a href="#"><img src="./images/playstore.png" className="wow fadeInUp"
                        data-wow-delay="0.7s" /></a></li>
                </ul>
              </div>
            <div className="flex justify-center h-"> <img src="./images/Fórum.png"/>
            </div>
          </div>
        </div>
      </div>
        {/* <span class="svg-wave"> <img class="svg-hero" src="images/applight-wave.svg"> </span> */}
    </section>
  )
}