import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  border-bottom: 2px solid var(--font-color);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export default function TitleText() {
  const [titleText, setTitleText] = useState("Y");
  const [textCursor, setTextCursor] = useState("|");

  const title = "S/'s portfolio";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTitleText((prevText) => prevText + title[currentIndex]);
      currentIndex++;
      if (currentIndex === title.length - 1) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setTextCursor(textCursor === "|" ? "" : "|"), 1000);
  }, [textCursor]);

  return (
    <StyledTitle>
      {titleText}
      {textCursor}
    </StyledTitle>
  );
}
