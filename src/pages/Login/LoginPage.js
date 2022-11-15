import { StylePage } from "./styleLogin";

export default function LoginPage() {
  return (
    <StylePage>
      <h1>MyWallet</h1>
      <form>
        <label htmlFor="email">
          <input type="email" name="email" />
        </label>
        <label htmlFor="passworld">
          <input type="passworld" name="passworld" />
        </label>
        <input type="submit" value="Entrar" />
        <a href="reginstration">Primeira vez? Cadastre-se!</a>
      </form>
    </StylePage>
  );
}
