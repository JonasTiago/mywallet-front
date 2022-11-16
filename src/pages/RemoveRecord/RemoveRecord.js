import { StyleRecordPage } from "../../constants/StyleRecordPage";
import { FormStyle } from "../../constants/styleSing-in-up";

export default function RemoveRecordPage() {
  return (
    <StyleRecordPage>
      <header>
        <h1>Nova saída</h1>
      </header>
      <FormStyle>
        <label htmlFor="valor">
          <input type="number" name="valor" placeholder="Valor" required />
        </label>
        <label htmlFor="descrição">
          <input
            type="text"
            name="descrição"
            placeholder="Descrição"
            required
          />
        </label>
        <input type="submit" value="Salvar saída" />
      </FormStyle>
    </StyleRecordPage>
  );
}
