import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import HeroRectangleOne from "../assets/HeroRectangleOne.svg";
import HeroRectangleTwo from "../assets/rectangleTwo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import Flor from "../assets/flor.svg";

import Button from "../componentes/button";
import Card from "../componentes/card";

import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";

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

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li><a href="#">Home</a></li>
              <li><a href="#solution">Soluções</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">Login</a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li><a onClick={handleMenuClick} href="#">Home</a></li>
                    <li><a onClick={handleMenuClick} href="#solution">Soluções</a></li>
                    <li><a onClick={handleMenuClick} href="#testimonials">Depoimentos</a></li>
                    <li><a onClick={handleMenuClick} href="#pricing">Preços</a></li>
                    <li><a onClick={handleMenuClick} href="#contact">Contato</a></li>
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
            Decorações para festas infantis e chá de bebê ✨🎉!
            Transforme seu evento em um momento inesquecível.
          </p>
          <div className="flex gap-1">
            <span><Button text="Cadastre-se" /></span>
            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>
          <p>
            Inovação é com a gente! A <strong>MagiaFesta</strong> já conquistou diversos
            clientes, seja você mais um deles. Veja tudo que pode ganhar com nossos serviços.
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
      </section>
    </>
  );
}
