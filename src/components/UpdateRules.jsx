import React, { useContext, useState, useEffect } from 'react';
import axiosInstance from '../utlis/RuleAxios';
import { RuleContext } from '../utlis/RuleContext';

const UpdateRules = () => {
  const { rules, setRules } = useContext(RuleContext);
  const [selectedRule, setSelectedRule] = useState('');
  const [updatedRuleString, setUpdatedRuleString] = useState('');

  useEffect(() => {
    if (selectedRule) {
      const rule = rules.find(r => r._id === selectedRule);
      setUpdatedRuleString(rule ? rule.ruleString : '');
    }
  }, [selectedRule, rules]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!selectedRule) {
      alert('Please select a rule to update');
      return;
    }
    try {
      const response = await axiosInstance.put(`/rules/${selectedRule}`, { ruleString: updatedRuleString });
      setRules(prevRules => prevRules.map(rule => 
        rule._id === selectedRule ? response.data : rule
      ));
      alert('Rule updated successfully');
    } catch (error) {
      console.error('Error updating rule:', error);
      alert('Error updating rule');
    }
  };

  return (
    <div className="container mx-auto text-start ml-48 mt-10 W-full">
      <h2 className="text-5xl text-yellow-500 font-bold mb-10">Update Rule</h2>
      <form onSubmit={handleUpdate}>
        <select 
          value={selectedRule}
          onChange={(e) => setSelectedRule(e.target.value)}
          className="px-3 py-3 w-1/2 mb-5 border border-grey-300 rounded hover:border-yellow-500"
          required
        >
          <option value="">Select a rule to update</option>
          {rules.map((rule) => (
            <option key={rule._id} value={rule._id}>{rule.name}</option>
          ))}
        </select>
        <textarea 
          value={updatedRuleString}
          onChange={(e) => setUpdatedRuleString(e.target.value)}
          placeholder="Enter updated rule string here..."
          className="px-3 py-3 w-[60%] border border-grey-300 rounded hover:border-yellow-500"
          rows="4"
          required
        />
        <br />
        <button type="submit" className="px-16  py-2 bg-green-600 hover:bg-green-700 text-white hover:text-yelloe-200 rounded-md mt-5 mb-10">Update Rule</button>
      </form>
    </div>
  );
};

export default UpdateRules;
