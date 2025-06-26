import Like from "../assets/like.svg";
import Deslike from "../assets/deslike.svg";
import "../styles/testimonials.css"; 

interface ITestimonialCardProps {
    testemunho: string;
    imgUrl: string;
    rating?: boolean; 
    name: string;
    cargo: string;
}

export default function TestimonialCard(props: ITestimonialCardProps) {
    return (
        <div className="carousel-card">
            {/* O alt da imagem do perfil deve ser descritivo do cliente */}
            <img src={props.imgUrl} alt={`Imagem de perfil de ${props.name}`} />
            <span className="testimony">
                <p>{props.testemunho}</p>
            </span>
            <span className="rating">
                {props.rating ? (
                    <img src={Like} alt="ícone de Gostei" width={22} height={20} /> 
                ) : (
                    <img src={Deslike} alt="ícone de Não Gostei" width={22} height={20} /> 
                )}
            </span>
            <span className="names">
                <p>{props.name}</p>
                <p>{props.cargo}</p>
            </span>
        </div>
    );
}