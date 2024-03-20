import styled from "styled-components";

const StyledPortalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

const StyledMenuItem = styled.span`
  font-size: 48px;
  transition: 0.5s;
  font-weight: 600;

  &:hover {
    color: var(--red-color);
  }
`;

interface HamburgerModalProps {
  setIsModalOpen: (value: boolean) => void;
}

//TODO : portal 변경
export default function HamburgerModal({ setIsModalOpen }: HamburgerModalProps) {
  const handleClick = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledPortalContainer onClick={handleClick}>
      <StyledContainer>
        <a href="#profile">
          <StyledMenuItem>Profile</StyledMenuItem>
        </a>
        <a href="#skill">
          <StyledMenuItem>Skill</StyledMenuItem>
        </a>
        <a href="#project">
          <StyledMenuItem>Project</StyledMenuItem>
        </a>
        <a href="#contact">
          <StyledMenuItem>Contact</StyledMenuItem>
        </a>
      </StyledContainer>
    </StyledPortalContainer>
  );
}
