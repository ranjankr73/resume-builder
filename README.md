# AI-Powered Resume Builder

An intelligent web application that helps users create professional resumes with AI-powered suggestions.

## Features

- Interactive form-based resume creation
- Real-time resume preview
- AI-powered suggestions for skills and job descriptions
- PDF export functionality
- Professional resume templates
- Responsive design

## Tech Stack

- Frontend: React.js with Tailwind CSS
- Backend: Node.js with Express
- Database: MongoDB
- AI Integration: OpenAI GPT API
- PDF Generation: html2pdf.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- OpenAI API key

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Create a .env file in the backend directory with your environment variables:
   ```
   MONGODB_URI=your_mongodb_uri
   OPENAI_API_KEY=your_openai_api_key
   PORT=5000
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

The application will be available at `http://localhost:3000`

## Project Structure

```
resume-builder/
├── frontend/           # React frontend application
├── backend/            # Node.js backend server
└── README.md          # Project documentation
```
