import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap';
import 'bxslider/dist/jquery.bxslider.min.css';
import 'bxslider';
import scrollIt from 'scroll-it';
import { WOW } from 'wowjs';


function App() {
	useEffect(() => {
		// Inicializando o WOW.js
		const wow = new WOW();
		wow.init();
	
		// Funcionalidade do Video Popup
		$('#video-icon').on('click', function (e) {
		  e.preventDefault();
		  $('.video-popup').css('display', 'flex');
		  $('.iframe-src').slideDown();
		});
	
		$('.video-popup').on('click', function (e) {
		  var $target = e.target.nodeName;
		  var video_src = $(this).find('iframe').attr('src');
		  if ($target !== 'IFRAME') {
			$('.video-popup').fadeOut();
			$('.iframe-src').slideUp();
			$('.video-popup iframe').attr('src', ' ');
			$('.video-popup iframe').attr('src', video_src);
		  }
		});
	
		// Inicializando o bxSlider
		$('.slider').bxSlider({
		  pager: false,
		});
	
		// Mudança no logo e navegação ao rolar
		const handleScroll = () => {
		  var bodyScroll = $(window).scrollTop(),
			navbar = $('.navbar');
		  if (bodyScroll > 50) {
			$('.navbar-logo img').attr('src', 'vixz.png');
			navbar.addClass('nav-scroll');
		  } else {
			$('.navbar-logo img').attr('src', 'vixz.png');
			navbar.removeClass('nav-scroll');
		  }
		};
	
		$(window).on('scroll', handleScroll);
	
		// Configuração do scrollIt
		$(window).on('load', function () {
		  $.scrollIt({
			easing: 'swing',
			scrollTime: 900,
			activeClass: 'active',
			topOffset: -63,
		  });
		  handleScroll(); // Chama a função para inicializar o estado de rolagem
		});
	
		// Limpar os eventos quando o componente for desmontado
		return () => {
		  $(window).off('scroll', handleScroll);
		};
	  }, []);
  return (
    <div className="App">
     <nav class="navbar navbar-expand-lg">
		<div class="container">
			<a class="navbar-brand navbar-logo" href="#"> <img src="vixz.png" alt="logo" class="logo-1"/> </a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span
					class="fas fa-bars"></span> </button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"> <a class="nav-link" href="" data-scroll-nav="0">Inicial</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="1">Sobre</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="2">Funcionalidades</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="3">Equipe</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="4">Depoimentos</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#" data-scroll-nav="6">Contatos</a> </li>
				</ul>
			</div>
		</div>
	</nav>
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
								<li><a href="#"><img src="images/appstore.png" class="wow fadeInUp"
											data-wow-delay="0.4s" /></a></li>
								<li><a href="#"><img src="images/playstore.png" class="wow fadeInUp"
											data-wow-delay="0.7s" /></a></li>
							</ul>
						</div>
					</div>
					<div class="col-md-4 col-sm-12"> <img src="images/Fórum.png" class="img-fluid wow fadeInUp" />
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="about section-padding prelative" data-scroll-index='1'>
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
								<div class="icon-box wow fadeInUp" data-wow-delay="0.2s"> <i class="fa fa-life-ring"
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
						<a href="#" class="about-btn">Veja mais!</a>
					</div>
				</div>
			</div>
		</div>
	</section>

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
								<div class="feature-mobile"> <img src="images/Fórum.png" class="img-fluid wow fadeInUp"
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
										src="images/equipe/VITOR GABRIEL DA SILVA SANTOS.png" class="img-fluid" />
									<h4>Vitor Gabriel</h4>
									<p>Diretor de Operações</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="team-detail wow bounce" data-wow-delay="0.4s"> <img
										src="images/equipe/CATARINA PEIXOTO DA SILVA.jpg" class="img-fluid" />
									<h4>Catarina Peixoto</h4>
									<p>Diretora Administrativa</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="team-detail wow bounce" data-wow-delay="0.6s"> <img
										src="images/equipe/b.jpg" class="img-fluid" />
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

	<section class="testimonial section-padding" data-scroll-index='4'>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="sectioner-header text-center white">
						<h3>Depoimentos</h3>
					</div>

					<div class="section-content">
						<div class="row">
							<div class="offset-md-2 col-md-8 col-sm-12">
								<div class="slider">
									<div class="slider-item">
										<div class="test-img"><img
												src="images/Depoimentos/DAVID HENRIQUE DE SOUSA LIMA.png"
												alt="Placeholder" width="157" height="157"/></div>
										<div class="test-text"><span class="title"><span>David Henrique</span> Professor
												de
												Informática</span>
											Gostei bastante de todas as funcionalidades que o aplicativo oferece.</div>
									</div>
									<div class="slider-item">
										<div class="test-img"><img
												src="images/Depoimentos/EDEL ALEXANDRE SILVA PONTES - DIRETOR.jpg"
												alt="Placeholder" width="157" height="157"/></div>
										<div class="test-text"><span class="title"><span>Edel Pontes</span> Diretor
												Geral</span> Um aplicativo sensacional!  muito bom.</div>
									</div>
									<div class="slider-item">
										<div class="test-img"><img
												src="images/Depoimentos/MARCIO ROBERIO DA COSTA FERRO.jpg"
												alt="Placeholder" width="157" height="157"/></div>
										<div class="test-text"><span class="title"><span>Robério Ferro</span>
												Coordenador de Informática</span> O melhor aplicativo que já usei em
											toda a minha vida.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="contact section-padding" data-scroll-index='6'>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="sectioner-header text-center">
						<h3>Contatos</h3>
						<span class="line"></span>
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

	<section class="download section-padding">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="sectioner-header text-center white">
						<h3>Baixe nosso App</h3>
						<span class="line"></span>
					</div>
				</div>
				<div class="col-md-12">
					<div class="section-content text-center">
						<ul>
							<li><a href="#"><img src="images/appstore.png" class="wow fadeInUp"
										data-wow-delay="0.4s" /></a></li>
							<li><a href="#"><img src="images/playstore.png" class="wow fadeInUp"
										data-wow-delay="0.7s" /></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<footer class="footer-copy">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<p>2024 &copy; Vixz. Website desenvolvido por <a href="#" target="_blank" rel="dofollow">Vixz</a>
					</p>
				</div>
			</div>
		</div>
	</footer>

    </div>
	
  );
  
}

export default App;
