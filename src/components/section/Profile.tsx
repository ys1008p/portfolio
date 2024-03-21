import {
  StyledFieldset,
  StyledIcon,
  StyledImage,
  StyledLegend,
  StyledLink,
  StyledProfileContainer,
  StyledTextIconContainer,
} from "./Styled/Section";

export default function Profile() {
  return (
    <>
      <StyledFieldset>
        <StyledLegend id="profile">Profile</StyledLegend>
        <p>
          안녕하세요.
          <br />
          프론트엔드 개발자를 희망하는 박윤수 입니다.
          <br />
          프론트엔드 개발자로서의 역량을 키우는 동시에,
          <br />
          미래에는 어떤 분야에서도 적응할 수 있는 능력을
          <br />
          보유하고자 합니다.
          <br />
          최종적으로는 풀스택 개발자를 희망하고 있습니다.
        </p>
        <StyledProfileContainer>
          <StyledImage />
          <StyledTextIconContainer>
            <p>
              이름 : 박윤수
              <br />
              생년월일 : 1990년 10월 8일
              <br />
            </p>
            <StyledLink href="https://github.com/ys1008p">
              <StyledIcon />
            </StyledLink>
          </StyledTextIconContainer>
        </StyledProfileContainer>
      </StyledFieldset>
    </>
  );
}
