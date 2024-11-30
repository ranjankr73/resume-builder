import React from 'react';
import { useFieldArray } from 'react-hook-form';

function EducationForm({ register, control, errors, onSubmit }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
    defaultValues: {
      education: []
    }
  });

  return (
    <form id="form-2" onSubmit={onSubmit} className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="bg-gray-50 p-4 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Education {index + 1}</h3>
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>

          <div>
            <label className="form-label">Institution</label>
            <input
              type="text"
              {...register(`education.${index}.institution`, { required: 'Institution is required' })}
              className="input-field"
            />
            {errors.education?.[index]?.institution && (
              <p className="mt-1 text-sm text-red-600">{errors.education[index].institution.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">Degree</label>
            <input
              type="text"
              {...register(`education.${index}.degree`, { required: 'Degree is required' })}
              className="input-field"
            />
            {errors.education?.[index]?.degree && (
              <p className="mt-1 text-sm text-red-600">{errors.education[index].degree.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Start Date</label>
              <input
                type="date"
                {...register(`education.${index}.startDate`, { required: 'Start date is required' })}
                className="input-field"
              />
              {errors.education?.[index]?.startDate && (
                <p className="mt-1 text-sm text-red-600">{errors.education[index].startDate.message}</p>
              )}
            </div>

            <div>
              <label className="form-label">End Date</label>
              <input
                type="date"
                {...register(`education.${index}.endDate`)}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Description</label>
            <textarea
              rows={4}
              {...register(`education.${index}.description`)}
              className="input-field"
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ 
          institution: '', 
          degree: '', 
          startDate: '', 
          endDate: '', 
          description: '' 
        })}
        className="btn-primary bg-green-600 hover:bg-green-700 w-full"
      >
        Add Education
      </button>
    </form>
  );
}

export default EducationForm;
