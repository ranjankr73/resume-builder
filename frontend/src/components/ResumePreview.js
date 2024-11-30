import React from 'react';
import html2pdf from 'html2pdf.js';

function ResumePreview({ data }) {
  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="bg-white shadow sm:rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-900">Resume Preview</h2>
        <button
          onClick={handleDownload}
          className="btn-primary"
        >
          Download PDF
        </button>
      </div>

      <div id="resume-preview" className="space-y-6">
        {/* Personal Info Section */}
        {data.personalInfo && (
          <div className="border-b pb-6">
            <h1 className="text-2xl font-bold text-gray-900">{data.personalInfo.fullName}</h1>
            <div className="mt-2 text-sm text-gray-600">
              <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
            </div>
            <p className="mt-4 text-gray-700">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience Section */}
        {data.experience?.length > 0 && (
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </p>
                </div>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {data.education?.length > 0 && (
          <div className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </p>
                </div>
                {edu.description && (
                  <p className="mt-2 text-gray-700">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {data.skills?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumePreview;
