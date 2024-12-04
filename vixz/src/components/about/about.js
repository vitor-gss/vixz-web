import React from 'react'

export const About = () => {
  return (
      <div className="pt-4 flex flex-row justify-center bg-slate-500 flex-1">
        <div className="">
          <div className="">
            <div className="">
              <h3>Sobre</h3>
              <span className="line"></span>
              <p className='pb-2 text-slate-500'>Um aplicativo de busca de vagas de emprego e cursos. Onde você expõe seu
                currículo para as empresas, e ainda com cursos disponíveis para melhorar suas chances de
                contratação!</p>
            </div>
            <div className="">
              <div className="flex flex-col md:flex-row justify-between gap-1">
                <div className="w-1/3">
                  <div className="icon-box wow fadeInUp"> <i className="fa fa-life-ring"
                      aria-hidden="true"></i>
                    <h5>Vagas de emprego</h5>
                    <p>Tenha acesso a diversas vagas de emprego em um único lugar.
                    </p>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.4s"> <i className="fa fa-mobile"
                      aria-hidden="true"></i>
                    <h5>Cursos</h5>
                    <p>Diversos cursos disponíveis para você adquirir ou aprimorar suas habilidades.
                    </p>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="icon-box wow fadeInUp" data-wow-delay="0.6s"> <i className="fa fa-bolt"
                      aria-hidden="true"></i>
                    <h5>Fóruns</h5>
                    <p>Alguma dúvida? Acesse um de nossos fóruns.
                    </p>
                  </div>
                </div>
              </div>
              <a href="" className="about-btn">Veja mais!</a>
            </div>
          </div>
        </div>
      </div>
  )
}
