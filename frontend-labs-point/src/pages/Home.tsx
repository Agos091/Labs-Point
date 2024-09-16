import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo ao Labs Point</h1>
      <Link to="/tasks">Ver Tarefas</Link>
    </div>
  );
};

export default Home;
export {};
