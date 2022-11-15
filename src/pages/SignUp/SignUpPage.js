import { FormStyle, StylePage } from "../../constants/styleSing-in-up";

export default function SingUpPage() {
  return (
    <StylePage>
      <h1>MyWallet</h1>
      <FormStyle>
        <label htmlFor="Name">
          <input type="text" name="name" placeholder="Nome" required />
        </label>
        <label htmlFor="email">
          <input type="email" name="email" placeholder="E-mail" required />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Senha" required />
        </label>
        <label htmlFor="passwordConfirm">
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Senha"
            required
          />
        </label>
        <input type="submit" value="Cadastrar" />
      </FormStyle>
      <a href="reginstration">Já tem uma conta? Entre agora!</a>
    </StylePage>
  );
}
