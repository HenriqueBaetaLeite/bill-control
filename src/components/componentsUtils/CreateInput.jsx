import React from 'react';

const CreateInput = ({ type, name, id, value, onChange, label, placeholder, step, required }) => {
  return type === 'textarea' ? (
    <div className="d-flex align-items-center mt-2 mb-2">
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        className="form-control"
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </div>
  ) : (
    <div className="d-flex align-items-center mt-2 mb-2">
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        step={step}
        required={required}
      />
    </div>
  );
};

export default CreateInput;
