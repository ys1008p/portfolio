import Gnb from "./components/gnb/Gnb";
import Profile from "./components/section/Profile";
import { StyledSectionContainer } from "./components/section/Styled/Section";

function App() {
  return (
    <>
      <Gnb />
      <StyledSectionContainer>
        <Profile />
      </StyledSectionContainer>
    </>
  );
}

export default App;
