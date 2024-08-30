import { createElement, createFragment } from "../Render";
import Button from "./Button";
import FormGroup from "./FormGroup";

/** @jsx createElement */
/** @jsxFrag createFragment */

const freqValues = ["once", "daily", "weekly", "monthly"];
const daysValues = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getFrecuencies(value, days) {
  if (value == "weekly") {
    days.forEach((day, index) => (days.includes(day) ? (value += index) : null));
  }

  return value;
}

function Edit(props) {
  if (props) {
    const params = new URL(location.href).searchParams;
    const id = params.get("id");

    if (id) {
      const onSubmit = (e) => {
        e.preventDefault();

        const days = $(e.target.days).val();

        const name = e.target.name.value;
        const description = e.target.description.value;
        const frequency = getFrecuencies(e.target.frequency.value, days);
        const points = parseInt(e.target.points.value);

        id == "new"
          ? props.addCard(name, description, points, frequency)
          : props.setCard(id, { name, description, points, frequency });

        window.location.href = "/";
      };

      const onFrequencyChange = (e) => {
        const weeklyDays = $("#weekly-days");
        e.target.value == "weekly" ? weeklyDays.show() : weeklyDays.hide();
      };

      return (
        <main class="au-main-flex">
          <form onSubmit={onSubmit}>
            <FormGroup label="name:" id="name" type="text" />
            <FormGroup label="description:" id="description" type="textarea" options={{ rows: 1 }} />
            <FormGroup label="points:" id="points" type="number" />

            <FormGroup
              label="frequency:"
              id="frequency"
              type="select"
              values={freqValues}
              options={{ onChange: onFrequencyChange, required: false }}
            />

            <FormGroup
              label="select days:"
              id="days"
              type="select"
              values={daysValues}
              options={{ multiple: true, size: 1, required: false }}
              groupOptions={{ id: "weekly-days", hidden: true }}
            />

            <div class="au-form-button">
              <Button className="text" text="save habit" type="submit" />
            </div>
          </form>
        </main>
      );
    } else {
      window.location.href = "/";
    }
  }
}

export default Edit;
