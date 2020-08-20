import React from 'react';

const CreateInput = ({ type, name, id, value, onChange, label, placeholder, step }) => {
  return type === 'textarea' ? (
    <div className="d-flex align-items-center mt-2 mb-2">
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  ) : (
    <div className="d-flex align-items-center mt-2 mb-2">
      <label className="mr-2" htmlFor={id}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        step={step}
      />
    </div>
  );
};

export default CreateInput;
