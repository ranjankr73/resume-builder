import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import ExperienceForm from '../components/forms/ExperienceForm';
import EducationForm from '../components/forms/EducationForm';
import SkillsForm from '../components/forms/SkillsForm';
import ResumePreview from '../components/ResumePreview';

function ResumeBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    skills: []
  });

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: resumeData
  });

  const steps = [
    { title: 'Personal Info', component: PersonalInfoForm },
    { title: 'Experience', component: ExperienceForm },
    { title: 'Education', component: EducationForm },
    { title: 'Skills', component: SkillsForm }
  ];

  const handleNext = (data) => {
    setResumeData(prev => ({ ...prev, ...data }));
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
    } else {
      handleExport();
    }
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleExport = async () => {
    try {
      // Export logic will be implemented here
      toast.success('Resume exported successfully!');
    } catch (error) {
      toast.error('Failed to export resume');
    }
  };

  const CurrentStepComponent = steps[activeStep].component;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {steps[activeStep].title}
            </h2>
            <CurrentStepComponent
              register={register}
              control={control}
              errors={errors}
              onSubmit={handleSubmit(handleNext)}
              data={resumeData}
            />
            <div className="mt-6 flex justify-between">
              {activeStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn-primary bg-gray-600 hover:bg-gray-700"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                form={`form-${activeStep}`}
                className="btn-primary ml-auto"
              >
                {activeStep === steps.length - 1 ? 'Export' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}

export default ResumeBuilder;
