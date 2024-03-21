import styled from "styled-components";

const StyledUl = styled.ul`
  display: none;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledLi = styled.li`
  font-size: 24px;
  transition: 0.5s;
  font-weight: 600;

  &:hover {
    color: var(--red-color);
  }
`;

export default function GnbItemList() {
  return (
    <>
      <StyledUl>
        <a href="#Profile">
          <StyledLi>Profile</StyledLi>
        </a>
        <a href="#Skill">
          <StyledLi>Skill</StyledLi>
        </a>
        <a href="#Project">
          <StyledLi>Project</StyledLi>
        </a>
        <a href="#Contact">
          <StyledLi>Contact</StyledLi>
        </a>
      </StyledUl>
    </>
  );
}
