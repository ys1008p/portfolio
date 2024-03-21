import styled from "styled-components";
import TitleText from "./TitleText";
import HamburgerButton from "./HamburgerButton";
import HamburgerModal from "./HamburgerModal";
import { useState } from "react";
import GnbItemList from "./GnbItemList";

const StyledContainer = styled.div`
  position: fixed;
  width: 380px;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
    width: 800px;
  }

  @media (min-width: 1024px) {
    width: 1400px;
  }
`;

export default function Gnb() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* <div id="modal-root"></div> */}
      <StyledContainer>
        <TitleText />
        <HamburgerButton onClick={handleModalOpen} />
        {isModalOpen && <HamburgerModal setIsModalOpen={setIsModalOpen} />}
        <GnbItemList />
      </StyledContainer>
    </>
  );
}
