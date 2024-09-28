import React from "react";

import "./index.css";

export default function InputField({
  id,
  defaultValue,
  type = "text",
  placeholder = id,
  label = "",
  values = [],
  options = {},
  groupOptions = {},
  onChange = () => {},
  required = false,
}) {
  const InputComponent = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={id}
            name={id}
            value={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            {...options}
          />
        );

      case "select":
        return (
          <select id={id} name={id} value={defaultValue} onChange={onChange} required={required} {...options}>
            {values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            id={id}
            name={id}
            value={defaultValue}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            {...options}
          />
        );
    }
  };

  return (
    <div className="au-form-group" {...groupOptions}>
      <label htmlFor={id}>{label}</label>
      {InputComponent()}
    </div>
  );
}
