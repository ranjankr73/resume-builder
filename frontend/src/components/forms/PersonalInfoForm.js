import React from 'react';

function PersonalInfoForm({ register, errors, onSubmit }) {
  return (
    <form id="form-0" onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input
          type="text"
          id="fullName"
          {...register('personalInfo.fullName', { required: 'Full name is required' })}
          className="input-field"
        />
        {errors.personalInfo?.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.personalInfo.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          {...register('personalInfo.email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="input-field"
        />
        {errors.personalInfo?.email && (
          <p className="mt-1 text-sm text-red-600">{errors.personalInfo.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="tel"
          id="phone"
          {...register('personalInfo.phone', { required: 'Phone number is required' })}
          className="input-field"
        />
        {errors.personalInfo?.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.personalInfo.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="location" className="form-label">Location</label>
        <input
          type="text"
          id="location"
          {...register('personalInfo.location', { required: 'Location is required' })}
          className="input-field"
        />
        {errors.personalInfo?.location && (
          <p className="mt-1 text-sm text-red-600">{errors.personalInfo.location.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="summary" className="form-label">Professional Summary</label>
        <textarea
          id="summary"
          rows={4}
          {...register('personalInfo.summary', { required: 'Summary is required' })}
          className="input-field"
        />
        {errors.personalInfo?.summary && (
          <p className="mt-1 text-sm text-red-600">{errors.personalInfo.summary.message}</p>
        )}
      </div>
    </form>
  );
}

export default PersonalInfoForm;
