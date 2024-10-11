export default function parseFrequency(habit) {
  const now = new Date();
  const lastUpdated = new Date(habit.updated_at);
  const created = new Date(habit.created_at);

  if (!habit.frequency) {
    return habit.streak == 0;
  }

  const isUpdatedToday = lastUpdated.toDateString() === now.toDateString();
  const isCreatedToday = lastUpdated.toString() === created.toString();

  const daysOfWeek = habit.frequency.split("").map(Number);
  const currentDay = now.getDay();

  return daysOfWeek.includes(currentDay) && (!isUpdatedToday || isCreatedToday);
}

export const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export function daysToFrequencies(array) {
  const days = Array.from(array.selectedOptions).map((option) => option.value);
  return weekdays.map((day, index) => (days.includes(day) ? index : null)).join("");
}

export function frequenciesToDays(str) {
  const frequencies = str.split("").map(Number);
  return weekdays.filter((_, index) => frequencies.includes(index));
}
