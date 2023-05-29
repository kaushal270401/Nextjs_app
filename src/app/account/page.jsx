// "use client";
import React from "react";
import styles from "./account.module.css";
// import pool from '../../lib/db'

async function getData() {
  const res = await fetch("http://localhost:8000/data", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function updateData({id}) {
  fetch(`http://localhost:8000/data${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        ...data,showBalance:!showBalance
    }),
  });
}

export const metadata = {
  title: "ACCOUNTS PAGE",
};

export default async function Page() {
  const data = await getData();



  const dataFeild = data.map((data) => {
    return (
      <>
        <tr key={data.index} className={styles.tr}>
          <td className={styles.td}>{data.accountNumber}</td>
          <td className={styles.td}>{data.nickname}</td>
          <td className={styles.td}>{data.accountType}</td>
          <td className={styles.td}>
            {data.showBalance ? (
              data.balance
            ) : (
              <button
                onClick={updateData(id)}
                className={styles.btn}
              >
                
                Show Balance
              </button>
            )}
          </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div>
        <h1 className={styles.title}>Accounts</h1>
        <table className={styles.customers}>
          <thead>
            <tr>
              <th className={styles.td}>Account Number</th>
              <th className={styles.td}>Nickname</th>
              <th className={styles.td}>Account Type</th>
              <th className={styles.td}>Balance</th>
            </tr>
          </thead>
          <tbody>{dataFeild}</tbody>
        </table>
      </div>
    </>
  );
}
