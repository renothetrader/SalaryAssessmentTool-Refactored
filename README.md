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

The application will open in your browser at `http://localhost:3000`.

## Vercel Deployment

This application is deployed on Vercel with automatic deployments enabled.

### Live Deployment
🚀 **Production URL**: [https://salary-assessment-tool-refactored.vercel.app](https://salary-assessment-tool-refactored.vercel.app)

### Deployment Configuration
- **Platform**: Vercel
- **Framework Preset**: Create React App
- **Build Command**: `npm run build` or `react-scripts build`
- **Output Directory**: `build`
- **Install Command**: `npm install`
- **Node.js Version**: 22.x
- **Production Branch**: `main`

### Automatic Deployments
The project is configured for automatic deployments:
- **Production Deployments**: Automatically triggered on push to the `main` branch
- **Preview Deployments**: Automatically created for pull requests
- **Git Integration**: Connected to GitHub repository `renothetrader/SalaryAssessmentTool-Refactored`

### Deployment Process
1. Push changes to the `main` branch
2. Vercel automatically detects the changes
3. Builds the React application using Create React App
4. Deploys to production URL
5. Deployment typically completes in 1-2 minutes

### Managing Deployments
- View deployment history: [Vercel Dashboard](https://vercel.com/renothetraders-projects/salary-assessment-tool-refactored)
- Monitor build logs and deployment status
- Rollback to previous deployments if needed
- Configure custom domains in Vercel project settings

## Usage
Once the application is running:
1. Select a job role from the dropdown menu
2. Choose a location
3. Select an experience level
4. View the calculated salary information including:
   - Base salary
   - Total compensation
   - Percentile breakdowns (25th, 50th, 75th)
   - Salary recommendations

## Adding New Data
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
