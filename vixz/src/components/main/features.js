import React from 'react'

export const Features = () => {
  return (
    <section class="feature section-padding" data-scroll-index='2'>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sectioner-header text-center">
              <h3>Funcionalidades</h3>
              <span class="line"></span>
              <p>Conheça algumas das nossas principais funcionalidades:</p>
            </div>
            <div class="section-content text-center">
              <div class="row">
                <div class="col-md-4 col-sm-12">
                  <div class="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                    <div class="media-body text-right media-right-margin">
                      <h5>Cursos</h5>
                      <p>Explore nossos cursos ministrados pelos melhores professores em diversas
                        áreas.</p>
                    </div>
                    <div class="media-right icon-border"> <span class="fa fa-book"
                        aria-hidden="true"></span> </div>
                  </div>
                  <div class="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                    <div class="media-body text-right media-right-margin">
                      <h5>Fóruns</h5>
                      <p>Um espaço de interação para discutir sobre diversos assuntos.</p>
                    </div>
                    <div class="media-right icon-border"> <span class="fa fa-users"
                        aria-hidden="true"></span> </div>
                  </div>
                  <div class="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                    <div class="media-body text-right media-right-margin">
                      <h5>Vagas de emprego</h5>
                      <p> Encontre vagas de emprego que combinem com suas habilidades e paixões.</p>
                    </div>
                    <div class="media-right icon-border"> <span class="fa fa-briefcase"
                        aria-hidden="true"></span> </div>
                  </div>
                </div>
                <div class="col-md-4 d-none d-md-block d-lg-block">
                  <div class="feature-mobile"> <img src="./images/Fórum.png" class="img-fluid wow fadeInUp"
                      id="sla" /> </div>
                </div>
                <div class="col-md-4 col-sm-12">
                  <div class="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                    <div class="media-left icon-border media-right-margin"> <span class="fa fa-file"
                        aria-hidden="true"></span> </div>
                    <div class="media-body text-left">
                      <h5>Currículo</h5>
                      <p>Crie, baixe e compartilhe seu curriculo com Vixz.</p>
                    </div>
                  </div>
                  <div class="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                    <div class="media-left icon-border media-right-margin"> <span
                        class="fa fa-dollar-sign" aria-hidden="true"></span> </div>
                    <div class="media-body text-left">
                      <h5>Acesso aos planos</h5>
                      <p>Três opções de planos para diversas necessidades. Encontre o plano ideal para
                        você!</p>
                    </div>
                  </div>
                  <div class="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                    <div class="media-left icon-border media-right-margin"> <span class="fa fa-comment"
                        aria-hidden="true"></span> </div>
                    <div class="media-body text-left">
                      <h5>Converse com recrutadores</h5>
                      <p>É possível conversar com diversos recrutadores através de nosso chat
                        integrado.</p>
                    </div>
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
