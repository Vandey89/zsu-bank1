import styled from "styled-components";

export default function Menu({ config }) {
  return (
    <MenuBlock>
         {config.map((menu) => (
        <ButtonSendBlock onClick={menu.onClick}>
          <ButtonSendIcon>
            <img src={menu.img} width="30px" height="30px" />
          </ButtonSendIcon>
          <ButtonSendText>{menu.name}</ButtonSendText>
        </ButtonSendBlock>
      ))}
    </MenuBlock>
  );
}

const ButtonSendBlock = styled.div`
    gap: 60px;
    transition: opacity 0.7s;
    cursor: pointer;
    &:hover {
    opacity: 0.5;
  }
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

const MenuBlock = styled.div`
    display: flex;
    padding: 0 40px;
    gap: 18px;
    justify-content: space-around;
    width: 100%;
  `;

const ButtonSendIcon = styled.div`
    height: 70px;
    width: 70px;
    background: #000000;
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonSendText = styled.div`
    font-weight: 450;
    font-size: 27px;
    color: #050504;
    line-height: 35px;
    text-align: center;
    width: 100%;
`;
