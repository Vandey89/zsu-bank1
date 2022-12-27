import styled from "styled-components";
import Moment from "react-moment";

export default function Header({ name, onClick, time }) {
  return (
    <HeaderTag>
      <Moment size format=" DD:MM:YY HH:mm" interval={1000} />
      <NameTag onClick={zsu}>{name}</NameTag>
      <LoginButtonTag onClick={onClick}>Login</LoginButtonTag>
    </HeaderTag>
  );
}
const zsu = () => [alert("Did you help ZSU with a coin?!"), alert("Or are you not love zsu???!!!!😡😡😡😡😡")] ;
    const LoginButtonTag = styled.div`
    color: yellow;
    padding: 16px 42px;
    border: 4px solid #000;
    border-radius: 15px;
    cursor: pointer;
`;

const NameTag = styled.div`
    color: yellow;
    border: 4px solid #000;
    border-radius: 15px;
    padding: 16px 42px;
    cursor: pointer;
`;

const HeaderTag = styled.div`
    background: linear-gradient(
    121deg,
    rgba(14, 26, 4, 1) 39%,
    rgba(41, 50, 5, 1) 64%
  );
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    padding: 15px;
`;
