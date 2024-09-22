import React from "react";

export default function InputField({
  id,
  type = "text",
  label = `${id}:`,
  values = [],
  options = {},
  groupOptions = {},
  required = false,
}) {
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return <textarea id={id} name={id} {...options} required={required} />;

      case "select":
        return (
          <select id={id} name={id} {...options} required={required}>
            {values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        );

      default:
        return <input type={type} id={id} name={id} {...options} required={required} />;
    }
  };

  return (
    <div className="au-form-group" {...groupOptions}>
      <label htmlFor={id}>{label}</label>
      {renderInput()}
    </div>
  );
}
