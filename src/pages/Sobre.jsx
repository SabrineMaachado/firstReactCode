import imagemsobre from "../components/img/projeto.jpg";
import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre">
      <div>
        <h1>Projeto desenvolvido pela equipe Solution Help</h1>
        <p>
          Projeto desenvolvido pela <b>equipe Solution Help </b> que tem o
          intuito de desenvolver solução para seus problemas no caso de
          acidentes deixamos numero das emergencias disponiveis, e temos tambem
          uma area a onde o usuario consegue cadastrar o ocorrido assim ajudando
          na pesquisa
        </p>
      </div>
      <div>
        <img className="sobre-img" src={imagemsobre} alt="sobre" />
      </div>
    </div>
  );
}
