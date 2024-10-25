import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import CreateRule from "../components/CreateRule";
import EvaluateRule from "../components/EvaluateRule";
import CombineRules from "../components/CombineRules";
import ManageRules from "../components/ManageRules";
import UpdateRules from "../components/UpdateRules";
import AboutRuleEngine from "../components/AboutRuleEngine";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateRule />} />
      <Route path="/combine" element={<CombineRules />} />
      <Route path="/evaluate" element={<EvaluateRule />} />
      <Route path="/update" element={<UpdateRules />} />
      <Route path="/manage" element={<ManageRules />} />
      <Route path="/about" element={<AboutRuleEngine />} />
    </Routes>
  );
};

export default MainRoutes;
