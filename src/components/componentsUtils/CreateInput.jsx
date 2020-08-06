import React from 'react';

const CreateInput = ({ type, name, id, value, onChange, label, placeholder, step }) => {
  return type === 'textarea' ? (
    <label htmlFor={id}>
      {label}
      <textarea
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </label>
  ) : (
    <label htmlFor={id}>
      {label}
      <input
        name={name}
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        step={step}
      />
    </label>
  );
};

export default CreateInput;
