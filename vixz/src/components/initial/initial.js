import React from 'react'

export const Initial = () => {
  return (
<section class="banner" data-scroll-index='0'>
      <div class="banner-overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <div class="banner-text">
                <h2 class="white">Vixz</h2>
                <h6 class="white"><strong>Emprego e estudos</strong> em um só lugar.</h6>
                <p class="banner-text white">Em busca da oportunidade dos seus sonhos? O Vixz é o seu
                  parceiro confiável
                  na jornada profissional, oferecendo uma experiência excepcional para impulsionar sua
                  carreira para novos patamares!</p>
                  <ul class="">
                    <li class="nav-item wow fadeInUp"> <a class="nav-link entrar" href="login.html">Entrar</a> </li>
                    <li class="nav-item wow fadeInUp"> <a class="nav-link cadastrar" href="cadastro.html">Cadastrar</a> </li>
                  </ul>
                <ul>
                  <li><a href="#"><img src="./images/appstore.png" class="wow fadeInUp"
                        data-wow-delay="0.4s" /></a></li>
                  <li><a href="#"><img src="./images/playstore.png" class="wow fadeInUp"
                        data-wow-delay="0.7s" /></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-12"> <img src="./images/Fórum.png" class="img-fluid wow fadeInUp" />
            </div>
          </div>
        </div>
      </div>
        {/* <span class="svg-wave"> <img class="svg-hero" src="images/applight-wave.svg"> </span> */}
    </section>
  )
}