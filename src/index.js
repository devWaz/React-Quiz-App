import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QuizProvider } from "./contexts/quiz";
import Quiz from "./components/quiz";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
    <Quiz/>
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


