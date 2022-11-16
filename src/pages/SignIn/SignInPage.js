import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormStyle, StylePage } from "../../constants/styleSing-in-up";
import { UserAuthContext } from "../../constants/UseAuth";

export default function LoginPage() {
  const { setUser } = useContext(UserAuthContext);
  const navigate = useNavigate();

  return (
    <StylePage>
      <h1>MyWallet</h1>
      <FormStyle>
        <label htmlFor="email">
          <input type="email" name="email" placeholder="E-mail" required />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Senha" required />
        </label>
        <input type="submit" value="Entrar" />
      </FormStyle>
      <Link to={"/signup"}>Primeira vez? Cadastre-se!</Link>
    </StylePage>
  );
}
