import styled from "styled-components";

export const StyleHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.56rem 0;
  font-family: "Raleway", sans-serif;

  header {
    width: 20.375rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.625rem;
    margin: 0 auto;
    font-weight: 700;
  }

  div {
    width: 20.375rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    button {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 11.071em;
      height: 8.142em;
      background-color: #a328d6;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      padding:10px;

      img {
        width: 22px;
        font-weight:bold;
        color: #ffffff;
      }

      span {
        font-size: 1.06rem;
        font-weight: 700;
        width:40px;
      }
    }
  }
`;

export const RegistrationAreaStyle = styled.div`
  width: 20.375rem;
  background-color: #ffffff;
  margin: 0 auto;
  min-height: 28rem;
  max-height: 75%;
  height: 73%;
  align-items: center;
  border-radius: 5px;

  p {
    color: #868686;
    font-size: 1.25rem;
    text-align: center;
    width: 180px;
    margin: auto;
  }
`;
