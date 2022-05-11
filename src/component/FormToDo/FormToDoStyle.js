import styled from "styled-components";

export const FormToDoStyle = styled.div`
  .formTodo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    input {
      font-size: 18px;
      text-align: center;
      border: 1px solid grey;
      border-radius: 20px;
    }

    button {
      color: white;
      text-transform: uppercase;
      width: 115px;
      height: 30px;
      border-radius: 20px;
      background: black;
      cursor: pointer;
      :hover {
        filter: opacity(0.85);
      }
    }
  }
`;
