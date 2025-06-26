import React, { useState, useEffect } from "react"; 
import Logo from "../assets/logo.svg";
import HeroRectangleOne from "../assets/HeroRectangleOne.svg";
import HeroRectangleTwo from "../assets/rectangleTwo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import Flor from "../assets/flor.svg";
import ProfileImageOne from "../assets/Images/Bombardino-Crocodilo.jpeg";
import ProfileImageTwo from "../assets/Images/Bailarina-Cappuccina.jpeg";
import Check from "../assets/check.svg";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import TestimonialCard from "../componentes/TestimonialsCard";
import Button from "../componentes/button";
import Card from "../componentes/card";
import Contato from "../componentes/contato"; 

import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/footer.css";
import "../styles/contact.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  const handleMenuClick = () => setShowMobileMenu(false);

  const solutions = [
    {
      title: "Decoração Infantil",
      description:
        "Transformamos aniversários em contos de fadas com temas encantadores, cheios de cor, magia e criatividade para os pequenos.",
      imageSrc: Flor,
    },
    {
      title: "Chá de Bebê",
      description:
        "Celebre a chegada do seu bebê com uma decoração delicada e acolhedora, feita para criar memórias inesquecíveis.",
      imageSrc: Flor,
    },
    {
      title: "Chá Revelação",
      description:
        "Torne o momento da revelação do sexo do bebê ainda mais emocionante com uma decoração temática e cheia de surpresas.",
      imageSrc: Flor,
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      imgUrl: ProfileImageOne,
      testemunho:
        "A representação visual do meme é um bombardeiro militar com a cabeça de um crocodilo, sem qualquer traço de humanização.",
      name: "Ellon Ma",
      cargo: "CEO BING CHILLING",
      rating: true,
    },
    {
      id: 2,
      imgUrl: ProfileImageTwo,
      testemunho:
        "A MagiaFesta superou minhas expectativas! A decoração para o chá de bebê da minha filha foi um sonho. Recomendo demais!",
      name: "Ana Clara",
      cargo: "Mãe Satisfeita",
      rating: true,
    },
    {
      id: 3,
      imgUrl: ProfileImageOne,
      testemunho:
        "O tema da festa de aniversário do meu filho ficou incrível! As crianças amaram e os pais também elogiaram bastante. Serviço de alta qualidade!",
      name: "Bruno Costa",
      cargo: "Pai Feliz",
      rating: false,
    },
    {
      id: 4,
      imgUrl: ProfileImageTwo,
      testemunho:
        "Simplesmente perfeito! Cada detalhe da decoração do chá revelação foi pensado com carinho. Um dia inesquecível!",
      name: "Carla Pires",
      cargo: "Futura Mamãe",
      rating: true,
    },
  ];

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Galeria</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a onClick={handleMenuClick} href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#solution">
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#testimonials">
                        Galeria
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#pricing">
                        Preços
                      </a>
                    </li>
                    <li>
                      <a onClick={handleMenuClick} href="#contact">
                        Contato
                      </a>
                    </li>
                  </ul>
                  <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                    <img src={close} alt="Ícone fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                <img src={menu} alt="Ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retângulo um tela inicial" />
        </span>
        <img src={HeroRectangleOne} alt="Retângulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Bem-vindo</p>
          <h1>Colecionando momentos de modo prático e fácil!</h1>
          <p>
            Decorações para festas infantis e chá de bebê ✨🎉! Transforme seu
            evento em um momento inesquecível.
          </p>
          <div className="flex gap-1">
            <Button text="Cadastre-se" />
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <h2>
            Soluções
            <span className="desktop-only"> Sob medida para você</span>
          </h2>
          <p>
            Inovação é com a gente! A MagiaFesta já conquistou diversos
            clientes, seja você mais um deles. Veja tudo que pode ganhar com
            nossos serviços.
          </p>
        </header>

        <section className="even-columns">
          {solutions.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={`Ícone de ${item.title}`}
            />
          ))}
        </section>

        <section id="testimonials" className="container">
          <header>
            <span>
              <p className="desktop-only">Conselho de quem conhece</p>
              <h2>Cada cliente importa!</h2>
            </span>
            <p>
              Quem já pediu sabe da qualidade das nossas Decorações, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
            </p>
          </header>
          <section className="carousel">
            <div className="carousel-content">
              {testimonialsData.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  imgUrl={testimonial.imgUrl}
                  testemunho={testimonial.testemunho}
                  name={testimonial.name}
                  cargo={testimonial.cargo}
                  rating={testimonial.rating}
                />
              ))}
              {testimonialsData.map((testimonial) => (
                <TestimonialCard
                  key={`duplicate-${testimonial.id}`}
                  imgUrl={testimonial.imgUrl}
                  testemunho={testimonial.testemunho}
                  name={testimonial.name}
                  cargo={testimonial.cargo}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </section>
        </section>
      </section>
      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Preços</p>
          <h2>Nossas Decorações</h2>
        </header>
        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Decoração simples</h3>
              <p>Decoração simples sem balões.</p>
            </span>
            <h2>Grátis</h2>
            <Button text="Pedir agora" secondary />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Montamos na hora</p>
            </span>
            <ul className="features">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Apenas 1 por CPF</p>
              </li>
            </ul>
          </div>
          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º decoração COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Premium</h3>
              <p>Para quem precisa de Uma decoração Linda e inesquecivel.</p>
            </span>
            <span className="price">
              <h2>R$ 350,00</h2>
              <p>/Apartir</p>
            </span>
            <Button text="Pedir agora" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 atendimento no local</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>5 Chá de bebe</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 Reserva antecipada</p>
            </span>
          </div>
        </section>
        
      </section>
      <section id="contact" className="contact-section container">
        <header className="contact-header">
          <p className="contact-subtitle">Envie sua dúvida</p>
          <h2 className="contact-title">Entre em contato</h2>
          <p className="contact-description">
            Entre em contato, estamos dispostos a tirar qualquer dúvida, <br />
            seja um orçamento, uma dúvida técnica de algum de nossos produtos.
            <br />
            Estamos à disposição para responder.{" "}
            <span role="img" aria-label="emoji">
              😎
            </span>
          </p>
        </header>
        <Contato/>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <h3>LogoMarca</h3>
            <div className="social-icons">
              <FaInstagram size={20} />
              <FaFacebookF size={20} />
              <FaYoutube size={20} />
            </div>
          </div>

          <div className="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Faça parte do time</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Funcionalidades</h4>
            <ul>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Análise de dados</a>
              </li>
              <li>
                <a href="#">Boot discord</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Recursos</h4>
            <ul>
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Teste a Demo</a>
              </li>
              <li>
                <a href="#">Clientes</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Feito com amor💙 ©
            {new Date().getFullYear()} AktieTech - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}