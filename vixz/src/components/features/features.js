import { TitleAndSubtitle } from "../titleAndSubtitle/titleAndSubtitle"
import {Option} from '../features/option'

export const Features = () => {
  return (
    <section className="feature section-padding" data-scroll-index='2'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TitleAndSubtitle title="Funcionalidades" subtitle="Conheça algumas das nossas principais funcionalidades:"/>
            <div className="section-content text-center">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <Option title="Cursos" subtitle="Explore nossos cursos ministrados pelos melhores professores em diversas
                        áreas." icon="fa fa-book"/>
                  <Option title="Fóruns" subtitle="Um espaço de interação para discutir sobre diversos assuntos." icon="fa fa-book"/>
                  <Option title="Vagas de emprego" 
                  subtitle="Encontre vagas de emprego que combinem com suas habilidades e paixões." icon="fa fa-briefcase"/>
                </div>
                <div className="col-md-4 d-none d-md-block d-lg-block">
                  <div className="feature-mobile"> <img src="./images/Fórum.png" className="img-fluid wow fadeInUp"
                      id="sla" /> </div>
                </div>
                <div className="col-md-4 col-sm-12">
                <Option title="Currículo" 
                  subtitle="Crie, baixe e compartilhe seu curriculo com Vixz." icon="fa fa-file"/>
                <Option title="Acesso aos planos" 
                  subtitle="Três opções de planos para diversas necessidades. Encontre o plano ideal para
                  você!" icon="fa fa-dollar-sign"/>
                <Option title="Converse com recrutadores" 
                  subtitle="É possível conversar com diversos recrutadores através de nosso chat
                  integrado." icon="fa fa-comment"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
