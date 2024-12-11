import { TitleAndSubtitle } from "../titleAndSubtitle/titleAndSubtitle"
import {Option} from '../features/option'

export const Features = () => {
  return (
        <div className="flex flex-col md:flex-row justify-center bg-200 p-4">
          <div className="">
            <TitleAndSubtitle title="Funcionalidades" subtitle="Conheça algumas das nossas principais funcionalidades:"/>
            <div className="">
              <div className="flex flex-col md:flex-row">
                <div className=" md:w-4/12">
                  <Option title="Cursos" subtitle="Explore nossos cursos ministrados pelos melhores professores em diversas
                        áreas." icon="fa fa-book"/>
                  <Option title="Fóruns" subtitle="Um espaço de interação para discutir sobre diversos assuntos." icon="fa fa-book"/>
                  <Option title="Vagas de emprego" 
                  subtitle="Encontre vagas de emprego que combinem com suas habilidades e paixões." icon="fa fa-briefcase"/>
                </div>
                <div className="md:w-4/12 flex justify-center">
                  <div className="feature-mobile"> <img src="./images/Fórum.png" className="img-fluid wow fadeInUp"
                      id="sla" /> </div>
                </div>
                <div className="md:w-4/12">
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
  )
}
