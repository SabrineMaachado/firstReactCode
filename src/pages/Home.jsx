import ImagemHome from "../components/img/olineDoctor.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div>
        <h1>Solution Help</h1>
        <p>Solucionando os problemas com acidentes.</p>
        <p>
          Nós da Solution Help desenvolvemos uma solução para seus problemas no
          caso de acidentes deixamos numero das emergencias disponiveis, e temos
          tambem uma area a onde o usuario consegue cadastrar o ocorrido assim
          ajudando na pesquisa{" "}
        </p>
      </div>
      <div >
        <img className="home-img" src={ImagemHome} alt="home" />
      </div>
    </div>
  );
}
