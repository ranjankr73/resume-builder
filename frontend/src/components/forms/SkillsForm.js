import React, { useState } from 'react';
import { useFieldArray } from 'react-hook-form';
import toast from 'react-hot-toast';

function SkillsForm({ register, control, errors, onSubmit }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
    defaultValues: {
      skills: []
    }
  });

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSkills = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/ai/generate-skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobTitle: fields[0]?.category || 'Software Developer' }),
      });
      
      if (!response.ok) throw new Error('Failed to generate skills');
      
      const data = await response.json();
      data.skills.forEach(skill => append({ name: skill }));
      toast.success('Skills generated successfully!');
    } catch (error) {
      toast.error('Failed to generate skills');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form id="form-3" onSubmit={onSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Skills</h3>
        <button
          type="button"
          onClick={handleGenerateSkills}
          disabled={isGenerating}
          className="btn-primary bg-green-600 hover:bg-green-700"
        >
          {isGenerating ? 'Generating...' : 'Generate AI Suggestions'}
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center space-x-2">
            <input
              type="text"
              {...register(`skills.${index}.name`, { required: 'Skill is required' })}
              className="input-field"
              placeholder="Enter a skill"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => append({ name: '' })}
        className="btn-primary bg-green-600 hover:bg-green-700 w-full"
      >
        Add Skill
      </button>
    </form>
  );
}

export default SkillsForm;
