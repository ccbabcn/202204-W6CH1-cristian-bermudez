import styled from "styled-components";

export const ToDoListStyled = styled.div`
  .toDos-container {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .toDo {
      padding: 10px;
      border: 1px solid grey;
      display: flex;
      flex-direction: row;
      gap: 20px;
      button {
        width: 115px;
      }
    }

    li {
      list-style: none;
      padding: 0;
    }
  }

  .formTodo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
