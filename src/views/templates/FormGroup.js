import { createElement, createFragment } from "../Render";

/** @jsx createElement */
/** @jsxFrag createFragment */

function FormGroup(props) {
  var { label, id, type, values, options, groupOptions } = props;

  options ??= {};
  options.required ??= true;

  var input = null;

  switch (type) {
    default:
      input = <input type={type} id={id} name={id} {...options} />;
      break;

    case "textarea":
      input = <textarea id={id} name={id} {...options} />;
      break;

    case "select":
      input = <select id={id} name={id} {...options}></select>;

      values.forEach((value) => {
        const optElement = <option value={value}>{value}</option>;
        $(input).append(optElement);
      });

      break;
  }

  $(input).attr("required", options.required);

  return (
    <div class="au-form-group" {...groupOptions}>
      <label for={id}>{label}</label>
      {input}
    </div>
  );
}

export default FormGroup;
