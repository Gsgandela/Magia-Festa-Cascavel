import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "../styles/utility.css";
import "../styles/header.css";
import HeroRectangleOne from "../assets/HeroRectangleOne.svg";
import HeroRectangleTwo from "../assets/rectangleTwo.svg";
import "../styles/hero.css";
import Button from "../componentes/button";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import "../styles/solution.css";
import Flor from "../assets/flor.svg";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    // 🔒 Bloqueia scroll do body ao abrir menu mobile
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    // 🔁 Fecha o menu ao clicar em qualquer item
    const handleMenuClick = () => setShowMobileMenu(false);

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
                                    <span
                                        onClick={() => setShowMobileMenu(false)}
                                        className="btn-wrapper"
                                    >
                                        <img src={close} alt="Ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span
                                onClick={() => setShowMobileMenu(true)}
                                className="btn-wrapper"
                            >
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
                <div className="card">
                    <span>
                        <img src={Flor} alt="Ícone campeão" width={64} height={64} />
                    </span>
                    <div>
                        <h3>Produto Vencedor</h3>
                        <p>
                            Ideia matadora! Nosso time já ganhou diversos eventos de inovação com nosso produto.
                            Entre eles podemos citar o CityFarm da FAG e o Startup Garage.
                        </p>
                        <hr />
                    </div>
                </div>
            </section>
            <section className="even-columns">
                <div className="card">
                    <span>
                        <img src={Flor} alt="Ícone campeão" width={64} height={64} />
                    </span>
                    <div>
                        <h3>Produto Vencedor</h3>
                        <p>
                            Ideia matadora! Nosso time já ganhou diversos eventos de inovação com nosso produto.
                            Entre eles podemos citar o CityFarm da FAG e o Startup Garage.
                        </p>
                        <hr />
                    </div>
                </div>
            </section>
            <section className="even-columns">
                <div className="card">
                    <span>
                        <img src={Flor} alt="Ícone campeão" width={64} height={64} />
                    </span>
                    <div>
                        <h3>Produto Vencedor</h3>
                        <p>
                            Ideia matadora! Nosso time já ganhou diversos eventos de inovação com nosso produto.
                            Entre eles podemos citar o CityFarm da FAG e o Startup Garage.
                        </p>
                        <hr />
                    </div>
                </div>
            </section>
            </section>
        </>
    );
}
