import { createElement, createFragment } from "../Render";
import Button from "./Button";

/** @jsx createElement */
/** @jsxFrag createFragment */

function FormHabit(props) {
  return (
    <>
      <form id="habitForm" onSubmit={props.onSubmit}>
        <div class="form-group">
          <label for="name">Habit Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" name="description" rows="4" required></textarea>
        </div>

        <div class="form-group">
          <label for="frequency">Frequency:</label>
          <select id="frequency" name="frequency" required>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="once">Once</option>
          </select>
        </div>

        <div class="form-group hidden" id="weeklyDays">
          <label for="days">Select Days (for Weekly):</label>
          <select id="days" name="days" multiple>
            <option value="0">Sunday</option>
            <option value="1">Monday</option>
            <option value="2">Tuesday</option>
            <option value="3">Wednesday</option>
            <option value="4">Thursday</option>
            <option value="5">Friday</option>
            <option value="6">Saturday</option>
          </select>
        </div>

        <div class="form-group">
          <label for="points">Points:</label>
          <input type="number" id="points" name="points" min="0" required />
        </div>

        <button type="submit">Save Habit</button>
      </form>
    </>
  );
}

function FormReward(props) {}

function Edit(props) {
  if (props) {
    const params = new URL(location.href).searchParams;

    const type = params.get("habit") ? "habit" : "reward";
    const id = (params.get("habit") ?? params.get("reward")) || "";

    var form = null;

    switch (type) {
      case "habit":
        props.onSubmit = (e) => {
          e.preventDefault();

          if (id == "new") {
            props.addCard(
              true,
              e.target.name.value,
              e.target.description.value,
              e.target.frequency.value,
              parseInt(e.target.points.value)
            );
          } else {
            props.updateCard(true, id, {
              name: e.target.name.value,
              description: e.target.description.value,
              frequency: e.target.frequency.value,
              points: e.target.points.value,
            });
          }

          window.location.href = "/";
        };

        form = <FormHabit {...props} />;
        break;

      case "reward":
        props.onSubmit = (e) => {
          e.preventDefault();

          if (id == "new") {
            props.addCard(false, e.target.name.value, e.target.description.value, e.target.points.value);
          } else {
            props.updateCard(false, id, {
              name: e.target.name.value,
              description: e.target.description.value,
              points_required: e.target.points.value,
            });
          }

          window.location.href = "/rewards";
        };

        form = <FormReward {...props} />;
        break;
    }

    return <main class="au-main-flex">{form}</main>;
  }
}

export default Edit;
