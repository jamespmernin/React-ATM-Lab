import React, { useState } from 'react';

function Account(props) {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div className="account">
      <h2>{props.name}</h2>
      <div className={"balance" + (balance === 0 ? ' zero' : '')}>${balance}</div>
      <input type="text" placeholder="enter an amount" value={amount} onChange={(e) => (setAmount(e.target.value))} />
      <input type="button" value="Deposit" onClick={() => (setBalance(balance + parseInt(amount, 10)))} />
      <input type="button" value="Withdraw" onClick={() => (balance > parseInt(amount, 10) ? setBalance(balance - parseInt(amount, 10)) : setBalance(0))} />
    </div>
  )
}

export default Account;