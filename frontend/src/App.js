import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResumeBuilder from './pages/ResumeBuilder';
import Layout from './components/Layout';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <Routes>
          <Route path="/" element={<ResumeBuilder />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
