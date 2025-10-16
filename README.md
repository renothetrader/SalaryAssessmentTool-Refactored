# SalaryAssessmentTool-Refactored

A React-based Salary Assessment Tool for benchmarking compensation data across different roles, locations, and experience levels. This application provides an interactive interface to analyze salary data with embedded datasets.

## Overview

The Salary Assessment Tool helps users:
- Compare salaries across different job roles and locations
- Analyze compensation based on experience levels
- View salary distributions and percentile rankings
- Access comprehensive embedded salary data

## Features

- **Interactive Salary Comparison**: Select role, location, and experience level to view detailed salary statistics
- **Embedded Data**: All salary data is stored directly in the JavaScript file (no external API or .env file needed)
- **React-based UI**: Modern, responsive interface built with React
- **Comprehensive Data**: Includes salary information across multiple tech roles and major cities

## Project Structure

```
SalaryAssessmentTool-Refactored/
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── App.js
│   └── components/
│       └── SalaryAssessmentTool.js
└── README.md
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/renothetrader/SalaryAssessmentTool-Refactored.git
cd SalaryAssessmentTool-Refactored
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Usage

### Basic Usage

1. Select a job role from the dropdown (e.g., Software Engineer, Data Scientist)
2. Choose a location (e.g., San Francisco, New York, Austin)
3. Select your experience level (Entry, Mid, Senior, Lead)
4. View the salary assessment results including:
   - Median salary
   - Salary range (25th-75th percentile)
   - Market position

### Example Usage in Code

The SalaryAssessmentTool component can be imported and used as follows:

```jsx
import React from 'react';
import SalaryAssessmentTool from './components/SalaryAssessmentTool';

function App() {
  return (
    <div className="App">
      <h1>Salary Benchmarking Portal</h1>
      <SalaryAssessmentTool />
    </div>
  );
}

export default App;
```

## Embedded Salary Data

The tool includes comprehensive salary data for the following roles:

### Roles Covered:
- Software Engineer
- Senior Software Engineer
- Data Scientist
- Product Manager
- DevOps Engineer
- Frontend Developer
- Backend Developer
- Full Stack Developer
- Mobile Developer
- QA Engineer

### Locations:
- San Francisco, CA
- New York, NY
- Seattle, WA
- Austin, TX
- Boston, MA
- Los Angeles, CA
- Chicago, IL
- Denver, CO

### Experience Levels:
- Entry Level (0-2 years)
- Mid Level (3-5 years)
- Senior Level (6-10 years)
- Lead/Principal (10+ years)

### Sample Data Structure

Salary data is embedded in the following format:

```javascript
const salaryData = [
  {
    role: 'Software Engineer',
    location: 'San Francisco',
    experienceLevel: 'Mid',
    baseSalary: 145000,
    totalComp: 185000,
    percentile25: 125000,
    percentile50: 145000,
    percentile75: 170000
  },
  // ... more entries
];
```

## Dependencies

The project uses the following main dependencies:

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1"
}
```

## Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

### Adding New Salary Data

To add new salary data, edit the `salaryData` array in `src/components/SalaryAssessmentTool.js`:

```javascript
const salaryData = [
  // ... existing data
  {
    role: 'New Role',
    location: 'New Location',
    experienceLevel: 'Mid',
    baseSalary: 120000,
    totalComp: 150000,
    percentile25: 110000,
    percentile50: 120000,
    percentile75: 135000
  }
];
```

## Technical Details

### Component Architecture

The main component (`SalaryAssessmentTool.js`) includes:
- State management for role, location, and experience selections
- Embedded salary data array
- Filtering logic to match user selections
- Display of salary statistics and recommendations

### No Environment Variables

All data is embedded directly in the JavaScript files. No `.env` file is needed or used.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Note**: This tool is for educational and informational purposes. Salary data should be verified with current market research for accurate compensation planning.
