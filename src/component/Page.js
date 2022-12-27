import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
    background: linear-gradient(
    180deg,
    rgba(26, 39, 215, 1) 0%,
    rgba(26, 65, 215, 1) 45%,
    rgba(255, 251, 102, 1) 45%
  );
  background: linear-gradient(
    180deg,
    rgba(26, 39, 215, 1) 0%,
    rgba(26, 65, 215, 1) 30%,
    rgba(255, 251, 102, 1) 70%
  );
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  `;
