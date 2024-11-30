import React from 'react';
import { useFieldArray } from 'react-hook-form';

function ExperienceForm({ register, control, errors, onSubmit }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
    defaultValues: {
      experience: []
    }
  });

  return (
    <form id="form-1" onSubmit={onSubmit} className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Experience {index + 1}</h3>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>

          <div>
            <label className="form-label">Company Name</label>
            <input
              type="text"
              {...register(`experience.${index}.company`, { required: 'Company name is required' })}
              className="input-field"
            />
            {errors.experience?.[index]?.company && (
              <p className="mt-1 text-sm text-red-600">{errors.experience[index].company.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Position</label>
            <input
              type="text"
              {...register(`experience.${index}.position`, { required: 'Position is required' })}
              className="input-field"
            />
            {errors.experience?.[index]?.position && (
              <p className="mt-1 text-sm text-red-600">{errors.experience[index].position.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Start Date</label>
              <input
                type="date"
                {...register(`experience.${index}.startDate`, { required: 'Start date is required' })}
                className="input-field"
              />
              {errors.experience?.[index]?.startDate && (
                <p className="mt-1 text-sm text-red-600">{errors.experience[index].startDate.message}</p>
              )}
            </div>

            <div>
              <label className="form-label">End Date</label>
              <input
                type="date"
                {...register(`experience.${index}.endDate`)}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Description</label>
            <textarea
              rows={4}
              {...register(`experience.${index}.description`, { required: 'Description is required' })}
              className="input-field"
            />
            {errors.experience?.[index]?.description && (
              <p className="mt-1 text-sm text-red-600">{errors.experience[index].description.message}</p>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ 
          company: '', 
          position: '', 
          startDate: '', 
          endDate: '', 
          description: '' 
        })}
        className="btn-primary bg-green-600 hover:bg-green-700 w-full"
      >
        Add Experience
      </button>
    </form>
  );
}

export default ExperienceForm;
