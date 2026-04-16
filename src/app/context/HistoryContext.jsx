"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, setHistory] = useState();

  useEffect(() => {
    const stored = localStorage.getItem("app-History");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  const addToHistory = (friend, type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type: type,
      date: new Date().toISOString,
    };

    const updated = [newEntry, ...history];
    setHistory(updated);

    localStorage.setItem("app-History", JSON.stringify(updated));
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  return useContext(HistoryContext);
}
