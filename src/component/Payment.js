import styled, { css } from "styled-components";
import money from "../public/icon/money.svg";

export default function Payment({ payment }) {
    if (payment.length === 0) {
    return (
      <PaymentList>
        <Empty>No transactions</Empty>
      </PaymentList>
    );
  }
  if (payment.length === 1) {
    return (
      <PaymentList>
        <Empty>You have 1 transactions</Empty>
      </PaymentList>
    );
  }
    return <PaymentList>{payment.map(PaymentItem)}</PaymentList>;
}
function PaymentItem({ name, amount, type }) {
  return (
    <PaymentBlock>
      <PaymentIcon>
        <img src={money} width="30px" height="30px" />
      </PaymentIcon>
      <PaymentText>tranzactions: {name}</PaymentText>
        <PaymentAmount type={type}>
        {type}
        {amount}$
      </PaymentAmount>
    </PaymentBlock>
  );
}
const Empty = styled.div`
    font-size: 28px;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

const PaymentAmount = styled.div`
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${({ type }) => {
    if (type === "+")
      return css`
        color: #09a837;
      `;
    if (type === "-")
      return css`
        color: red;
      `;

    // if (type === "*")
    //   return css`
    //     color: blue;
    //   `;
    return css`
      color: #fff;
    `;
    }};
  `;

const PaymentIcon = styled.div`
    background: linear-gradient(
    180deg,
    rgba(26, 39, 215, 1) 0%,
    rgba(26, 65, 215, 1) 30%,
    rgba(255, 251, 102, 1) 70%
  );
    min-width: 60px;
    min-height: 60px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

const PaymentText = styled.div`
    font-size: 18px;
    color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
  `;

const PaymentList = styled.div`
    background: #6b5745;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding: 40px;
    margin-top: 120px;
    min-height: 260px;
    display: grid;
    gap: 24px;
  `;

const PaymentBlock = styled.div`
    display: grid;
    grid-template-columns: 60px 4fr 1fr;
    gap: 0px 20px;
    width: 100%;
  `;
