import { StyleRecordPage } from "../../constants/StyleRecordPage";
import { FormStyle } from "../../constants/styleSing-in-up";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../constants/UseAuth";

export default function ExpenseAddPage() {
  const { token } = useContext(UserAuthContext);
  const [form, setForm] = useState({
    descrição: "",
    valor: "",
  });
  const navigate = useNavigate();

  function fillInForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function submitRecord(e) {
    e.preventDefault();
    const body = form;

    const URL_BASE = "http://localhost:5000/records/saida";

    const headers = { authorization: `Bearer ${token}` };

    axios
      .post(URL_BASE, body, { headers })
      .then((res) => {
        navigate("/home");
      })
      .catch((res) => alert("Algo deu errado"));
  }

  return (
    <StyleRecordPage>
      <header>
        <h1>Nova saída</h1>
      </header>
      <FormStyle onSubmit={submitRecord}>
        <label htmlFor="valor">
          <input
            type="number"
            name="valor"
            value={form.valor}
            onChange={fillInForm}
            placeholder="Valor"
            required
          />
        </label>
        <label htmlFor="descrição">
          <input
            type="text"
            name="descrição"
            value={form.descrição}
            onChange={fillInForm}
            placeholder="Descrição"
            required
          />
        </label>
        <input type="submit" value="Salvar saída" />
      </FormStyle>
    </StyleRecordPage>
  );
}
