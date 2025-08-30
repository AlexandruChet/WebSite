import React from "react";
import { cardsData } from "./Data";
import "./Cards.scss";

interface CardProps {
  img: string;
  title?: string;
  text: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ img, title, text, description }) => {
  return (
    <div className="card">
      <img src={img} alt={description} className="card__url" />
      <h3 className="card__headline">{title}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
};

const CardsGenerations: React.FC = () => {
  return (
    <main className="content__body">
      <section className="cards">
        {cardsData.map((element, index) => (
          <Card
            key={index}
            img={element.img}
            title={element.title}
            text={element.text}
            description={element.description}
          />
        ))}
      </section>
    </main>
  );
};

export default CardsGenerations;
