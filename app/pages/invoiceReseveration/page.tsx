"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = async () => {
    router.push("/");
  };

  return (
    <main className={styles.main}>
      <div className={styles.MainContainer}>
        <h1>Thank You</h1>
        <h2>Your Reservation Was Successful</h2>
        <p className="divider">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - -
        </p>
        <div className={styles.summaryBody}>
          <div className={styles.summaryItem}>
            <div className={styles.summaryDivider}></div>
            <div className={styles.summaryDetailsID}>
              <h2>Confirmation ID</h2>
              <p>129461241092</p>
            </div>
          </div>
          <div className={styles.summaryRowOne}>
            <div className={styles.summaryItem}>
              <div className={styles.summaryDivider}></div>
              <div className={styles.summaryDetails}>
                <h2>Client Name</h2>
                <p>John Doe</p>
              </div>
            </div>
            <div className={styles.summaryItem}>
              <div className={styles.summaryDivider}></div>
              <div className={styles.summaryDetails}>
                <h2>Source</h2>
                <p>Colombo</p>
              </div>
            </div>
          </div>
          <div className={styles.summaryRowTwo}>
            <div className={styles.summaryItem}>
              <div className={styles.summaryDivider}></div>
              <div className={styles.summaryDetails}>
                <h2>Destination</h2>
                <p>Miami</p>
              </div>
            </div>
            <div className={styles.summaryItem}>
              <div className={styles.summaryDivider}></div>
              <div className={styles.summaryDetails}>
                <h2>Travel Date</h2>
                <p>2023-11-23</p>
              </div>
            </div>
          </div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryDivider}></div>
            <div className={styles.summaryDetails}>
              <h2>Promo Code</h2>
              <p>VSC23-SAMP-1113-STEV</p>
            </div>
          </div>
        </div>
        <p className="divider">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - -
        </p>
        <div className={styles.bottomButtons}>
          <button onClick={handleButtonClick}>Book Another Reservation</button>
        </div>
      </div>
    </main>
  );
}
