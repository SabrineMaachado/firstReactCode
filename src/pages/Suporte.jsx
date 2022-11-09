import "./Suporte.css";

export default function Suporte() {
  const suporte = {
    height: "85vh",
    textAlign: "center",
    color: "black",
    fontSize: "20px",
  };

  return (
    <section style={suporte} className="">
      <h3>Formulário de contato</h3>
      <form class="form" method="POST" action="/">
        <input class="field" type="text" name="name" placeholder="Nome" />

        <input class="field" type="email" name="email" placeholder="Email" />
        <textarea
          class="field"
          name="message"
          placeholder="Digite seu problema/sugestão"
        ></textarea>
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
    </section>
  );
}
