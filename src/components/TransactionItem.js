import React from "react";

const TransactionItem = ({ num, transaction }) => {
  return (
    <div className="item-container">
      <p className="number">{num < 9 ? `0${num + 1}  ` : num + 1}</p>
      <p className="expense-item">{transaction.title}</p>
      <p className={transaction.type === "+" ? "plus" : "minus"}>
        {transaction.type === "+" ? "+" : "-"}
      </p>
      <p className="amount">${Math.abs(transaction.amount)}</p>
    </div>
  );
};

export default TransactionItem;
