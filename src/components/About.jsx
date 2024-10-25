import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <h2 className="text-3xl font-bold mb-4">About the Rule Engine</h2>
      <p className="text-lg mb-6">
        The Rule Engine is designed to allow users to create, combine, and evaluate rules dynamically.
        It is a powerful tool for creating complex rules and evaluating them against data.
      </p>
      <p className="text-md mb-6">
        It utilizes Abstract Syntax Trees (AST) for efficient rule representation and evaluation.
        The rules can be created, combined, and evaluated in a dynamic manner, allowing for flexibility and scalability.  
      </p>
    </div>
  );
};

export default About;
