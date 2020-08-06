import React, { useState } from 'react';
import Bill from './index';

const user = { name: '', email: '' };

const BillContext = ({ children }) => {
  const [userData, setUserData] = useState(user);
  const [userEntries, setUserEntries] = useState([]);
  const [userDespesas, setUserDespesas] = useState([]);

  const handleChangeUser = (input) => {
    const { name, email } = input;
    const inputsLogin = { name, email };
    setUserData(inputsLogin);
  };

  const getUserEntries = (key) => {
    // localStorage.getItem(key) && setUserEntries(data);
    const local = JSON.parse(localStorage.getItem(key));
    setUserEntries(local);
  };

  const getUserDespesas = (data) => {
    setUserDespesas([...userDespesas, data]);
  };

  const context = {
    userData,
    handleChangeUser,
    userEntries,
    getUserEntries,
    userDespesas,
    getUserDespesas,
  };

  return <Bill.Provider value={context}>{children}</Bill.Provider>;
};

export default BillContext;
