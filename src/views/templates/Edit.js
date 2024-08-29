import { createElement, createFragment } from "../Render";
import Button from "./Button";
import FormGroup from "./FormGroup";

/** @jsx createElement */
/** @jsxFrag createFragment */

function FormHabit(props) {
  const { id } = props;

  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value,
      description = e.target.description.value,
      frequency = e.target.frequency.value,
      points = parseInt(e.target.points.value);

    (id == "new")
      ? props.addCard(true, name, description, frequency, points)
      : props.updateCard(true, id, { name, description, frequency, points });

    window.location.href = "/";
  };

  const onFrequencyChange = (e) => {
    const weeklyDays = $("#weekly-days");
    e.target.value == "weekly" ? weeklyDays.show() : weeklyDays.hide();
  };

  return (
    <form onSubmit={onSubmit}>
      <FormGroup label="name:" id="name" type="text" />
      <FormGroup label="description:" id="description" type="textarea" options={{ rows: 1 }} />
      <FormGroup label="points:" id="points" type="number" />

      <FormGroup
        label="frequency:"
        id="frequency"
        type="select"
        values={["daily", "weekly", "monthly", "once"]}
        options={{ onChange: onFrequencyChange }}
      />

      <FormGroup
        label="select days:"
        id="days"
        type="select"
        values={["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]}
        options={{ multiple: true, size: 1 }}
        groupOptions={{ id: "weekly-days", hidden: true }}
      />

      <div class="au-form-button">
        <Button className="text" text="save habit" type="submit" />
      </div>
    </form>
  );
}

function FormReward(props) {
  const { id } = props;

  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value,
      description = e.target.description.value,
      points = parseInt(e.target.points.value);

    (id == "new")
      ? props.addCard(false, name, description, points)
      : props.updateCard(false, id, { name, description, points });

    window.location.href = "/rewards";
  };

  return (
    <form onSubmit={onSubmit}>
      <FormGroup label="name:" id="name" type="text" />
      <FormGroup label="description:" id="description" type="textarea" options={{ rows: 1 }} />
      <FormGroup label="points:" id="points" type="number" />

      <div class="au-form-button">
        <Button className="text" text="save reward" type="submit" />
      </div>
    </form>
  );
}

function Edit(props) {
  if (props) {
    const params = new URL(location.href).searchParams;

    const id = (params.get("habit") ?? params.get("reward")) || "";
    const Form = params.get("habit") ? FormHabit : FormReward;

    return (
      <main class="au-main-flex">
        <Form {...props} id={id} />
      </main>
    );
  }
}

export default Edit;
