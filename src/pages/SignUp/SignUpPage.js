import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormStyle, StylePage } from "../../constants/styleSing-in-up";

export default function SingUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function fillInForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function signup(e) {
    e.preventDefault();

    const { name, email, password } = form;

    const body = { name, email, password };

    console.log(body);

    const URL_BASE = "http://localhost:5000/sign-up";

    axios
      .post(URL_BASE, body)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        switch (res.response.status) {
          case 409:
            alert(res.response.data.message);
            break;
          case 422:
            console.log(res.response.data);
            break;
          default:
            console.log("erro");
        }
        console.log(res.response.status);
      });

    if (form.password === form.passwordConfirm) {
      console.log(form);
    }
  }

  return (
    <StylePage>
      <h1>MyWallet</h1>
      <FormStyle onSubmit={signup}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            value={form.name}
            minLength={3}
            autoComplete="off"
            onChange={fillInForm}
            placeholder="Nome"
            required
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={form.email}
            autoComplete="off"
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
        <label htmlFor="passwordConfirm">
          <input
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={fillInForm}
            placeholder="Confirme a senha"
            required
          />
        </label>
        <input type="submit" value="Cadastrar" />
      </FormStyle>
      <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
    </StylePage>
  );
}
