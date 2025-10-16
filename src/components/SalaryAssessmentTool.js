import React, { useState } from 'react';
import './SalaryAssessmentTool.css';

// Embedded salary data - no external API or .env needed
const salaryData = [
  // Software Engineer - San Francisco
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Entry', baseSalary: 120000, totalComp: 145000, percentile25: 110000, percentile50: 120000, percentile75: 135000 },
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Mid', baseSalary: 145000, totalComp: 185000, percentile25: 135000, percentile50: 145000, percentile75: 165000 },
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Senior', baseSalary: 180000, totalComp: 250000, percentile25: 170000, percentile50: 180000, percentile75: 200000 },
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Lead', baseSalary: 220000, totalComp: 350000, percentile25: 200000, percentile50: 220000, percentile75: 250000 },
  
  // Software Engineer - New York
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Entry', baseSalary: 115000, totalComp: 140000, percentile25: 105000, percentile50: 115000, percentile75: 130000 },
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Mid', baseSalary: 140000, totalComp: 175000, percentile25: 130000, percentile50: 140000, percentile75: 155000 },
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Senior', baseSalary: 170000, totalComp: 230000, percentile25: 160000, percentile50: 170000, percentile75: 190000 },
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Lead', baseSalary: 210000, totalComp: 320000, percentile25: 190000, percentile50: 210000, percentile75: 240000 },
  
  // Software Engineer - Seattle
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Entry', baseSalary: 110000, totalComp: 135000, percentile25: 100000, percentile50: 110000, percentile75: 125000 },
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Mid', baseSalary: 135000, totalComp: 170000, percentile25: 125000, percentile50: 135000, percentile75: 150000 },
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Senior', baseSalary: 165000, totalComp: 220000, percentile25: 155000, percentile50: 165000, percentile75: 185000 },
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Lead', baseSalary: 200000, totalComp: 300000, percentile25: 185000, percentile50: 200000, percentile75: 230000 },
  
  // Data Scientist - San Francisco
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Entry', baseSalary: 115000, totalComp: 140000, percentile25: 105000, percentile50: 115000, percentile75: 130000 },
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Mid', baseSalary: 140000, totalComp: 175000, percentile25: 130000, percentile50: 140000, percentile75: 155000 },
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Senior', baseSalary: 175000, totalComp: 240000, percentile25: 165000, percentile50: 175000, percentile75: 195000 },
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Lead', baseSalary: 215000, totalComp: 330000, percentile25: 195000, percentile50: 215000, percentile75: 245000 },
  
  // Data Scientist - New York
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Entry', baseSalary: 110000, totalComp: 135000, percentile25: 100000, percentile50: 110000, percentile75: 125000 },
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Mid', baseSalary: 135000, totalComp: 165000, percentile25: 125000, percentile50: 135000, percentile75: 150000 },
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Senior', baseSalary: 170000, totalComp: 225000, percentile25: 160000, percentile50: 170000, percentile75: 190000 },
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Lead', baseSalary: 210000, totalComp: 315000, percentile25: 190000, percentile50: 210000, percentile75: 240000 },
  
  // Product Manager - San Francisco
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Entry', baseSalary: 120000, totalComp: 150000, percentile25: 110000, percentile50: 120000, percentile75: 135000 },
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Mid', baseSalary: 150000, totalComp: 195000, percentile25: 140000, percentile50: 150000, percentile75: 170000 },
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Senior', baseSalary: 185000, totalComp: 260000, percentile25: 175000, percentile50: 185000, percentile75: 210000 },
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Lead', baseSalary: 225000, totalComp: 360000, percentile25: 205000, percentile50: 225000, percentile75: 255000 },
  
  // DevOps Engineer - San Francisco
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Entry', baseSalary: 115000, totalComp: 140000, percentile25: 105000, percentile50: 115000, percentile75: 130000 },
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Mid', baseSalary: 140000, totalComp: 175000, percentile25: 130000, percentile50: 140000, percentile75: 155000 },
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Senior', baseSalary: 175000, totalComp: 235000, percentile25: 165000, percentile50: 175000, percentile75: 195000 },
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Lead', baseSalary: 215000, totalComp: 325000, percentile25: 195000, percentile50: 215000, percentile75: 245000 },
];

const SalaryAssessmentTool = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [results, setResults] = useState(null);

  // Extract unique values for dropdowns
  const roles = [...new Set(salaryData.map(item => item.role))];
  const locations = [...new Set(salaryData.map(item => item.location))];
  const experienceLevels = ['Entry', 'Mid', 'Senior', 'Lead'];

  const handleAssessment = () => {
    if (!selectedRole || !selectedLocation || !selectedExperience) {
      alert('Please select all fields');
      return;
    }

    const matchingData = salaryData.find(
      item => 
        item.role === selectedRole && 
        item.location === selectedLocation && 
        item.experienceLevel === selectedExperience
    );

    if (matchingData) {
      setResults(matchingData);
    } else {
      setResults(null);
      alert('No data available for this combination');
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="salary-assessment-container">
      <div className="assessment-form">
        <h2>Salary Assessment</h2>
        <p className="form-description">Select your role, location, and experience level to view salary data</p>
        
        <div className="form-group">
          <label htmlFor="role">Job Role</label>
          <select 
            id="role"
            value={selectedRole} 
            onChange={(e) => setSelectedRole(e.target.value)}
            className="form-select"
          >
            <option value="">Select a role...</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select 
            id="location"
            value={selectedLocation} 
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="form-select"
          >
            <option value="">Select a location...</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience Level</label>
          <select 
            id="experience"
            value={selectedExperience} 
            onChange={(e) => setSelectedExperience(e.target.value)}
            className="form-select"
          >
            <option value="">Select experience level...</option>
            {experienceLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <button onClick={handleAssessment} className="assess-button">
          Assess Salary
        </button>
      </div>

      {results && (
        <div className="results-container">
          <h2>Salary Assessment Results</h2>
          <div className="results-grid">
            <div className="result-card">
              <h3>Base Salary</h3>
              <p className="salary-amount">{formatCurrency(results.baseSalary)}</p>
              <p className="salary-label">Annual Base</p>
            </div>
            
            <div className="result-card">
              <h3>Total Compensation</h3>
              <p className="salary-amount">{formatCurrency(results.totalComp)}</p>
              <p className="salary-label">Base + Bonus + Equity</p>
            </div>
            
            <div className="result-card highlight">
              <h3>Salary Range</h3>
              <div className="range-details">
                <div className="range-item">
                  <span className="range-label">25th Percentile:</span>
                  <span className="range-value">{formatCurrency(results.percentile25)}</span>
                </div>
                <div className="range-item">
                  <span className="range-label">50th Percentile:</span>
                  <span className="range-value">{formatCurrency(results.percentile50)}</span>
                </div>
                <div className="range-item">
                  <span className="range-label">75th Percentile:</span>
                  <span className="range-value">{formatCurrency(results.percentile75)}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="info-section">
            <h3>About This Data</h3>
            <p>This salary data represents typical compensation for a <strong>{results.experienceLevel}</strong> level <strong>{results.role}</strong> in <strong>{results.location}</strong>.</p>
            <p>Percentiles indicate where a given salary falls relative to others in the same role and location.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryAssessmentTool;
