import React from 'react'

export const About = () => {
  return (
    <section className='pt-4'>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sectioner-header text-center">
              <h3>Sobre</h3>
              <span class="line"></span>
              <p>Um aplicativo de busca de vagas de emprego e cursos. Onde você expõe seu
                currículo para as empresas, e ainda com cursos disponíveis para melhorar suas chances de
                contratação!</p>
            </div>
            <div class="section-content text-center">
              <div class="row">
                <div class="col-md-4">
                  <div class="icon-box wow fadeInUp"> <i class="fa fa-life-ring"
                      aria-hidden="true"></i>
                    <h5>Vagas de emprego</h5>
                    <p>Tenha acesso a diversas vagas de emprego em um único lugar.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="icon-box wow fadeInUp" data-wow-delay="0.4s"> <i class="fa fa-mobile"
                      aria-hidden="true"></i>
                    <h5>Cursos</h5>
                    <p>Diversos cursos disponíveis para você adquirir ou aprimorar suas habilidades.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="icon-box wow fadeInUp" data-wow-delay="0.6s"> <i class="fa fa-bolt"
                      aria-hidden="true"></i>
                    <h5>Fóruns</h5>
                    <p>Alguma dúvida? Acesse um de nossos fóruns.
                    </p>
                  </div>
                </div>
              </div>
              <a href="https://www.pudim.com.br/" class="about-btn">Veja mais!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
