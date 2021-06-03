import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;

  div.content {
    padding: 50px 100px;
    margin: auto;

    width: 100%;
    max-width: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div.search-input {
    padding: 16px;
    width: 100%;

    border-radius: 6px;

    background-color: #f3f3f3;
  }

  input {
    outline: 0;
    border: 0;

    background-color: #f3f3f3;
    width: 100%;
    font-size: 16px;
  }
`;
