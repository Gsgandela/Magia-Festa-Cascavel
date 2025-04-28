import "../styles/solution.css"; // Importa o estilo se necessário
import Flor from "../assets/flor.svg"; // Supondo que todos usam o mesmo ícone, ou pode passar como prop

interface CardProps {
    title: string;
    description: string;
    imageSrc?: string;
    imageAlt?: string;
}

export default function Card({
    title,
    description,
    imageSrc = Flor,
    imageAlt = "",
}: CardProps) {
    return (
        <div className="card">
            <span>
                <img src={imageSrc} alt={imageAlt} width={64} height={64} />
            </span>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <hr />
            </div>
        </div>
    );
}
