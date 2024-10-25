import React, { useContext, useState } from 'react';
import axiosInstance from '../utlis/RuleAxios'; // Axios instance
import { RuleContext } from '../utlis/RuleContext';

const CombineRules = () => {
  const { rules, setRules } = useContext(RuleContext);
  const [combinedRule, setCombinedRule] = useState('');
  
  const handleCombineRules = async () => {
    try {
      const response = await axiosInstance.post('/combine', { rules: selectedRules });
      setCombinedRule(response); // Store the combined rule
    } catch (error) {
      console.error("Error combining rules:", error);
    }
  };

  const handleSelectRule = (rule) => {
    // Logic to select/deselect rules for combining
    const [selectedRules, setSelectedRules] = useState([]);

    if (selectedRules.includes(rule)) {
      setSelectedRules(selectedRules.filter(r => r !== rule));
    } else {
      setSelectedRules([...selectedRules, rule]);
    }
  };

  return (
    <div className="container mx-auto text-start ml-28 mt-10 W-[70%]">
      <h2 className="text-5xl text-yellow-500 font-bold mb-10">Combine Rules</h2>
      <div>
        {rules.map((rule) => (
          <div key={rule._id}>
            <input type="checkbox" onChange={() => handleSelectRule(rule)} /> {rule.name}
          </div>
        ))}
      </div>
      <button className="btn px-10 py-2 bg-green-600 hover:bg-green-700 text-white hover:text-yellow-200 rounded-md mt-5 mb-10" onClick={handleCombineRules}>Combine Selected Rules</button>
      {combinedRule && <div className="mt-4">Combined Rule: {combinedRule}</div>}
    </div>
  );
};

export default CombineRules;
