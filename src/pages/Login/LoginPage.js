import { FormStyle, StylePage } from "../../constants/styleSing-in-up";

export default function LoginPage() {
  return (
    <StylePage>
      <h1>MyWallet</h1>
      <FormStyle>
        <label htmlFor="email">
          <input type="email" name="email" placeholder="E-mail" required />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
          />
        </label>
        <input type="submit" value="Entrar" />
      </FormStyle>
      <a href="reginstration">Primeira vez? Cadastre-se!</a>
    </StylePage>
  );
}
