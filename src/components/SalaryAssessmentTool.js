import React, { useState } from 'react';
import './SalaryAssessmentTool.css';

// Updated salary data with Min-Mid-Max format (UAE standard)
const salaryData = [
  // Software Engineer - San Francisco
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Entry', minSalary: 110000, midSalary: 120000, maxSalary: 135000, currency: 'USD' },
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Mid', minSalary: 135000, midSalary: 145000, maxSalary: 165000, currency: 'USD' },
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Senior', minSalary: 170000, midSalary: 180000, maxSalary: 200000, currency: 'USD' },
  { role: 'Software Engineer', location: 'San Francisco', experienceLevel: 'Lead', minSalary: 200000, midSalary: 220000, maxSalary: 250000, currency: 'USD' },

  // Software Engineer - New York
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Entry', minSalary: 105000, midSalary: 115000, maxSalary: 130000, currency: 'USD' },
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Mid', minSalary: 130000, midSalary: 140000, maxSalary: 155000, currency: 'USD' },
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Senior', minSalary: 160000, midSalary: 170000, maxSalary: 190000, currency: 'USD' },
  { role: 'Software Engineer', location: 'New York', experienceLevel: 'Lead', minSalary: 190000, midSalary: 210000, maxSalary: 240000, currency: 'USD' },

  // Software Engineer - Seattle
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Entry', minSalary: 100000, midSalary: 110000, maxSalary: 125000, currency: 'USD' },
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Mid', minSalary: 125000, midSalary: 135000, maxSalary: 150000, currency: 'USD' },
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Senior', minSalary: 155000, midSalary: 165000, maxSalary: 185000, currency: 'USD' },
  { role: 'Software Engineer', location: 'Seattle', experienceLevel: 'Lead', minSalary: 185000, midSalary: 200000, maxSalary: 230000, currency: 'USD' },

  // Data Scientist - San Francisco
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Entry', minSalary: 105000, midSalary: 115000, maxSalary: 130000, currency: 'USD' },
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Mid', minSalary: 130000, midSalary: 140000, maxSalary: 155000, currency: 'USD' },
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Senior', minSalary: 165000, midSalary: 175000, maxSalary: 195000, currency: 'USD' },
  { role: 'Data Scientist', location: 'San Francisco', experienceLevel: 'Lead', minSalary: 195000, midSalary: 215000, maxSalary: 245000, currency: 'USD' },

  // Data Scientist - New York
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Entry', minSalary: 100000, midSalary: 110000, maxSalary: 125000, currency: 'USD' },
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Mid', minSalary: 125000, midSalary: 135000, maxSalary: 150000, currency: 'USD' },
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Senior', minSalary: 160000, midSalary: 170000, maxSalary: 190000, currency: 'USD' },
  { role: 'Data Scientist', location: 'New York', experienceLevel: 'Lead', minSalary: 190000, midSalary: 210000, maxSalary: 240000, currency: 'USD' },

  // Product Manager - San Francisco
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Entry', minSalary: 110000, midSalary: 120000, maxSalary: 135000, currency: 'USD' },
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Mid', minSalary: 140000, midSalary: 150000, maxSalary: 170000, currency: 'USD' },
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Senior', minSalary: 175000, midSalary: 185000, maxSalary: 210000, currency: 'USD' },
  { role: 'Product Manager', location: 'San Francisco', experienceLevel: 'Lead', minSalary: 205000, midSalary: 225000, maxSalary: 255000, currency: 'USD' },

  // DevOps Engineer - San Francisco
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Entry', minSalary: 105000, midSalary: 115000, maxSalary: 130000, currency: 'USD' },
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Mid', minSalary: 130000, midSalary: 140000, maxSalary: 155000, currency: 'USD' },
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Senior', minSalary: 165000, midSalary: 175000, maxSalary: 195000, currency: 'USD' },
  { role: 'DevOps Engineer', location: 'San Francisco', experienceLevel: 'Lead', minSalary: 195000, midSalary: 215000, maxSalary: 245000, currency: 'USD' },

  // UAE - Software Engineer (AED)
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Entry', minSalary: 60000, midSalary: 65000, maxSalary: 70000, currency: 'AED' },
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Mid', minSalary: 90000, midSalary: 100000, maxSalary: 110000, currency: 'AED' },
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Senior', minSalary: 130000, midSalary: 145000, maxSalary: 160000, currency: 'AED' },
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Lead', minSalary: 150000, midSalary: 165000, maxSalary: 180000, currency: 'AED' },

  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Entry', minSalary: 60000, midSalary: 68000, maxSalary: 70000, currency: 'AED' },
  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Mid', minSalary: 90000, midSalary: 105000, maxSalary: 110000, currency: 'AED' },
  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Senior', minSalary: 130000, midSalary: 150000, maxSalary: 160000, currency: 'AED' },
  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Lead', minSalary: 150000, midSalary: 170000, maxSalary: 180000, currency: 'AED' },

  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Entry', minSalary: 60000, midSalary: 65000, maxSalary: 70000, currency: 'AED' },
  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Mid', minSalary: 90000, midSalary: 100000, maxSalary: 110000, currency: 'AED' },
  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Senior', minSalary: 130000, midSalary: 145000, maxSalary: 160000, currency: 'AED' },
  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Lead', minSalary: 150000, midSalary: 165000, maxSalary: 180000, currency: 'AED' },

  // UAE - Product Manager (AED)
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Entry', minSalary: 60000, midSalary: 65000, maxSalary: 70000, currency: 'AED' },
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Mid', minSalary: 90000, midSalary: 100000, maxSalary: 110000, currency: 'AED' },
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Senior', minSalary: 130000, midSalary: 145000, maxSalary: 160000, currency: 'AED' },
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Lead', minSalary: 150000, midSalary: 170000, maxSalary: 180000, currency: 'AED' },

  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Entry', minSalary: 60000, midSalary: 68000, maxSalary: 70000, currency: 'AED' },
  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Mid', minSalary: 90000, midSalary: 105000, maxSalary: 110000, currency: 'AED' },
  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Senior', minSalary: 130000, midSalary: 150000, maxSalary: 160000, currency: 'AED' },
  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Lead', minSalary: 150000, midSalary: 175000, maxSalary: 180000, currency: 'AED' },

  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Entry', minSalary: 60000, midSalary: 65000, maxSalary: 70000, currency: 'AED' },
  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Mid', minSalary: 90000, midSalary: 100000, maxSalary: 110000, currency: 'AED' },
  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Senior', minSalary: 130000, midSalary: 145000, maxSalary: 160000, currency: 'AED' },
  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Lead', minSalary: 150000, midSalary: 170000, maxSalary: 180000, currency: 'AED' },

  // UAE - Data Analyst (AED)
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Entry', minSalary: 60000, midSalary: 65000, maxSalary: 70000, currency: 'AED' },
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Mid', minSalary: 90000, midSalary: 100000, maxSalary: 110000, currency: 'AED' },
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Senior', minSalary: 130000, midSalary: 140000, maxSalary: 160000, currency: 'AED' },
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Lead', minSalary: 150000, midSalary: 160000, maxSalary: 180000, currency: 'AED' },

  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Entry', minSalary: 60000, midSalary: 68000, maxSalary: 70000, currency: 'AED' },
  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Mid', minSalary: 90000, midSalary: 105000, maxSalary: 110000, currency: 'AED' },
  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Senior', minSalary: 130000, midSalary: 145000, maxSalary: 160000, currency: 'AED' },
  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Lead', minSalary: 150000, midSalary: 165000, maxSalary: 180000, currency: 'AED' },

  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Entry', minSalary: 60000, midSalary: 65000, maxSalary: 70000, currency: 'AED' },
  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Mid', minSalary: 90000, midSalary: 100000, maxSalary: 110000, currency: 'AED' },
  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Senior', minSalary: 130000, midSalary: 140000, maxSalary: 160000, currency: 'AED' },
  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Lead', minSalary: 150000, midSalary: 160000, maxSalary: 180000, currency: 'AED' },
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

    const matchedData = salaryData.find(
      item =>
        item.role === selectedRole &&
        item.location === selectedLocation &&
        item.experienceLevel === selectedExperience
    );

    if (matchedData) {
      setResults(matchedData);
    } else {
      setResults(null);
      alert('No salary data found for this combination');
    }
  };

  const formatSalary = (amount, currency) => {
    return `${currency} ${amount.toLocaleString()}`;
  };

  return (
    <div className="salary-tool-container">
      <h1>Salary Assessment Tool</h1>
      <p className="subtitle">Min-Mid-Max Salary Range Format</p>

      <div className="form-container">
        <div className="form-group">
          <label>Role</label>
          <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
            <option value="">Select Role</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Location</label>
          <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
            <option value="">Select Location</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Experience Level</label>
          <select value={selectedExperience} onChange={(e) => setSelectedExperience(e.target.value)}>
            <option value="">Select Experience</option>
            {experienceLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        <button onClick={handleAssessment} className="assess-button">
          Get Salary Range
        </button>
      </div>

      {results && (
        <div className="results-container">
          <h2>Salary Range Results</h2>
          <div className="salary-ranges">
            <div className="salary-card min">
              <h3>Minimum</h3>
              <p className="amount">{formatSalary(results.minSalary, results.currency)}</p>
              <span className="label">Entry level for this role</span>
            </div>
            <div className="salary-card mid">
              <h3>Mid-Point</h3>
              <p className="amount">{formatSalary(results.midSalary, results.currency)}</p>
              <span className="label">Market average</span>
            </div>
            <div className="salary-card max">
              <h3>Maximum</h3>
              <p className="amount">{formatSalary(results.maxSalary, results.currency)}</p>
              <span className="label">Top performer range</span>
            </div>
          </div>
          <div className="results-info">
            <p><strong>Role:</strong> {results.role}</p>
            <p><strong>Location:</strong> {results.location}</p>
            <p><strong>Experience:</strong> {results.experienceLevel}</p>
            <p><strong>Currency:</strong> {results.currency}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalaryAssessmentTool;
