"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Use useRouter from next/navigation
  const [showPopup, setShowPopup] = useState(false);

  const Popup = () => (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md shadow-lg">
        <p>Invalid input. Please enter valid reservation details.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowPopup(false)}
        >
          Close
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    setIsClient(typeof window !== "undefined"); // Set true if on the client side

    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const handleButtonClick = async () => {
    const isValid = checkIsEmpty();
    if (isValid) {
      router.push("/pages/confirmReservation");
    } else {
      alert("Please enter at least 23 characters.");
    }
  };

  const checkIsEmpty = (): boolean => {
    const input = document.getElementById(
      "reservationDetails"
    ) as HTMLInputElement;
    if (input && input.value.length >= 23) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.MainContainer}>
        <h1>Welcome, {greeting}</h1>
        <h2>Enter your reservation details below</h2>
        <p className="divider">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - -
        </p>
        <h2>Reservation Details</h2>
        <div>
          <textarea
            name="details"
            id="reservationDetails"
            placeholder="Please enter your reservation details here"
            required
          ></textarea>
        </div>
        <p className="divider">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - -
        </p>
        <div className="bottomButtons">
          <button onClick={handleButtonClick}>Next</button>
        </div>
      </div>
    </main>
  );
}
