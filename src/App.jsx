import React from "react";
import food from "./public/icon/food.svg";
import money from "./public/icon/money.svg";
import money$ from "./public/icon/money$.svg";
import proba from "./public/icon/proba.svg";

import Page from "./component/Page";
import Header from "./component/Header";
import Balance from "./component/Balance";
import Menu from "./component/Menu";
import Payment from "./component/Payment";
import { NotLogged } from "./component/NotLogged";
import tank from "./public/icon/g3Ku.gif"
import { TankCent } from "./component/NotLogged";
import { LoginPassword } from "./component/NotLogged";


const START_BALANCE = 1000;
const LIMIT_BALANCE = 10000;
const GET_MONEY = 3000;
const SALARY_AMOUNT = 1000;
const COURSE_PRICE = 850;
const FOOD = 25;

export default function App() {
  
const [balance, setBalance] = React.useState(START_BALANCE);

 React.useEffect(() => {
      if (balance > LIMIT_BALANCE) {
      alert(`Your balance limit: ${LIMIT_BALANCE}`);
      setBalance(START_BALANCE);
    }

    if (balance < 0) {
      alert(`You have used all your money. Top up the card`);
      // setBalance(0);
    }
     }, [balance]);
  //Function tranzactions
  const [payment, setPayment] = React.useState([]); //nashi tranzakcii
  const getMoney = () => {setBalance(balance + GET_MONEY);
  setPayment([
    {
      name: "borrow",
      amount: GET_MONEY,
      type: "+"
    }, ...payment
  ]);
};
  const getSalary = () => {
        setBalance(balance + SALARY_AMOUNT);
    setPayment([
      {
        name: "salary",
        amount: SALARY_AMOUNT,
        type: "+"
      },
      ...payment
    ]);
  };
  const buyFood = () => {
    setBalance(balance - FOOD);
    setPayment([
      {
        name: "Food",
        amount: FOOD,
        type: "-"
      },
      ...payment
    ]);
  };
  const buyCourse = () => {
    setBalance(balance - COURSE_PRICE);
    setPayment([
      {
        name: "Buy at the Course",
        amount: COURSE_PRICE,
        type: "-"
      },
      ...payment
    ]);
  };

  // interface ==========================================
  
  const LOGIN = "user";
  const PASSWORD = "123";
  const [isLogged, setLogget] = React.useState(false);

  const doLogin = () => {
    const login = prompt("Your login");
    const password = prompt("Your password");

    if (login === LOGIN && password === PASSWORD) {
      alert("You logined");
      setLogget(true);
    } else {
      if (login !== LOGIN && password !== PASSWORD) {
        return alert("Invalid login and password");
      }
      if (login !== LOGIN) {
        return alert("Invalid Login");
      }
      if (password !== PASSWORD) {
        return alert("Invalid password");
      }
    }
  };
  

  return (
    <Page>
     
      <Header name="ZSU-BANK"  onClick={doLogin} />
      <LoginPassword>Login: user</LoginPassword>
      <LoginPassword>Password: 123</LoginPassword>
      {isLogged && <Balance balance={balance} />}

      {isLogged && (
        
        <Menu
          // button
          config={[
            {
              name: "Borrow from a bank",
              onClick: getMoney,
              img: money
            },
            {
              name: "Get Salary",
              onClick: getSalary,
              img: proba
            },
            {
              name: "Buy at the Course",
              onClick: buyCourse,
              img: money$
            },
            {
              name: "buy food in Glovo",
              onClick: buyFood,
              img: food
            }
          ]}
        />
      )}
      
      {/* tranzction      */}
      {isLogged && <Payment payment={payment} />}
      {isLogged === false && (
        <NotLogged>
          You need to sign in to your account. Enter login and password
                  </NotLogged>
        
      )}
            <TankCent >
      <img  src={tank}></img>
       </TankCent>
      
    </Page>
  );
}
