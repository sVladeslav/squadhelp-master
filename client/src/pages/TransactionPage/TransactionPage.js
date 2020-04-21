import React from "react";
import Header from "../../components/Header/Header";
import {TransactionTable} from "../../components/TransactionTable/TransactionTable";
import BackButton from "../../components/BackButton/BackButton";

export const TransactionPage = props => {

    const data = [
        {
            id: 1,
            operationType: "Spend",
            amount: 400
        }, {
            id: 2,
            operationType: "Earned",
            amount: 500
        }, {
            id: 3,
            operationType: "Spend",
            amount: 50
        },
    ];

    return (
        <>
            <Header/>
            <BackButton style={"background-color: pink"}/>
            <TransactionTable data={data}/>
        </>
    )
}