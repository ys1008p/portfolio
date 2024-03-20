import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --bg-color: #111212;
    --font-color: #f8f9fa;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --red-color: #dc3545;
    --yellow-color: #ffc107;
    --blue-color: #007bff;
    --info-color: #17a2b8;
    font-size: 62.5%;
  }
  
  body {
    font-family:  Pretendard;
    color : var(--font-color);
    background-color: var(--bg-color);
  }
`;

export default GlobalStyle;
