import React from "react";
import styles from "./TransactionTable.module.sass";

export const TransactionTable = props => {
    const {data} = props;

    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Spent / Earned</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {
                data ?
                    data.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.operationType}</td>
                            <td>{
                                transaction.operationType == "Spend" ?
                                '-' :
                                '+'
                            } ${transaction.amount}</td>
                        </tr>
                    ))
                    :
                    <p className={styles.warningText}>No existing transaction data</p>
            }
            </tbody>
        </table>
    )
}