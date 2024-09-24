import React from "react";

export default function InputField({
  id,
  value,
  type = "text",
  placeholder = id,
  label = `${id}:`,
  values = [],
  required = false,
  onChange,
  options = {},
  groupOptions = {},
}) {
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={onChange}
            {...options}
          />
        );

      case "select":
        return (
          <select id={id} name={id} {...options} required={required} onChange={onChange}>
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
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={onChange}
            {...options}
          />
        );
    }
  };

  return (
    <div className="au-form-group" {...groupOptions}>
      <label htmlFor={id}>{label}</label>
      {renderInput()}
    </div>
  );
}
