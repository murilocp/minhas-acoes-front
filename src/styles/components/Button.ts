import styled from 'styled-components';

export const ButtonContainer = styled.button`
  outline: 0;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  padding: 16px 20px;

  background-color: ${props => props.theme.colors.primary};
  color: white;

  font-weight: 600;
  font-size: 16px;

  cursor: pointer;

  transition: all 0.3s;

  :hover {
    background-color: white;

    color: ${props => props.theme.colors.primary};
    border: 2px solid ${props => props.theme.colors.primary};
  }
`;
