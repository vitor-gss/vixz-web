import React from 'react'
import { Card } from './Card'
import { TitleAndSubtitle } from '../titleAndSubtitle/TitleAndSubtitle'

export const About = () => {
  return (
      <div className="bg-gray-50 flex justify-center p-4">
        <div className="">
          <div className="">
            <TitleAndSubtitle title='Sobre' subtitle='Um aplicativo de busca de vagas de emprego e cursos. Onde você expõe seu
                currículo para as empresas, e ainda com cursos disponíveis para melhorar suas chances de
                contratação!'/>
            <div className=""> 
              <div className="flex justify-between flex-col md:flex-row items-center md:items-baseline"> {/* Cards*/}
                <Card icon="fa fa-life-ring" title="Vagas" description="As melhores vagas de emprego em um só lugar"/>
                <Card icon="fa fa-mobile" title="Cursos" description="Diversos cursos disponíveis para você adquirir ou aprimorar suas habilidades."/>
                <Card icon="fa fa-bolt" title="Fóruns" description="Alguma dúvida? Acesse um de nossos fóruns."/>
              </div>
              <a href="" className="about-btn">Veja mais!</a>
            </div>
          </div>
        </div>
      </div>
  )
}
