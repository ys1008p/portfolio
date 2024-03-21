import styled from "styled-components";

export const StyledSectionContainer = styled.div`
  margin: 80px auto;
  width: 380px;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
    width: 800px;
  }

  @media (min-width: 1024px) {
    width: 1400px;
  }
`;

export const StyledLegend = styled.legend`
  font-size: 18px;
  font-weight: 600;
  scroll-margin-top: 60px;
  text-align: center;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
  line-height: 30px;
`;

export const StyledProfileContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const StyledImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background: url("/src/assets/profile.jpg") no-repeat center / cover;
`;

export const StyledTextIconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled.a`
  width: 40px;
  height: 40px;
`;

export const StyledIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: url("/src/assets/git.png") no-repeat center / cover;
`;
