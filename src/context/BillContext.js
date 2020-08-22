import React, { useState } from 'react';
import Bill from './index';

const BillContext = ({ children }) => {
  const [userOut, setUserOut] = useState([]);
  const [entries, setEntries] = useState([]);
  const [userData, setUserData] = useState({});

  const getUserOut = (key) => {
    const out = JSON.parse(localStorage.getItem(key));
    setUserOut(out);
  };

  const getEntries = (key) => {
    const entry = JSON.parse(localStorage.getItem(key));
    setEntries(entry);
  };

  const getUserData = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    setUserData(data);
  };

  const context = {
    userOut,
    getUserOut,
    userData,
    getUserData,
    entries,
    getEntries,
  };

  return <Bill.Provider value={context}>{children}</Bill.Provider>;
};

export default BillContext;
