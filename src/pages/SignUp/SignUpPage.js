import { Link } from "react-router-dom";
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
