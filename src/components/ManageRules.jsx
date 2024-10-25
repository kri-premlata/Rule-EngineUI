import React, { useContext } from 'react';
import axiosInstance from '../utlis/RuleAxios'; // Axios instance
import { RuleContext } from '../utlis/RuleContext';

const ManageRule = () => {
  const { rules, setRules } = useContext(RuleContext);

  const handleDelete = async (ruleId) => {
    try {
      await axiosInstance.delete(`/rules/${ruleId}`); // API call to delete the rule
      setRules((prevRules) => prevRules.filter((rule) => rule._id !== ruleId)); // Update state to remove the deleted rule
    } catch (error) {
      console.error("Error deleting rule:", error);
    }
  };

  return (
    <div className="container mx-auto text-start ml-28 mt-10">
      <h2 className="text-5xl text-yellow-500 font-bold mb-10">Manage Rules</h2>
      <ul className="mt-4 space-y-2">
        {rules.map((rule) => (
          <li key={rule._id} className="flex justify-between items-center p-4 border rounded shadow-md">
            <span className="font-semibold">{rule.name}</span>
            <button 
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              onClick={() => handleDelete(rule._id)} // Call handleDelete on click
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRule;
