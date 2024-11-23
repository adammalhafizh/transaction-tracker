import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transaction }) => {
  return (
    <ul>
      {transaction.map((transaction, i) => (
        <TransactionItem
          transaction={transaction}
          num={i}
          key={transaction.id}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
