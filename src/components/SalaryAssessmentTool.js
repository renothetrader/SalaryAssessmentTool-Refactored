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

  // UAE - Software Engineer (AED)
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Entry', baseSalary: 65000, totalComp: 75000, percentile25: 60000, percentile50: 65000, percentile75: 70000 },
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Mid', baseSalary: 100000, totalComp: 120000, percentile25: 90000, percentile50: 100000, percentile75: 110000 },
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Senior', baseSalary: 145000, totalComp: 175000, percentile25: 130000, percentile50: 145000, percentile75: 160000 },
  { role: 'Software Engineer', location: 'UAE', experienceLevel: 'Lead', baseSalary: 165000, totalComp: 200000, percentile25: 150000, percentile50: 165000, percentile75: 180000 },

  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Entry', baseSalary: 68000, totalComp: 80000, percentile25: 60000, percentile50: 68000, percentile75: 70000 },
  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Mid', baseSalary: 105000, totalComp: 125000, percentile25: 90000, percentile50: 105000, percentile75: 110000 },
  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Senior', baseSalary: 150000, totalComp: 180000, percentile25: 130000, percentile50: 150000, percentile75: 160000 },
  { role: 'Software Engineer', location: 'Abu Dhabi', experienceLevel: 'Lead', baseSalary: 170000, totalComp: 205000, percentile25: 150000, percentile50: 170000, percentile75: 180000 },

  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Entry', baseSalary: 65000, totalComp: 78000, percentile25: 60000, percentile50: 65000, percentile75: 70000 },
  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Mid', baseSalary: 100000, totalComp: 120000, percentile25: 90000, percentile50: 100000, percentile75: 110000 },
  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Senior', baseSalary: 145000, totalComp: 175000, percentile25: 130000, percentile50: 145000, percentile75: 160000 },
  { role: 'Software Engineer', location: 'Dubai', experienceLevel: 'Lead', baseSalary: 165000, totalComp: 200000, percentile25: 150000, percentile50: 165000, percentile75: 180000 },

  // UAE - Product Manager (AED)
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Entry', baseSalary: 65000, totalComp: 80000, percentile25: 60000, percentile50: 65000, percentile75: 70000 },
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Mid', baseSalary: 100000, totalComp: 125000, percentile25: 90000, percentile50: 100000, percentile75: 110000 },
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Senior', baseSalary: 145000, totalComp: 180000, percentile25: 130000, percentile50: 145000, percentile75: 160000 },
  { role: 'Product Manager', location: 'UAE', experienceLevel: 'Lead', baseSalary: 170000, totalComp: 210000, percentile25: 150000, percentile50: 170000, percentile75: 180000 },

  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Entry', baseSalary: 68000, totalComp: 82000, percentile25: 60000, percentile50: 68000, percentile75: 70000 },
  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Mid', baseSalary: 105000, totalComp: 130000, percentile25: 90000, percentile50: 105000, percentile75: 110000 },
  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Senior', baseSalary: 150000, totalComp: 185000, percentile25: 130000, percentile50: 150000, percentile75: 160000 },
  { role: 'Product Manager', location: 'Abu Dhabi', experienceLevel: 'Lead', baseSalary: 175000, totalComp: 215000, percentile25: 150000, percentile50: 175000, percentile75: 180000 },

  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Entry', baseSalary: 65000, totalComp: 80000, percentile25: 60000, percentile50: 65000, percentile75: 70000 },
  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Mid', baseSalary: 100000, totalComp: 125000, percentile25: 90000, percentile50: 100000, percentile75: 110000 },
  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Senior', baseSalary: 145000, totalComp: 180000, percentile25: 130000, percentile50: 145000, percentile75: 160000 },
  { role: 'Product Manager', location: 'Dubai', experienceLevel: 'Lead', baseSalary: 170000, totalComp: 210000, percentile25: 150000, percentile50: 170000, percentile75: 180000 },

  // UAE - Data Analyst (AED)
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Entry', baseSalary: 65000, totalComp: 75000, percentile25: 60000, percentile50: 65000, percentile75: 70000 },
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Mid', baseSalary: 100000, totalComp: 120000, percentile25: 90000, percentile50: 100000, percentile75: 110000 },
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Senior', baseSalary: 140000, totalComp: 170000, percentile25: 130000, percentile50: 140000, percentile75: 160000 },
  { role: 'Data Analyst', location: 'UAE', experienceLevel: 'Lead', baseSalary: 160000, totalComp: 195000, percentile25: 150000, percentile50: 160000, percentile75: 180000 },

  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Entry', baseSalary: 68000, totalComp: 78000, percentile25: 60000, percentile50: 68000, percentile75: 70000 },
  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Mid', baseSalary: 105000, totalComp: 125000, percentile25: 90000, percentile50: 105000, percentile75: 110000 },
  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Senior', baseSalary: 145000, totalComp: 175000, percentile25: 130000, percentile50: 145000, percentile75: 160000 },
  { role: 'Data Analyst', location: 'Abu Dhabi', experienceLevel: 'Lead', baseSalary: 165000, totalComp: 200000, percentile25: 150000, percentile50: 165000, percentile75: 180000 },

  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Entry', baseSalary: 65000, totalComp: 77000, percentile25: 60000, percentile50: 65000, percentile75: 70000 },
  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Mid', baseSalary: 100000, totalComp: 120000, percentile25: 90000, percentile50: 100000, percentile75: 110000 },
  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Senior', baseSalary: 140000, totalComp: 170000, percentile25: 130000, percentile50: 140000, percentile75: 160000 },
  { role: 'Data Analyst', location: 'Dubai', experienceLevel: 'Lead', baseSalary: 160000, totalComp: 195000, percentile25: 150000, percentile50: 160000, percentile75: 180000 },
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
    if (!selected
