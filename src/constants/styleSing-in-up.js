import styled from "styled-components";

export const StylePage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.285rem;
    font-family: "Saira Stencil One", cursive;
    color: #ffffff;
    margin-bottom: 1.71rem;
  }

  a {
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;

  input {
    font-size: 1.28rem;
    padding: 0 0.98rem;
    width: 20.375rem;
    height: 3.625rem;
    margin-bottom: 0.81rem;
    border-radius: 5px;
    border: none;

    ::placeholder {
      color: #000000;
    }
  }

  input[type="submit"] {
    height: 2.875rem;
    background-color: #a328d6;
    color: #ffffff;
    margin-bottom: 2.25rem;
    font-weight: 700;
  }
`;
