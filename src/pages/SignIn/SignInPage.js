import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormStyle, StylePage } from "../../constants/styleSing-in-up";
import { UserAuthContext } from "../../constants/UseAuth";

export default function LoginPage() {
  const { setUser, setToken } = useContext(UserAuthContext);
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

    const URL_BASE = "http://localhost:5000/sign-in";
    axios
      .post(URL_BASE, body)
      .then((res) => {
        setToken(res.data.token);
        setUser(res.data.user);
        navigate("/home");
      })
      .catch((res) => {
        console.log(res);
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
