"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(typeof window !== "undefined"); 

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const handleCancelClick = async () => {
    router.push("/");
  };

  const handleConfirmationClick = async () => {
    router.push("/pages/invoiceReseveration");
  };

  return (
    <main className={styles.main}>
      <div className={styles.MainContainer}>
        <h1>Welcome, {greeting}</h1>
        <h2>Reservation Summary</h2>
        <p className="divider">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - -
        </p>
        <div className={styles.summaryBody}>
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
          <button onClick={handleCancelClick}>Cancel</button>
          <button onClick={handleConfirmationClick}>Confirm</button>
        </div>
      </div>
    </main>
  );
}
