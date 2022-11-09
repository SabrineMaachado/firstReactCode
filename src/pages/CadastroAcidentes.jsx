import "./CadastroAcidentes.css";

export default function CadastroAcidentes() {
  return (
    <section classNameName="">
      <form className="form" method="POST" action="/">
      <h3>Formulário de contato</h3>
        <input
          className="field"
          type="text"
          name="local"
          placeholder="Local do acidente"
        />
        <input
          className="field"
          type="text"
          name="tipo"
          placeholder="Tipo de acidente"
        />
        <textarea
          className="field"
          name="message"
          placeholder="Descrição do acidente"
        ></textarea>
        <label for="status"> Status do acidente </label>
        <select name="status" id="status" placeholder="Escolha o Status">
          <option>Escolha o Status </option>
          <option value="mGrave">Muito grave </option>
          <option value="grave">Grave</option>
          <option value="medio">Medio</option>
          <option value="leve">Leve</option>
        </select>

        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
    </section>
  );
}
