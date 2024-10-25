import React, { createContext, useState } from 'react';

export const RuleContext = createContext();

const RuleProvider = ({ children }) => {
  const [rules, setRules] = useState([]);

  return (
    <RuleContext.Provider value={[ rules, setRules ]}>
      {children}
    </RuleContext.Provider>
  );
};

export default RuleProvider;
