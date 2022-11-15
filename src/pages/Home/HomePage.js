import { RegistrationAreaStyle, StyleHome, RegistratStyle } from "./styleHome";
import Exit from "../../assets/exit.svg";
import Add from "../../assets/add-circle.svg";
import Remove from "../../assets/remove-circle.svg";
// import { RECODER } from "../../mocks/registros";

export default function HomePage() {
  const user = "Jonas";
  const records = false;

  return (
    <StyleHome>
      <header>
        <h1>Olá, {user}</h1>
        <img src={Exit} alt="Botão de sair" />
      </header>
      <RegistrationAreaStyle>
        {records ? (
          <ul>
            {records.map((record) => (
              <RegistratStyle teste={record.status === "E" ? true : false } >
                <div>
                    <span>{record.date}</span>
                    <span>{record.descrição}</span>
                </div>
                <span>{record.valor}</span>
              </RegistratStyle>
            ))}
          </ul>
        ) : (
          <p>Não há registros de entrada ou saída</p>
        )}
      </RegistrationAreaStyle>
      <div>
        <button>
          <img src={Add} alt="Botão de adicionar" />
          <span>Nova entrada</span>
        </button>
        <button>
          <img src={Remove} alt="Botão de remover" />
          <span>Nova saida</span>
        </button>
      </div>
    </StyleHome>
  );
}
