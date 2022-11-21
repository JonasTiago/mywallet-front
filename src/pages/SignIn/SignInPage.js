import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormStyle, StylePage } from "../../constants/styleSing-in-up";
import { AuthContext } from "../../contexts/AuthContext";
import URL_BASE from "../../constants/URL_BASE";

export default function LoginPage() {
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function fillInForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function signIn(e) {
    e.preventDefault();

    const body = form;
    
    axios
      .post(`${URL_BASE}/sign-in`, body)
      .then((res) => {
        setToken(res.data.token);
        setUser(res.data.user);
        navigate("/home");
      })
      .catch((res) => {
        console.log(res.response.status);
        alert("Senha ou Usuario, Invalido!")
      });
  }

  return (
    <StylePage>
      <h1>MyWallet</h1>
      <FormStyle onSubmit={signIn}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={fillInForm}
            placeholder="E-mail"
            required
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={fillInForm}
            placeholder="Senha"
            required
          />
        </label>
        <input type="submit" value="Entrar" />
      </FormStyle>
      <Link to={"/signup"}>Primeira vez? Cadastre-se!</Link>
    </StylePage>
  );
}
