import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const Tasks: React.FC = () => {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: "Task 1",
      description: "Descrição da Task 1",
      status: "Pendente",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Descrição da Task 2",
      status: "Em Progresso",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Descrição da Task 3",
      status: "Concluída",
    },
  ]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
export {};
