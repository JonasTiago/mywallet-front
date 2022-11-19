import { RegistrationAreaStyle, StyleHome, RegistratStyle } from "./styleHome";
import Exit from "../../assets/exit.svg";
import Add from "../../assets/add-circle.svg";
import Remove from "../../assets/remove-circle.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import URL_BASE from "../../constants/URL_BASE";

export default function HomePage() {
  const { user, token, setUser, setToken } = useContext(AuthContext);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);

  useEffect(
    (res) => {
      axios
        .get(`${URL_BASE}/records`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setRecords(res.data);
        })
        .catch((res) => {
          console.log(res);
        });
    },
    [token]
  );

  useMemo(() => {
    const entradas = records
      .filter((item) => item.status === "entrada" && item.valor)
      .map((item) => parseFloat(item.valor));

    const totalEntradas =
      entradas.length > 0 ? entradas.reduce((a, b) => a + b) : 0;

    const saidas = records
      .filter((item) => item.status === "saida" && item.valor)
      .map((item) => parseFloat(item.valor));

    const totalSaidas = saidas.length > 0 ? saidas.reduce((a, b) => a + b) : 0;

    setBalance(parseFloat(totalEntradas - totalSaidas).toFixed(2));
  }, [records]);

  function exitApp() {
    setToken();
    setUser();
    navigate("/");
  }

  return (
    <StyleHome>
      <header>
        <h1>Olá, {user}</h1>
        <img src={Exit} alt="Botão de sair" onClick={() => exitApp()} />
      </header>
      <RegistrationAreaStyle leftover={balance}>
        {records.length ? (
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
              <span>{balance}</span>
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
