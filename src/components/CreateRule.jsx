import { useState } from 'react';
import axiosInstance from '../utlis/RuleAxios';

const CreateRule = () => {
  const [ruleString, setRuleString] = useState('');
  const [ruleName, setRuleName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!ruleName.trim()) {
      setError('Rule name is required');
      return;
    }

    try {
      const response = await axiosInstance.post('/create', { name: ruleName, ruleString });
    //   const response = await axios.post('http://localhost:3000/api/rules/create', { name: ruleName, ruleString });
      setRules((prevRules) => [...prevRules, response.data]);
      alert('Rule created successfully');
      setRuleString('');
      setRuleName('');

    } catch (error) {
      setError('Error creating rule: ' + (error.response?.data?.message || error.message));
    }
    
    console.log(ruleName);
    console.log(ruleString);
  };

  return (
    <div className="container mx-auto text-start ml-28 mt-10 W-[70%]">
      <h2 className="text-5xl text-yellow-500 font-bold mb-10">Create New Rule</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-[40%] ml-60">
        <div>
          <label htmlFor="ruleName" className="block p-2 text-2xl font-semibold mt-5 text-gray-700">Rule Name</label>
          <input
            type="text"
            id="ruleName"
            value={ruleName}
            onChange={(e) => setRuleName(e.target.value)}
            className="px-3 py-3 w-full border border-grey-300 rounded hover:border-yellow-500"
            required
            placeholder='Enter Rule Name'
          />
        </div>
        <div>
          <label htmlFor="ruleString" className="block p-2 text-2xl font-semibold mt-5 text-gray-7000">Rule String</label>
          <textarea 
            id="ruleString"
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            placeholder="Enter your rule string here... (e.g., (age > 30 AND department = 'Sales') OR (salary > 50000))"
            className="px-3 py-3 w-full border border-grey-300 rounded hover:border-yellow-500"
            rows="4"
            required
            
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="px-10 py-2 bg-green-600 hover:bg-green-700 text-white hover:text-yelloe-200 rounded-md mt-5 mb-10">
          Create Rule
        </button>
      </form>
    </div>
  );
};

export default CreateRule;
