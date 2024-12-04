import React from "react"

export const OurTeam = () => {
  return (
<section class="team section-padding" data-scroll-index='3'>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sectioner-header text-center">
              <h3>Nossa equipe</h3>
              <span class="line"></span>
              <p>Conheça nossa equipe de profissionais qualificados.</p>
            </div>
            <div class="section-content text-center">
              <div class="row">
                <div class="col-md-4">
                  <div class="team-detail wow bounce" data-wow-delay="0.2s"> <img
                      src="./images/equipe/VITOR GABRIEL DA SILVA SANTOS.png" class="img-fluid" />
                    <h4>Vitor Gabriel</h4>
                    <p>Diretor de Operações</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="team-detail wow bounce" data-wow-delay="0.4s"> <img
                      src="./images/equipe/CATARINA PEIXOTO DA SILVA.jpg" class="img-fluid" />
                    <h4>Catarina Peixoto</h4>
                    <p>Diretora Administrativa</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="team-detail wow bounce" data-wow-delay="0.6s"> <img
                      src="./images/equipe/b.jpg" class="img-fluid" />
                    <h4>Darline Diany</h4>
                    <p>Desenvolvedora Sênior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}