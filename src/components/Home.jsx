import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <h2 className="text-5xl font-bold mb-8 text-yellow-500">Welcome to the Rule Engine</h2>
      <p className="text-lg mb-6">
        This application allows you to create, update, evaluate, and manage rules using an Abstract Syntax Tree (AST).
      </p>
      <p className="text-md mb-6 text-green-600 font-bold">
        Use the navigation bar above to get started.
      </p>
      <div className="flex justify-center">
        <img 
          src="https://i.pinimg.com/736x/ea/ab/31/eaab317fbbd611a852a4aa8a2f8072dd.jpg" 
          alt="Rule Engine" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HomePage;
