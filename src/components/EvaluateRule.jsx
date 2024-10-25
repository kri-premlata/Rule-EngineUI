import React, { useContext, useState } from 'react';
import axiosInstance from '../utlis/RuleAxios'; // Axios instance
import { RuleContext } from '../utlis/RuleContext';

const EvaluateRule = () => {
  const { rules } = useContext(RuleContext);
  const [ruleId, setRuleId] = useState('');
  const [data, setData] = useState({});
  const [evaluationResult, setEvaluationResult] = useState(null);
  
  const handleEvaluate = async () => {
    try {
      const response = await axiosInstance.post(`/evaluate`, { ruleId, data });
      setEvaluationResult(response); // Store the evaluation result
    } catch (error) {
      console.error("Error evaluating rule:", error);
    }
  };

  return (
    <div className="container text-start ml-28 mt-10">
      <h2 className="text-5xl text-yellow-500 font-bold mb-10">Evaluate Rule</h2>
      <select onChange={(e) => setRuleId(e.target.value)} value={ruleId}>
        <option 
        className='mr-10 mb-10'
        value="">Select a Rule</option>
        {rules.map((rule) => (
          <option key={rule._id} value={rule._id}>{rule.name}</option>
        ))}
      </select>
      <textarea
        placeholder="Enter data in JSON format"
        onChange={(e) => setData(JSON.parse(e.target.value))}
        className="px-3 py-3 w-1/2 border border-grey-300 rounded hover:border-yellow-500"
      />
      <button className="btn px-10 py-2 ml-7 bg-green-600 hover:bg-green-700 text-white hover:text-yellow-200 rounded-md mt-5 mb-10"
       onClick={handleEvaluate}>Evaluate Rule</button>
      {evaluationResult !== null && (
        <div className="mt-4">Evaluation Result: {evaluationResult ? 'True' : 'False'}</div>
      )}
    </div>
  );
};

export default EvaluateRule;
