import styled from "styled-components";

const HamburgerButton = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: url("/public/hambugermenu.svg") no-repeat center / cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default HamburgerButton;
