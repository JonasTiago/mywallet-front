import { RegistrationAreaStyle, StyleHome, RegistratStyle } from "./styleHome";
import Exit from "../../assets/exit.svg";
import Add from "../../assets/add-circle.svg";
import Remove from "../../assets/remove-circle.svg";
import { Link } from "react-router-dom";
import { RECODER } from "../../mocks/registros";

export default function HomePage() {
  const user = "Jonas";
  const records = RECODER;

  // console.log(records.length);

  return (
    <StyleHome>
      <header>
        <h1>Olá, {user}</h1>
        <img src={Exit} alt="Botão de sair" />
      </header>
      <RegistrationAreaStyle>
        {records ? (
          <>
            <ul>
              {records.map((record, indx) => (
                <RegistratStyle
                  key={indx}
                  teste={record.status === "entrada" ? true : false}
                >
                  <div>
                    <span>{record.date}</span>
                    <span>{record.descrição}</span>
                  </div>
                  <span>{record.valor}</span>
                </RegistratStyle>
              ))}
            </ul>
            <div>
              <p>saldo</p>
              <span>00,00</span>
            </div>
          </>
        ) : (
          <p>Não há registros de entrada ou saída</p>
        )}
      </RegistrationAreaStyle>
      <div>
        <Link to={"/add"}>
          <button>
            <img src={Add} alt="Botão de adicionar" />
            <span>Nova entrada</span>
          </button>
        </Link>
        <Link to={"/delete"}>
          <button>
            <img src={Remove} alt="Botão de remover" />
            <span>Nova saida</span>
          </button>
        </Link>
      </div>
    </StyleHome>
  );
}
