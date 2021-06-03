import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 100px;
  width: 100%;

  display: flex;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  .div-btn {
    justify-content: flex-end;
    display: flex;
    align-items: center;
    flex: 1;

    a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;

      margin-right: 30px;
    }

    a:hover {
      font-weight: 700;
    }

    button {
      width: 100%;
      max-width: 180px;
    }
  }
`;
