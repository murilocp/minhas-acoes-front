import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.font.fontFamily};
    font-weight: ${props => props.theme.font.fontWeight};
    font-size: ${props => props.theme.font.fontSize};
  }
`;
