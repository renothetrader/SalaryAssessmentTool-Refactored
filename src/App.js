import React from 'react';
import './App.css';
import SalaryAssessmentTool from './components/SalaryAssessmentTool';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Salary Assessment Tool</h1>
        <p>Compare and analyze salary data across different roles and locations</p>
      </header>
      <main className="App-main">
        <SalaryAssessmentTool />
      </main>
    </div>
  );
}

export default App;
