import React from "react"

export const Contacts = () => {
  return (
    <section class="contact section-padding" data-scroll-index='6'>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sectioner-header text-center">
              <h3>Contatos</h3>
              <span class="line"></span>
              {/* <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem
                faucibus,
                vestibulum ante in, pharetra ante.</p> */}
            </div>
            <div class="section-content">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-8">
                  <form id="contact_form" action="http://localhost:3000/salvar" method="post">
                    <div class="row">
                      <div class="col">
                        <input type="text" id="your_name" class="form-input w-100" name="nome"
                          placeholder="Nome Completo"  required/>
                      </div>
                      <div class="col">
                        <input type="email" id="email" class="form-input w-100" name="email"
                          placeholder="E-mail" required/>
                      </div>
                    </div>
                    <input type="text" id="subject" class="form-input w-100" name="subject"
                      placeholder="Título"/>
                    <textarea class="form-input w-100" id="message" placeholder="Mensagem"
                      name="message"></textarea>
                    <button class="btn-grad w-100 text-uppercase" type="submit"
                      name="button">Enviar</button>
                  </form>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <div class="contact-info white">
                    <div class="contact-item media"> <i
                        class="fa fa-map-marker-alt media-left media-right-margin"></i>
                      <div class="media-body">
                        <p class="text-uppercase">Endereço</p>
                        <p class="text-uppercase">Rio Largo, Brasil</p>
                      </div>
                    </div>
                    <div class="contact-item media"> <i
                        class="fa fa-mobile media-left media-right-margin"></i>
                      <div class="media-body">
                        <p class="text-uppercase">Telefone</p>
                        <p class="text-uppercase"><a class="text-white"
                            href="tel:+5582998765432">(82) 99876-5432</a> </p>
                      </div>
                    </div>
                    <div class="contact-item media"> <i
                        class="fa fa-envelope media-left media-right-margin"></i>
                      <div class="media-body">
                        <p class="text-uppercase">E-mail</p>
                        <p class="text-uppercase"><a class="text-white"
                            href="contato.vixz@vixz.com">contato.vixz@vixz.com</a> </p>
                      </div>
                    </div>
                    <div class="contact-item media"> <i
                        class="fa fa-clock media-left media-right-margin"></i>
                      <div class="media-body">
                        <p class="text-uppercase">Horário de trabalho</p>
                        <p class="text-uppercase">Seg-Sex, 09:00 - 16:00</p>
                      </div>
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