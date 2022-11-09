import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/");
    }
  }, [formErrors, isSubmit, navigate]);
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "O campo e-mail é obrigatório";
    }
    if (values.password.length < 4) {
      errors.password = "O campo senha deve ter pelo menos 4 caracteres";
    }
    return errors;
  };

  const login = {
    height: "85vh",
    textAlign: "center",
    color: "black",
    fontSize: "20px",
  };
  return (
    <section style={login} className="">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          class="field"
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu Email"
          value={formValues.email}
          onChange={handleChange}
        />{" "}
        <p>{formErrors.email}</p>
        <input
          class="field"
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={formValues.password}
          onChange={handleChange}
        />{" "}
        <p>{formErrors.password}</p>
        <button type="submit" value="Login">
          Entrar
        </button>
      </form>
    </section>
  );
}
