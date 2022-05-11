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
      align-items: center;
      gap: 20px;
      border-radius: 20px;
      button {
        color: white;
        text-transform: uppercase;
        width: 115px;
        height: 70px;
        border-radius: 20px;
        background: black;
        cursor: pointer;
        :hover {
          filter: opacity(0.85);
        }
      }

      .done {
        background: green;
      }
      .undone {
        background: tomato;
      }
      h3 {
        width: 250px;
        text-overflow: ellipsis;
      }
    }

    li {
      list-style: none;
      padding: 0;
    }
  }
`;
