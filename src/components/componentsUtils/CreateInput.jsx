import React from 'react';

const CreateInput = ({ type, name, id, value, onChange, label, placeholder }) => {
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
      />
    </label>
  );
};

export default CreateInput;
